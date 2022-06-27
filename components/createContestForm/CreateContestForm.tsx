import { Form, Formik, FormikProps } from 'formik';
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
      {(props: FormikProps<CreateContestFormValues>) => {
        const { values, touched, errors, isSubmitting, handleChange, handleBlur } = props;
        return (
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
                {errors.description && touched.description && <p>{errors.description}</p>}
              </Box>
              <Box>
                <MultipleFileUploadFields />
              </Box>
            </Stack>
            <Button colorScheme="yellow" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateContestForm;
