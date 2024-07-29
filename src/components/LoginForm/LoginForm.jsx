import { useDispatch, useSelector } from "react-redux";
import styles from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectIsValid } from "../../redux/auth/selectors";
import { useEffect } from "react";
import { clearValid } from "../../redux/auth/authSlice";
import { Input, InputGroup, InputLeftAddon, useToast } from "@chakra-ui/react";

export const LoginForm = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const isValid = useSelector(selectIsValid);
  const logedIn = useSelector(selectIsLoggedIn);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputEmail = form.elements.email.value;
    const inputPassword = form.elements.password.value;
    const loginPromise = new Promise((resolve, reject) => {
      dispatch(logIn({ email: inputEmail, password: inputPassword }))
        .then((response) => {
          if (response.error) {
            reject(response.error);
          } else {
            resolve(response);
          }
        })
        .catch((error) => reject(error));
    });

    toast.promise(loginPromise, {
      success: {
        title: "You have logged in successfully",
        description: "Welcome back!",
      },
      error: {
        title: "Login error",
        description: "Failed to log in.",
      },
      loading: {
        title: "Login in progress...",
        description: "Please wait...",
      },
    });
    form.reset();
  };
  useEffect(() => {
    dispatch(clearValid());
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label className={styles.label}>
        Email:
        <input type="email" name="email" required className={styles.input} />
      </label>
      <label className={styles.label}>
        Password:
        <input
          type="password"
          name="password"
          required
          className={styles.input}
        />
      </label>
      {isValid && <p className={styles.invalid}>{isValid}</p>}
      <button className={styles.login_button} type="submit">
        Log In
      </button>
    </form>
  );
};
