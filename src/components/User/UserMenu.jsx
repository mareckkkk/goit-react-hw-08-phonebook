import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import styles from "./UserMenu.module.css";

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logOut(token));
  };
  return (
    <div className={styles.userMenu}>
      <span>
        {user.name}, {user.email}
      </span>
      <button className={styles.logOut} onClick={logOutHandler}>
        Log out
      </button>
    </div>
  );
};
