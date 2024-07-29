import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({
  redirectTo = "/goit-react-hw-08-phonebook",
  component: Component, // <- here is destructuring also can look like this const Component = component;
}) => {
  //Usage: <RestrictedRoute component={<MyComponent />} redirectTo="/login" />

  //const Component = <MyComponent />; this is assign ,,argument value,, to variable, to create React component
  //const redirectTo = "/login";

  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
