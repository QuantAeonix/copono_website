import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, image }) => {
    const siteTitle = "Copono - Smart Shopping Rewards";
    const siteDescription = "Join Copono to earn points on every receipt. Discover exclusive coupons for thousands of brands and turn your shopping into real rewards.";
    const siteImage = "/og-image.jpg"; // Placeholder path

    return (
        <Helmet>
            <title>{title ? `${title} | Copono` : siteTitle}</title>
            <meta name="description" content={description || siteDescription} />

            {/* Open Graph */}
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || siteDescription} />
            <meta property="og:image" content={image || siteImage} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || siteTitle} />
            <meta name="twitter:description" content={description || siteDescription} />
            <meta name="twitter:image" content={image || siteImage} />
        </Helmet>
    );
};

export default Meta;
