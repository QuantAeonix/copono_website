import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Statistics from "../components/Statistics";
import ForBusinesses from "../components/ForBusinesses";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import DownloadCTA from "../components/DownloadCTA";

const Home = () => {
    return (
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
    );
};

export default Home;
