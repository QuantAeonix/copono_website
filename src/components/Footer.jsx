import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                C
                            </div>
                            <span className="text-2xl font-bold font-heading text-white">
                                Copono
                            </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Shop smarter, save more, and earn rewards with every receipt.
                            Join thousands of savvy shoppers today.
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialLink icon={<Facebook className="w-5 h-5" />} />
                            <SocialLink icon={<Instagram className="w-5 h-5" />} />
                            <SocialLink icon={<Twitter className="w-5 h-5" />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/features">Features</FooterLink>
                            <FooterLink href="/business">Careers</FooterLink>
                            <FooterLink>Press Kit</FooterLink>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/faq">Help Center</FooterLink>
                            <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            <FooterLink href="/terms">Terms of Service</FooterLink>
                            <FooterLink href="/cookie-policy">Cookie Policy</FooterLink>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <span>support@copono.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <span>123 Savings Ave, Tech City, TC 90210</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Copono. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
    >
        {icon}
    </a>
);

const FooterLink = ({ href = "#", children }) => {
    const isInternal = href && href.startsWith('/');

    if (isInternal) {
        return (
            <li>
                <Link
                    to={href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                >
                    <span className="w-0 group-hover:w-2 transition-all duration-300 h-0.5 bg-primary rounded-full"></span>
                    {children}
                </Link>
            </li>
        );
    }

    return (
        <li>
            <a
                href={href}
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
            >
                <span className="w-0 group-hover:w-2 transition-all duration-300 h-0.5 bg-primary rounded-full"></span>
                {children}
            </a>
        </li>
    );
};

export default Footer;
