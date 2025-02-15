import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "./HomePage.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div>
      {isLoggedIn ? (
        <h2>
          Hello <span className={s.username}>{user?.name}</span>!
        </h2>
      ) : (
        <h2>
          Hello Guest! To start using this service{" "}
          <Link to="/register">Register here</Link>
        </h2>
      )}
    </div>
  );
};

export default Home;
