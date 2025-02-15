// aloalo@mail.pryvit.com
// adrgwer12341@gma.co
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import s from "./AppBar.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <Navigation />
      <AuthNav />
    </div>
  );
};

export default Header;

