import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const INITIAL_VALUES = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => {
        navigate("/");
      });
    actions.resetForm();
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
        You do not have an account?{" "}
        <Link to="/register" className={s.login_input}>
          Register here{" "}
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
