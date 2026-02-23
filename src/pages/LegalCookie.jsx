import { motion } from "framer-motion";
import Meta from "../components/Meta";
import { Cookie, Info, Shield, Settings, Trash2, HelpCircle, ChevronRight, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";

const LegalCookie = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const sections = [
        { id: "what", icon: <Info className="w-5 h-5" />, title: t("cookie.s1Title"), content: t("cookie.s1Content") },
        { id: "essential", icon: <Shield className="w-5 h-5" />, title: t("cookie.s2Title"), content: t("cookie.s2Content") },
        { id: "analytics", icon: <BarChart3 className="w-5 h-5" />, title: t("cookie.s3Title"), content: t("cookie.s3Content") },
        { id: "preference", icon: <Settings className="w-5 h-5" />, title: t("cookie.s4Title"), content: t("cookie.s4Content") },
        { id: "manage", icon: <Trash2 className="w-5 h-5" />, title: t("cookie.s5Title"), content: t("cookie.s5Content") },
        { id: "questions", icon: <HelpCircle className="w-5 h-5" />, title: t("cookie.s6Title"), content: t("cookie.s6Content") },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Meta title={t("cookie.metaTitle")} description={t("cookie.metaDescription")} />

            {/* Premium Header */}
            <div className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-600/10 opacity-50" />
                    <div className="absolute top-[-40%] end-[-5%] w-[500px] h-[500px] rounded-full bg-primary/15 blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-6">
                            <span>{t("cookie.breadcrumbLegal")}</span>
                            <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                            <span className="text-primary-foreground">{t("cookie.breadcrumbPage")}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white font-heading mb-6 tracking-tight flex items-center gap-4">
                            <Cookie className="w-10 h-10 md:w-16 md:h-16 text-primary" />
                            {t("cookie.pageTitle")}
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                            {t("cookie.pageDescription")}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 pb-32">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Sticky Sidebar Navigation */}
                    <motion.aside
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:w-1/4 hidden lg:block"
                    >
                        <div className="sticky top-32 space-y-2">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 px-4">{t("cookie.sections")}</h3>
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className="w-full text-start px-4 py-3 rounded-xl text-slate-600 hover:bg-white hover:text-primary transition-all duration-200 group flex items-center gap-3 text-sm font-medium border border-transparent hover:border-slate-200 hover:shadow-sm"
                                >
                                    <span className="text-slate-400 group-hover:text-primary transition-colors">
                                        {section.icon}
                                    </span>
                                    {section.title.split('. ')[1]}
                                </button>
                            ))}
                        </div>
                    </motion.aside>

                    {/* Main Content Area */}
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:w-3/4">
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-12">
                            <div className="flex justify-between items-center mb-12 pb-8 border-b border-slate-100">
                                <div className="text-slate-500 text-sm">
                                    {t("cookie.lastUpdated")} <span className="font-semibold text-slate-900">{t("cookie.lastUpdatedDate")}</span>
                                </div>
                                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold">
                                    <Cookie className="w-3.5 h-3.5" />
                                    {t("cookie.badge")}
                                </div>
                            </div>

                            <div className="space-y-16">
                                {sections.map((section) => (
                                    <motion.div key={section.id} id={section.id} variants={itemVariants} className="group">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                                {section.icon}
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                                                {section.title}
                                            </h2>
                                        </div>
                                        <div className="ps-0 md:ps-16">
                                            <p className="text-slate-600 leading-relaxed text-lg">
                                                {section.content}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Cookie Settings Portal CTA */}
                            <div className="mt-20 pt-10 border-t border-slate-100">
                                <div className="bg-slate-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                                    <div className="absolute top-0 end-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                                    <div className="relative z-10">
                                        <h4 className="font-bold text-slate-900 mb-2">{t("cookie.ctaTitle")}</h4>
                                        <p className="text-slate-500 text-sm">{t("cookie.ctaDescription")}</p>
                                    </div>
                                    <div className="flex gap-4 relative z-10">
                                        <button className="bg-white text-primary border border-slate-200 px-6 py-3 rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-all whitespace-nowrap">
                                            {t("cookie.resetConsent")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LegalCookie;
