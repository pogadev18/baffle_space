import React, { useState } from 'react';
import { Box, Stack } from '@chakra-ui/layout';
import { Form, Formik, FormikProps } from 'formik';
import { Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';

import AlertComponent from '@/root/components/alert';
import {
  SocialsFormValues,
  socialsInitialValues,
  validationSchema,
} from '@/root/utils/landingPage';
import { AlertStatusValues } from '@/root/utils/interfaces/alertStatuses';

const { Success } = AlertStatusValues;

interface SocialsFormProps {
  isAuthenticated: boolean;
}

const SocialsForm = ({ isAuthenticated }: SocialsFormProps) => {
  const { user, setUserData } = useMoralis();

  const [subscribedToSocials, setSubscribedToSocials] = useState(false);

  const handleSocialsSubmit = async (values: SocialsFormValues) => {
    try {
      const { tiktok, twitter } = values;

      if (tiktok.trim() !== '' || twitter.trim() !== '') {
        setSubscribedToSocials(true);

        await setUserData({ tiktok, twitter });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box>
      {isAuthenticated && subscribedToSocials && (
        <AlertComponent
          status={Success}
          title="YEEEEEEI"
          description="thanks for letting us know about your socials"
        />
      )}
      <Formik
        enableReinitialize
        initialValues={socialsInitialValues(user)}
        validationSchema={validationSchema}
        onSubmit={handleSocialsSubmit}
      >
        {(props: FormikProps<SocialsFormValues>) => {
          const { values, touched, errors, isSubmitting, handleChange, handleBlur } = props;
          return (
            <Form>
              <Stack spacing={30}>
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="tiktok">TikTok</FormLabel>
                    <Input
                      width="50%"
                      name="tiktok"
                      id="tiktok"
                      type="text"
                      placeholder="@baffle_me_2022"
                      onBlur={handleBlur}
                      value={values.tiktok}
                      onChange={handleChange}
                      isInvalid={!!(errors.tiktok && touched.tiktok)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="twitter">Twitter</FormLabel>

                    <Input
                      width="50%"
                      name="twitter"
                      id="twitter"
                      size="md"
                      type="text"
                      placeholder="@baffle_me_2022"
                      onBlur={handleBlur}
                      value={values.twitter}
                      onChange={handleChange}
                      isInvalid={!!(errors.twitter && touched.twitter)}
                    />
                  </FormControl>
                </Box>
              </Stack>
              <Button
                width="250px"
                mt="6"
                colorScheme="purple"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default SocialsForm;
