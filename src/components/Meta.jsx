import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Meta = ({ title, description, image }) => {
    const { t } = useTranslation();

    const siteTitle = title || t("meta.siteTitle");
    const siteDescription = description || t("meta.siteDescription");
    const siteImage = image || "/og-image.png";

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />

            {/* Open Graph */}
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={siteImage} />
        </Helmet>
    );
};

export default Meta;
