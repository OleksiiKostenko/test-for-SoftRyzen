import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Electricity from "./sections/Electricity/Electricity";
import Cases from "./sections/Cases/Cases";
import Faq from "./sections/FAQ/Faq";
import ContactUs from "./sections/ContactUs/ContactUs";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
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
