import React, { useState } from 'react';
import { Box, Stack } from '@chakra-ui/layout';
import { Form, Formik, FormikProps } from 'formik';
import { Button, Input } from '@chakra-ui/react';
import useLoggedInUser from '@/hooks/useLoggedInUser';
import { doc, setDoc, serverTimestamp } from '@firebase/firestore';

import AlertComponent from '@/components/alert';
import { SocialsFormValues, socialsInitialValues, validationSchema } from '@/utils/landingPage';
import { AlertStatusValues } from '@/utils/interfaces/alertStatuses';

import { db } from '@/firebase/clientApp';

const { Success } = AlertStatusValues;

interface SocialsFormProps {
  isAuthenticated: boolean;
}

const SocialsForm = ({ isAuthenticated }: SocialsFormProps) => {
  const { loggedInUser } = useLoggedInUser();
  const [subscribedToSocials, setSubscribedToSocials] = useState(false);

  const handleSocialsSubmit = async (values: SocialsFormValues) => {
    try {
      const userDocRef = doc(db, 'users', loggedInUser?.docID);
      const { tiktok, twitter, facebook, instagram } = values;

      const socialsData = {
        tiktok,
        twitter,
        facebook,
        instagram,
      };

      await setDoc(
        userDocRef,
        {
          lastUpdatedAt: serverTimestamp(),
          socials: socialsData,
        },
        { merge: true },
      );
      setSubscribedToSocials(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box>
      {!subscribedToSocials && (
        <Formik
          enableReinitialize
          initialValues={socialsInitialValues(loggedInUser)}
          validationSchema={validationSchema}
          onSubmit={handleSocialsSubmit}
        >
          {(props: FormikProps<SocialsFormValues>) => {
            const { values, touched, errors, isSubmitting, handleChange, handleBlur } = props;
            return (
              <Form>
                <Stack spacing={30}>
                  <Box>
                    <Input
                      name="instagram"
                      id="instagram"
                      variant="flushed"
                      size="md"
                      type="text"
                      placeholder="Instagram handle"
                      onBlur={handleBlur}
                      value={values.instagram}
                      onChange={handleChange}
                      isInvalid={!!(errors.instagram && touched.instagram)}
                    />
                  </Box>
                  <Box>
                    <Input
                      name="facebook"
                      id="facebook"
                      variant="flushed"
                      size="md"
                      type="text"
                      placeholder="Facebook profile"
                      onBlur={handleBlur}
                      value={values.facebook}
                      onChange={handleChange}
                      isInvalid={!!(errors.facebook && touched.facebook)}
                    />
                  </Box>
                  <Box>
                    <Input
                      name="tiktok"
                      id="tiktok"
                      variant="flushed"
                      size="md"
                      type="text"
                      placeholder="Tiktok profile"
                      onBlur={handleBlur}
                      value={values.tiktok}
                      onChange={handleChange}
                      isInvalid={!!(errors.tiktok && touched.tiktok)}
                    />
                  </Box>
                  <Box>
                    <Input
                      name="twitter"
                      id="twitter"
                      variant="flushed"
                      size="md"
                      type="text"
                      placeholder="Twitter profile"
                      onBlur={handleBlur}
                      value={values.twitter}
                      onChange={handleChange}
                      isInvalid={!!(errors.twitter && touched.twitter)}
                    />
                  </Box>
                </Stack>
                <Button colorScheme="yellow" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            );
          }}
        </Formik>
      )}
      {isAuthenticated && subscribedToSocials && (
        <AlertComponent
          status={Success}
          title="YEEEEEEI"
          description="thanks for letting us know about your socials"
        />
      )}
    </Box>
  );
};

export default SocialsForm;
