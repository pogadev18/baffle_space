import { Form, Formik } from 'formik';
import { Button, Input } from '@chakra-ui/react';
import { Box, Stack } from '@chakra-ui/layout';
import {
  CreateContestFormValues,
  createContestFormInitialValues,
  validationSchema,
} from '@/utils/createContestForm';

import MultipleFileUploadFields from '@/components/uploadFIles/multipleFileUploadFields';

const CreateContestForm = () => {
  const handleSubmit = (values: CreateContestFormValues) => {
    console.log(values);
  };

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
