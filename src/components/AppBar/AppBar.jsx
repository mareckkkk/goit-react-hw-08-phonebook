import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Nav/Navigation";
import { UserMenu } from "../User/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./AppBar.module.css";
import { useSelector } from "react-redux";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
