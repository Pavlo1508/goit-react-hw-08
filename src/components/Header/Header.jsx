import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
// aloalo@mail.pryvit.com
// adrgwer12341@gma.co

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.page, isActive && s.active);
  };

  return (
    <div className={s.header}>
      <nav className={s.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink className={buildLinkClass} to="/contacts">
              Contacts
            </NavLink>
            <button
              onClick={() => {
                dispatch(logoutThunk());
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink className={buildLinkClass} to="/login">
              Login
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
