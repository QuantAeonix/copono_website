import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import coponooLogo from "../assets/coponooLogo.png";
import instaImg from "../assets/instagram_color.png";
import snapchatImg from "../assets/snapchat_color.png";
import tiktokImg from "../assets/tiktok_color.png";
import xImg from "../assets/x_color.png";

const Footer = () => {
    const { t } = useTranslation();

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-slate-800">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <img src={coponooLogo} alt="Copono Logo" className="w-8 h-8 object-contain" />
                            <span className="text-xl font-bold text-white font-heading">Copono</span>
                        </Link>
                        <div className="space-y-4">
                            <p className="text-sm md:text-base leading-relaxed max-w-xs font-medium text-slate-300 tracking-wide">
                                {t("footer.tagline").includes('Copono') ? (
                                    <>
                                        {t("footer.tagline").split('Copono')[0]}
                                        <span className="text-primary font-bold">Copono</span>
                                        {t("footer.tagline").split('Copono')[1]}
                                    </>
                                ) : t("footer.tagline").includes('كوبونو') ? (
                                    <>
                                        {t("footer.tagline").split('كوبونو')[0]}
                                        <span className="text-primary font-bold">كوبونو</span>
                                        {t("footer.tagline").split('كوبونو')[1]}
                                    </>
                                ) : t("footer.tagline")}
                            </p>
                        </div>
                        <div className="flex gap-4 mt-6">
                            {[
                                { imgSrc: instaImg, href: "#", alt: "Instagram", bg: "bg-white hover:bg-gray-200" },
                                { imgSrc: xImg, href: "#", alt: "X (Twitter)", bg: "bg-white hover:bg-gray-200" },
                                { imgSrc: snapchatImg, href: "#", alt: "Snapchat", bg: "bg-white hover:bg-gray-200" },
                                { imgSrc: tiktokImg, href: "#", alt: "TikTok", bg: "bg-white hover:bg-gray-200" }
                            ].map((item, i) => (
                                <a key={i} href={item.href} className={`w-10 h-10 ${item.bg} rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-sm border border-slate-800`}>
                                    <img src={item.imgSrc} alt={item.alt} className="w-6 h-6 object-contain" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold text-sm mb-4">{t("footer.company")}</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/about" className="hover:text-primary transition-colors">{t("footer.aboutUs")}</Link></li>
                            <li><Link to="/features" className="hover:text-primary transition-colors">{t("footer.features")}</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white font-bold text-sm mb-4">{t("footer.otherLinks")}</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">{t("footer.privacyPolicy")}</Link></li>
                            <li><Link to="/terms" className="hover:text-primary transition-colors">{t("footer.termsOfService")}</Link></li>
                            <li><Link to="/cookie-policy" className="hover:text-primary transition-colors">{t("footer.cookiePolicy")}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm mb-4">{t("footer.contact")}</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/contact" className="hover:text-primary transition-colors">{t("navbar.about") === "من نحن" ? "تواصل معنا" : "Contact Us"}</Link></li>
                            <li><a href="mailto:support@copono.com" className="hover:text-primary transition-colors">{t("footer.email")}</a></li>
                            <li><a href="https://wa.me/966500023712" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t("footer.whatsapp")}</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4 text-xs">
                    <p>{t("footer.copyright", { year: currentYear })}</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-primary transition-colors">{t("footer.privacy")}</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">{t("footer.terms")}</Link>
                        <Link to="/cookie-policy" className="hover:text-primary transition-colors">{t("footer.cookies")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
