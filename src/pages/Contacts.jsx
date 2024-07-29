import { Helmet, HelmetProvider } from "react-helmet-async";
import ContactForm from "../components/Contacts/ContactForm";
import ContactList from "../components/Contacts/ContactList";
import { OpenBook } from "../components/OpenBook";
import { useSelector } from "react-redux";
import { selecIsRefreshing } from "../redux/auth/selectors";
import { Loading } from "notiflix/build/notiflix-loading-aio";

export default function Contacts() {
  const isRefreshing = useSelector(selecIsRefreshing);
  isRefreshing === false && Loading.remove();
  return (
    <HelmetProvider>
      <OpenBook>
        <Helmet>
          npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
          <title>Contacts</title>
        </Helmet>
        <ContactForm />
        <ContactList />
      </OpenBook>
    </HelmetProvider>
  );
}
