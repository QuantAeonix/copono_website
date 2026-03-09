import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: t("contact.emailTitle"),
            desc: t("contact.emailDesc"),
            value: t("contact.emailAddress"),
            link: `mailto:${t("contact.emailAddress")}`,
            color: "bg-blue-500",
            lightColor: "bg-blue-50",
            textColor: "text-blue-600"
        },
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: t("contact.whatsappTitle"),
            desc: t("contact.whatsappDesc"),
            value: t("contact.whatsappNumber"),
            link: `https://wa.me/966500023712`,
            color: "bg-emerald-500",
            lightColor: "bg-emerald-50",
            textColor: "text-emerald-600"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: t("contact.officeTitle"),
            desc: t("contact.officeDesc"),
            value: t("contact.officeAddress"),
            link: "https://maps.google.com",
            color: "bg-amber-500",
            lightColor: "bg-amber-50",
            textColor: "text-amber-600"
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            <Helmet>
                <title>{t("contact.metaTitle")}</title>
                <meta name="description" content={t("contact.metaDescription")} />
            </Helmet>

            {/* Header Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
                    <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400/5 blur-[120px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 tracking-wider"
                    >
                        {t("contact.badge")}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold font-heading text-slate-900 mb-6"
                    >
                        {t("contact.title")}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        {t("contact.description")}
                    </motion.p>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {contactMethods.map((method, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i + 0.3 }}
                                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
                            >
                                <div className={`${method.lightColor} ${method.textColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {method.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
                                <p className="text-slate-500 mb-6 text-sm leading-relaxed">{method.desc}</p>
                                <div className="mt-auto">
                                    <div className="text-slate-900 font-semibold mb-6 break-all">
                                        {method.value}
                                    </div>
                                    <Button
                                        asChild
                                        className={`w-full ${method.color} hover:opacity-90 text-white rounded-xl py-6 group/btn shadow-lg shadow-slate-200`}
                                    >
                                        <a href={method.link} target={method.link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                            <span>{t("navbar.downloadApp") ? "Contact Now" : "تواصل الآن"}</span>
                                            {method.link.startsWith('http') ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className={`w-4 h-4 group-hover/btn:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />}
                                        </a>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                {t("contact.ctaTitle")}
                            </h2>
                            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                                {t("contact.ctaDescription")}
                            </p>
                            <Button
                                className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 text-lg font-bold shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
                                onClick={() => window.location.href = "/download"}
                            >
                                {t("navbar.downloadApp")}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
