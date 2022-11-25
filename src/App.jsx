import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import About from "./components/About";
import Contactme from "./components/Contactme";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Qualification from "./components/Qualification";
import ScrollTop from "./components/ScrollTop";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Skills2 from "./components/Skills2";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        {/* <Skills /> */}
        <Skills2 />
        <CTA />
        <Qualification />
        {/* <Services /> */}
        <Portfolio />
        {/* <Testimonial /> */}
        <Contactme />
        <Footer />
        <ScrollTop />
      </main>
    </>
  );
}

export default App;
