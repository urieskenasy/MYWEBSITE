import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationMenu from "./components/NavigationMenu";
import LandingPage from "./pages/main/LandingPage.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Projects from "./pages/projects/Projects.jsx";
import About from "./pages/about/About.jsx";
import Project from "./pages/projects/Project";
function App() {
  return (
    <div
      className="App
    dark:bg-gray-900 bg-white"
    >
      <NavigationMenu />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <main className="">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
