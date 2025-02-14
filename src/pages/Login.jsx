import { Field, Form, Formik } from "formik"
import s from '../css/Login.module.css'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginThunk } from "../redux/authOps"

const Login = () => {

	const INITIAL_VALUES = {
		email: '',
		password: '',
	}

	const dispatch = useDispatch();
	
	const navigate = useNavigate();

	const handleSubmit = (values, options) => {
		dispatch(loginThunk(values)).unwrap().then(() => {
			navigate('/')
		});
		options.resetForm();
	}

	return (
    <div className={s.login_container}>
      Login
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
        <Link to='/register' className={s.login_input}>Register here </Link>
      </p>
    </div>
  );
}

export default Login