import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useTheme } from "./context/ThemeContext";
import Sidebar from "./components/Sidebar";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme} min-h-screen`}>
      <Header />
      <div className="flex pt-16">
        {theme === "theme-dark" && <Sidebar />}
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
