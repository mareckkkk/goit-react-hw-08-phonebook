import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { OpenBook } from "../components/OpenBook";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Register() {
  return (
    <HelmetProvider>
      <OpenBook>
        <Helmet>
          <title>Register</title>
        </Helmet>
        <RegisterForm></RegisterForm>
      </OpenBook>
    </HelmetProvider>
  );
}
