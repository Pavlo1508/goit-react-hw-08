import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/selectors";
import { logoutThunk } from "../../redux/authOps";
// aloalo@mail.pryvit.com

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Header</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/contacts">Contacts</NavLink>
            <button
              onClick={() => {
                dispatch(logoutThunk());
              }}
            >
              Loggout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
