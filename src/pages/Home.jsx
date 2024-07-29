import { Helmet, HelmetProvider } from "react-helmet-async";
import { ClosedBook } from "../components/ClosedBook";
import { HomeMain } from "../components/Home/HomeMain";
export default function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ClosedBook>
        <HomeMain />
      </ClosedBook>
    </HelmetProvider>
  );
}
