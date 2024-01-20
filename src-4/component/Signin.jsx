import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const loginSchema = Yup.object().shape({
    
  password: Yup.string()
  .test('passwords-match', 'Passwords must match', function(value){
    return user.props.password === value
  }),
  email: Yup.string().email("Invalid email").required("Required")
  .test('passwords-match', 'Passwords must match', function(value){
    return user.props.email === value
  })
});

class LoginForm extends React.Component {
  handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={this.handleSubmit}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <label>
                  Email: <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </label>
                <label>
                  Password:
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                </label>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </>
    );
  }
}

export default LoginForm;
