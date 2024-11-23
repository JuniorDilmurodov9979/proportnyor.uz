// import logo from "./logo.svg";
import { Header } from "./components/header/header";
import "./global.css";
import { Hero } from "./components/hero/hero";
import { Places } from "./components/places/places";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Popular } from "./components/popular/popular";
import { Service } from "./components/service/service";
import { Pricing } from "./components/pricing/pricing";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Places />
      <Popular />
      <Service />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
