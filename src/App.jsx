import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Services from "./Components/Services"
import Videos from "./Components/Videos"
import MapSection from "./Components/MapSection"
import Fleet from "./Components/Fleet"
import About from "./Components/About"
export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Fleet />
      <Videos />
      <About />
      <MapSection />
       <Footer />
    </>
  );
}
