import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={styles.link}
        to="/goit-react-hw-08-phonebook/register">
        Register
      </NavLink>
      <NavLink className={styles.link} to="/goit-react-hw-08-phonebook/login">
        Log In
      </NavLink>
    </div>
  );
};
