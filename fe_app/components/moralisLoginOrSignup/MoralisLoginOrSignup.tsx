import { useState } from "react";
import { useMoralis } from "react-moralis";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Stack, Box } from "@chakra-ui/layout";

import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import { ObjectSchema } from "yup";

interface MoralisSignUpValues {
  email: string;
  password: string;
}

const initialValues = {
  email: "",
  password: "",
};

const buildValidationSchema = (isLogin: boolean): ObjectSchema<any> => {
  const emailMessage = isLogin
    ? "Email-ul este obligatoriu"
    : "Introdu o adresa de e-mail valida";

  const passwordMessage = isLogin
    ? "Parola este obligatorie"
    : "Parola trebuie sa curpinda o litera cu caracter mare, un caracter special (*#&), o cifră si fara spatii.";

  return Yup.object().shape({
    email: Yup.string().email().required(emailMessage),
    password: Yup.string()
      .required(passwordMessage)
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
      ),
  });
};

const MoralisLoginOrSignup = ({ isLogin }: { isLogin: boolean }) => {
  const { login, signup } = useMoralis();
  const [show, setShow] = useState(false);

  const handleSubmit = async (values: MoralisSignUpValues) => {
    const { email, password } = values;
    isLogin ? await login(email, password) : await signup(email, password);
  };

  return (
    <>
      <Text fontSize="2xl">
        {isLogin ? "Loghează-te cu email și parolă" : null}
      </Text>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={buildValidationSchema(isLogin)}
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
                  {errors.email && touched.email && (
                    <Text color="red" fontSize="sm">
                      {errors.email}
                    </Text>
                  )}
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
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShow(!show)}
                    >
                      {show ? "ascunde" : "vezi"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.password && touched.password && (
                  <Text color="red" fontSize="sm">
                    {errors.password}
                  </Text>
                )}
                <Button
                  colorScheme="yellow"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isLogin ? "Login" : "Creează cont"}
                </Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default MoralisLoginOrSignup;
