import { Field, Form, Formik } from "formik";
import s from "../css/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../redux/authOps";

const Register = () => {

	const INITIAL_VALUES = {
		name: '',
		email: '',
		password: '',
	}

	const dispatch = useDispatch();

	const navigate = useNavigate()
	
	const handleSubmit = (values, options) => {
		console.log(values);
		dispatch(registerThunk(values)).unwrap().then(() => navigate('/'))
		options.resetForm();
	}

	
	return (
    <div className={s.login_container}>
      Register
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

export default Register;
