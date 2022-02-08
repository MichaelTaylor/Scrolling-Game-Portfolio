import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <div>
      <main id="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Michaels Portfolio</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Home />
        <Projects />
        <About />
      </main>
    </div>
  );
}

export default App;
