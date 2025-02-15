import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import s from "./LoginForm.module.css";

// eslint-disable-next-line react/prop-types
const LoginForm = ({handleSubmit}) => {
	const INITIAL_VALUES = {
    email: "",
    password: "",
	};
	
	return (
    <div className={s.login_container}>
      <h2>Login</h2>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form className={s.login_form}>
          <label className={s.login_label}>
            Email:
            <Field className={s.login_input} name="email" />
          </label>
          <label className={s.login_label}>
            Password:
            <Field className={s.login_input} name="password" type="password" />
          </label>
          <button type="submit">Login</button>
        </Form>
      </Formik>
      <p>
        You do not have account?{" "}
        <Link to="/register" className={s.login_input}>
          Register here{" "}
        </Link>
      </p>
    </div>
  );
}

export default LoginForm