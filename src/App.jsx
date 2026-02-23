import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LegalPrivacy from "./pages/LegalPrivacy";
import LegalTerms from "./pages/LegalTerms";
import LegalCookie from "./pages/LegalCookie";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTopHandler";
import Meta from "./components/Meta";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Meta />
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Home />} />
            <Route path="/how-it-works" element={<Home />} />
            <Route path="/for-businesses" element={<Home />} />
            <Route path="/business" element={<Home />} />
            <Route path="/faq" element={<Home />} />
            <Route path="/download" element={<Home />} />
            <Route path="/privacy" element={<LegalPrivacy />} />
            <Route path="/terms" element={<LegalTerms />} />
            <Route path="/cookie-policy" element={<LegalCookie />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* Catch-all to redirect back home if path is wrong */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
