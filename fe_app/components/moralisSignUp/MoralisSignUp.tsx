import { useState } from "react";
import { useMoralis } from "react-moralis";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Stack, Box } from "@chakra-ui/layout";

import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";

interface MoralisSignUpValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("enter a valid email"),
  password: Yup.string()
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/)
    .required(
      "Please valid password. One uppercase, one lowercase, one special character and no spaces"
    ),
});

const initialValues = {
  email: "",
  password: "",
};

const MoralisSignUp = () => {
  const { signup } = useMoralis();
  const [show, setShow] = useState(false);

  const handleSubmit = async (values: MoralisSignUpValues) => {
    const { email, password } = values;
    await signup(email, password);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(props: FormikProps<MoralisSignUpValues>) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        } = props;
        return (
          <Form>
            <Stack spacing={30}>
              <Box>
                <Input
                  name="email"
                  id="email"
                  variant="flushed"
                  size="md"
                  type="text"
                  placeholder="Email"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!(errors.email && touched.email)}
                />
                <div>{errors.email && touched.email && errors.email}</div>
              </Box>
              <InputGroup>
                <Input
                  name="password"
                  id="password"
                  variant="flushed"
                  size="md"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  isInvalid={!!(errors.password && touched.password)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                    {show ? "ascunde" : "vezi"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <div>
                {errors.password && touched.password && errors.password}
              </div>
              <Button type="submit" disabled={isSubmitting}>
                Crează cont
              </Button>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
};

export default MoralisSignUp;
