import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Experiences from "./components/Experiences.jsx";
import TopFooter from "./components/TopFooter.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Accommodations from "./components/Accommodations.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";
import Copyright from "./components/Copyright.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopFooter />
      <Experiences />
      <AboutUs />
      <Accommodations />
      <Testimonials />
      <Footer />
      <Copyright />
    </>
  );
}
export default App;
