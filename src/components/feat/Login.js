import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

import { Stack, Button, Alert } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";

import { getUser111 } from "api/user";

import { loginSchema } from "validations/auth";

const Login = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const sha256 = CryptoJS.SHA256;

  const handleSubmit = async (values) => {
    const user = await getUser111().then((data) => data.data.results[0].login);

    console.log(user)

    const hashedPassword = sha256(values.password + user.salt).toString();

    if (values.username === user.username && hashedPassword === user.sha256)
      return navigate("/friends");

    setError("Wrong Username or Password");
  };

  return (
    <Fragment>
      <Formik
        validationSchema={loginSchema}
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values, actions) => {
          await handleSubmit(values);
          actions.setSubmitting(false);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Stack spacing={1}>
              {error && <Alert severity="warning">{error}</Alert>}
              <Field
                component={TextField}
                color="primary"
                fullWidth
                name="username"
                type="username"
                label="Username"
              />
              <Field
                component={TextField}
                color="primary"
                fullWidth
                name="password"
                type="password"
                label="Password"
              />
            </Stack>
            <Stack direction="row" justifyContent="flex-end"></Stack>
            <Button
              disabled={isSubmitting}
              onClick={submitForm}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default Login;
