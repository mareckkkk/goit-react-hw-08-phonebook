import { useDispatch } from "react-redux";
import styles from "./RegisterForm.module.css";
import { register } from "../../redux/auth/operations";
import { useToast } from "@chakra-ui/react";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameValue = form.elements.name.value;
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;
    const loginPromise = new Promise((resolve, reject) => {
      dispatch(
        register({
          name: nameValue,
          email: emailValue,
          password: passwordValue,
        }),
      )
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
        title: "Registered successful",
        description: "Welcome!",
      },
      error: {
        title: "Register denied",
        description: "Unable to register!",
      },
      loading: { title: "Registration...", description: "Please wait..." },
    });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.label}>
        Username:
        <input type="text" name="name" className={styles.input} />
      </label>
      <label className={styles.label}>
        Email:
        <input type="email" name="email" className={styles.input} />
      </label>
      <label className={styles.label}>
        Password:
        <input type="password" name="password" className={styles.input} />
      </label>
      <button className={styles.sign_button} type="submit">
        Sign up
      </button>
    </form>
  );
};
