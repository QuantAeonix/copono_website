import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";

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
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
                                C
                            </div>
                            <span className="text-xl font-bold text-white font-heading">Copono</span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            {t("footer.tagline")}
                        </p>
                        <div className="flex gap-3 mt-6">
                            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-9 h-9 bg-slate-800 hover:bg-primary/20 hover:text-primary rounded-lg flex items-center justify-center transition-colors">
                                    <Icon className="w-4 h-4" />
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
                            <li><a href="#" className="hover:text-primary transition-colors">{t("footer.careers")}</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">{t("footer.pressKit")}</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white font-bold text-sm mb-4">{t("footer.resources")}</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">{t("footer.helpCenter")}</a></li>
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
                            <li><a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t("footer.whatsapp")}</a></li>
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
