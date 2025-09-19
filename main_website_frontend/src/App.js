import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// PUBLIC_INTERFACE
export default function App() {
  /** Root application shell with Router, Navbar, Footer and page routes. */
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-background text-text">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
