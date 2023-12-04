import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Electricity from "./sections/Electricity/Electricity";
import Cases from "./sections/Cases/Cases";
import Faq from "./sections/FAQ/Faq";
import ContactUs from "./sections/ContactUs/ContactUs";
import Footer from "./sections/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [viewportWidts, setViewportWidts] = useState(window.innerWidth);
  useEffect(() => {
    const handerResize = () => {
      setViewportWidts(window.innerWidth);
    };

    window.addEventListener("resize", handerResize);
  }, []);

  return (
    <>
      <Header viewportWidts={viewportWidts} />
      <main>
        <Hero viewportWidts={viewportWidts} />
        <About viewportWidts={viewportWidts} />
        <Electricity />
        <Cases />
        <Faq />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
