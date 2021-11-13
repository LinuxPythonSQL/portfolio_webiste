import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "./components/Particle.js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Particles />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
    </>
  );
}

export default App;
