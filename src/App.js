import { Link } from "react-scroll";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <main id="home">
      <Home />
      <Projects />
      <About />
    </main>
  );
}

export default App;
