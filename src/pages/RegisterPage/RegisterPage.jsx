import { useDispatch } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";

const Register = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };

  return (
    <>
      <RegistrationForm handleSubmit={handleSubmit} />
    </>
  );
};

export default Register;
