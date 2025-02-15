import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { loginThunk } from "../../redux/auth/operations";

const Login = () => {
  

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
		dispatch(loginThunk(values))
      .unwrap()
      .then(() => {
        navigate("/");
      });
    options.resetForm();
  };

  return (
		<>
			<LoginForm handleSubmit={handleSubmit} />
		</>
  );
};

export default Login;
