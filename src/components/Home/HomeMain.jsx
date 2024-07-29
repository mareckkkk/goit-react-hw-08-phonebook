import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export const HomeMain = () => {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h1}>This is Your personal PhoneBook</h1>
      <div className={styles.stepList}>
        <h4 className={styles.textHeader}>First what you need to:</h4>
        <ul className={styles.list}>
          <li>
            <Link to="./register" className={styles.link}>
              Register
            </Link>{" "}
            Yourself
          </li>
          <li>
            Next step{" "}
            <Link to="./login" className={styles.link}>
              LogIn
            </Link>
          </li>
          <li>Now you are ready to Add Contacts!</li>
        </ul>
      </div>
    </div>
  );
};
