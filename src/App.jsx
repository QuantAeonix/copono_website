import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Statistics from "./components/Statistics";
import ForBusinesses from "./components/ForBusinesses";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import DownloadCTA from "./components/DownloadCTA";
import ScrollToTop from "./components/ScrollToTopHandler";
import Meta from "./components/Meta";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Meta />
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
          <Navbar />

          <main>
            <Hero />
            <Statistics />
            <Features />
            <HowItWorks />
            <ForBusinesses />
            <Testimonials />
            <FAQ />
            <DownloadCTA />
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
