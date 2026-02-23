import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const langRef = useRef(null);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLangOpen(false);
    };

    const navLinks = [
        { name: t("navbar.home"), href: "" },
        { name: t("navbar.features"), href: "features" },
        { name: t("navbar.about"), href: "about" },
        { name: t("navbar.howItWorks"), href: "how-it-works" },
        { name: t("navbar.forBusinesses"), href: "business" },
        { name: t("navbar.faq"), href: "faq" },
    ];

    const scrollToDownload = () => {
        setIsOpen(false);
        navigate("/download");
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
                isScrolled || pathname !== "/"
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 z-50"
                >
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
                        C
                    </div>
                    <span className={cn("text-xl md:text-2xl font-bold font-heading tracking-tight text-slate-900")}>
                        Copono
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={`/${link.href}`}
                            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Language Dropdown + CTA */}
                <div className="hidden md:flex items-center gap-3">
                    {/* Language Dropdown */}
                    <div className="relative" ref={langRef}>
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className={cn(
                                "flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                                isScrolled || pathname !== "/"
                                    ? "text-slate-700 border-slate-200 hover:border-primary/40 hover:bg-blue-50/50"
                                    : "text-slate-700 border-slate-200/60 hover:border-primary/40 hover:bg-white/50"
                            )}
                        >
                            <Globe className="w-4 h-4 text-primary" />
                            <span>{i18n.language === 'ar' ? 'العربية' : 'EN'}</span>
                            <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", langOpen && "rotate-180")} />
                        </button>

                        {/* Dropdown menu */}
                        {langOpen && (
                            <div className={cn(
                                "absolute top-full mt-2 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50 min-w-[160px] animate-in fade-in slide-in-from-top-2 duration-200",
                                isRTL ? "left-0" : "right-0"
                            )}>
                                <button
                                    onClick={() => changeLanguage('en')}
                                    className={cn(
                                        "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors text-left",
                                        i18n.language === 'en'
                                            ? "bg-blue-50 text-primary"
                                            : "text-slate-700 hover:bg-slate-50"
                                    )}
                                >
                                    <span className="text-lg">🇺🇸</span>
                                    <span>English</span>
                                    {i18n.language === 'en' && (
                                        <span className="ms-auto w-2 h-2 rounded-full bg-primary"></span>
                                    )}
                                </button>
                                <button
                                    onClick={() => changeLanguage('ar')}
                                    className={cn(
                                        "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors text-left",
                                        i18n.language === 'ar'
                                            ? "bg-blue-50 text-primary"
                                            : "text-slate-700 hover:bg-slate-50"
                                    )}
                                >
                                    <span className="text-lg">🇸🇦</span>
                                    <span>العربية</span>
                                    {i18n.language === 'ar' && (
                                        <span className="ms-auto w-2 h-2 rounded-full bg-primary"></span>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>

                    <Button
                        onClick={scrollToDownload}
                        className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 rounded-full px-6 transition-all hover:scale-105 active:scale-95"
                    >
                        {t("navbar.downloadApp")}
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center gap-2">
                    {/* Mobile Language Toggle */}
                    <button
                        onClick={() => changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
                        className="flex items-center gap-1 px-2.5 py-2 rounded-full text-xs font-medium text-slate-700 border border-slate-200 hover:border-primary/40 transition-all"
                    >
                        <Globe className="w-3.5 h-3.5 text-primary" />
                        <span>{i18n.language === 'ar' ? 'EN' : 'عربي'}</span>
                    </button>

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-slate-800">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">{t("navbar.toggleMenu")}</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side={isRTL ? "left" : "right"} className="w-[300px] sm:w-[400px] border-l border-slate-100">
                            <SheetHeader className="sr-only">
                                <SheetTitle>{t("navbar.toggleMenu")}</SheetTitle>
                                <SheetDescription>
                                    Mobile navigation menu
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col gap-8 mt-10">
                                <div className="flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            to={`/${link.href}`}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-medium text-slate-900 py-2 border-b border-slate-100 hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                                <Button
                                    onClick={scrollToDownload}
                                    className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 rounded-full py-6 text-lg"
                                >
                                    {t("navbar.downloadApp")}
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
