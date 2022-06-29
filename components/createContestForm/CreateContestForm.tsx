import { useState } from 'react';
import { Form, Formik } from 'formik';
import { Button, Input } from '@chakra-ui/react';
import { Box, Stack } from '@chakra-ui/layout';
import { useMoralis, useNewMoralisObject } from 'react-moralis';

import MultipleFileUploadFields from '@/components/uploadFIles/multipleFileUploadFields';

import {
  createContestFormInitialValues,
  CreateContestFormValues,
  validationSchema,
} from '@/utils/createContestForm';

import { uploadImagesToIPFS } from './utils';

const CreateContestForm = () => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const { save } = useNewMoralisObject('Contest');
  const { user } = useMoralis();

  const handleSubmit = async (values: CreateContestFormValues) => {
    setFormSubmitting(true);
    const { files, description } = values;

    if (files.length !== 0) {
      const imageHasErrors = !!files.find((file) => file.errors.length >= 1);

      if (!imageHasErrors) {
        try {
          const ipfsImagesResults = await uploadImagesToIPFS(files);
          // @ts-ignore
          const imageURLS: string[] = ipfsImagesResults?.map((file) => file.ipfs());

          const dataToSaveForContestInMoralis = {
            description,
            createdBy: user?.get('ethAddress'),
            imageURLS,
          };

          await save(dataToSaveForContestInMoralis);
          setFormSubmitting(false);
        } catch (e) {
          setFormSubmitting(false);
        }
      }
    }
  };

  console.log(formSubmitting);

  return (
    <Formik
      enableReinitialize
      initialValues={createContestFormInitialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleBlur, handleChange, touched, values, errors, isSubmitting }) => (
        <Form>
          <Stack spacing={30}>
            <Box>
              <Input
                name="description"
                id="description"
                variant="flushed"
                size="md"
                type="textarea"
                placeholder="Description"
                onBlur={handleBlur}
                value={values.description}
                onChange={handleChange}
                isInvalid={!!(errors.description && touched.description)}
              />
              {/* {errors.description && touched.description && <p>{errors.description}</p>} */}
            </Box>
            <Box>
              <MultipleFileUploadFields name="files" />
              {/* {errors.files && touched.files && <p>{errors.files}</p>} */}
            </Box>
            <Button variant="contained" color="primary" disabled={isSubmitting} type="submit">
              Submit
            </Button>

            <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default CreateContestForm;
