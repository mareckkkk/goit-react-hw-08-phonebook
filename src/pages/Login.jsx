import { Helmet, HelmetProvider } from "react-helmet-async";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { OpenBook } from "../components/OpenBook";
import { useSelector } from "react-redux";
import { selecIsRefreshing } from "../redux/auth/selectors";
import { Loading } from "notiflix/build/notiflix-loading-aio";

export default function Login() {
  const isRefreshing = useSelector(selecIsRefreshing);
  isRefreshing
    ? Loading.dots("Loading...", {
        backgroundColor: "rgba(0,0,0,0.3)",
        svgColor: "red",
      })
    : Loading.remove(200);
  return (
    <HelmetProvider>
      <OpenBook>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </OpenBook>
    </HelmetProvider>
  );
}
