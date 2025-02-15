import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./AuthNav.module.css";
import clsx from "clsx";
import UserMenu from "../UserMenu/UserMenu";

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const buildLinkClass = ({ isActive }) => clsx(s.page, isActive && s.active);

  return (
    <div>
      {isLoggedIn ? (<UserMenu />)
       : (
        <NavLink className={buildLinkClass} to="/login">
          Login
        </NavLink>
      )}
    </div>
  );
};

export default AuthNav;
