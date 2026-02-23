import { motion } from "framer-motion";
import Meta from "../components/Meta";
import { Shield, Eye, FileText, Share2, Lock, UserCheck, Mail, ChevronRight, HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const LegalPrivacy = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const sections = [
        { id: "collect", icon: <FileText className="w-5 h-5" />, title: t("privacy.s1Title"), content: t("privacy.s1Content") },
        { id: "use", icon: <Eye className="w-5 h-5" />, title: t("privacy.s2Title"), content: t("privacy.s2Content") },
        { id: "receipt", icon: <Shield className="w-5 h-5" />, title: t("privacy.s3Title"), content: t("privacy.s3Content") },
        { id: "sharing", icon: <Share2 className="w-5 h-5" />, title: t("privacy.s4Title"), content: t("privacy.s4Content") },
        { id: "security", icon: <Lock className="w-5 h-5" />, title: t("privacy.s5Title"), content: t("privacy.s5Content") },
        { id: "rights", icon: <UserCheck className="w-5 h-5" />, title: t("privacy.s6Title"), content: t("privacy.s6Content") },
        { id: "contact", icon: <Mail className="w-5 h-5" />, title: t("privacy.s7Title"), content: t("privacy.s7Content") },
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
            <Meta title={t("privacy.metaTitle")} description={t("privacy.metaDescription")} />

            {/* Premium Header */}
            <div className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-600/10 opacity-50" />
                    <div className="absolute top-[-30%] end-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-6">
                            <span>{t("privacy.breadcrumbLegal")}</span>
                            <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                            <span className="text-primary-foreground">{t("privacy.breadcrumbPage")}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white font-heading mb-6 tracking-tight">
                            {t("privacy.pageTitle")}
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                            {t("privacy.pageDescription")}
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
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 px-4">{t("privacy.sections")}</h3>
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
                                    {t("privacy.lastUpdated")} <span className="font-semibold text-slate-900">{t("privacy.lastUpdatedDate")}</span>
                                </div>
                                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold">
                                    <Shield className="w-3.5 h-3.5" />
                                    {t("privacy.badge")}
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

                            <div className="mt-20 pt-10 border-t border-slate-100">
                                <div className="bg-slate-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                                    <div className="absolute top-0 end-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                                    <div className="relative z-10">
                                        <h4 className="font-bold text-slate-900 mb-2">{t("privacy.ctaTitle")}</h4>
                                        <p className="text-slate-500 text-sm">{t("privacy.ctaDescription")}</p>
                                    </div>
                                    <div className="flex gap-4 relative z-10">
                                        <button className="bg-primary text-white px-6 py-3 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all whitespace-nowrap">
                                            {t("privacy.emailSupport")}
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

export default LegalPrivacy;
