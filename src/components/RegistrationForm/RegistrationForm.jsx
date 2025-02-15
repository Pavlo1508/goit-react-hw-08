import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import s from "./RegistrationForm.module.css";

// eslint-disable-next-line react/prop-types
const RegistrationForm = ({handleSubmit}) => {
	const INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
	};
	
	return (
    <div className={s.login_container}>
      <h2>Register</h2>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form className={s.login_form}>
          <label className={s.login_label}>
            Name:
            <Field className={s.login_input} name="name" />
          </label>
          <label className={s.login_label}>
            Email:
            <Field className={s.login_input} name="email" />
          </label>
          <label className={s.login_label}>
            Password:
            <Field className={s.login_input} name="password" type="password" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
      <p>
        Do you have account?{" "}
        <Link to="/login" className={s.login_input}>
          Login here{" "}
        </Link>
      </p>
    </div>
  );
}

export default RegistrationForm