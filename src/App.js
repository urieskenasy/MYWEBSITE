import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationMenu from "./components/NavigationMenu";
import LandingPage from "./pages/main/LandingPage.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Projects from "./pages/projects/Projects.jsx";
import About from "./pages/about/About.jsx";
import Project from "./pages/projects/Project";
import Articles from "./pages/articles/Articles";
import Article from "./pages/articles/Article.jsx";
function App() {
  return (
    <div
      className="App
    dark:bg-gray-900 bg-white"
    >
      <NavigationMenu />
      <main className="">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
