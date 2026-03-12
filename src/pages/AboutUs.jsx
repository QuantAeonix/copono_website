import { motion } from "framer-motion";
import Meta from "../components/Meta";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, ShoppingBag, Gift, Receipt, Check, Sparkles, Eye, Target, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const values = [
        { icon: <Eye className="w-6 h-6" />, title: t("about.value1Title"), desc: t("about.value1Desc") },
        { icon: <Heart className="w-6 h-6" />, title: t("about.value2Title"), desc: t("about.value2Desc") },
        { icon: <Sparkles className="w-6 h-6" />, title: t("about.value3Title"), desc: t("about.value3Desc") },
        { icon: <Users className="w-6 h-6" />, title: t("about.value4Title"), desc: t("about.value4Desc") },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <Meta
                title={t("about.metaTitle")}
                description={t("about.metaDescription")}
            />

            {/* Hero Header */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-600/10 opacity-50" />
                    <div className="absolute bottom-[-30%] start-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
                    <div className="absolute top-[-20%] end-[-5%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground font-semibold text-xs tracking-wider mb-8 border border-primary/30">
                            <Sparkles className="w-3.5 h-3.5" />
                            {t("about.badge")}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white font-heading mb-8 tracking-tight">
                            {t("about.title")} <span className="text-primary italic">{t("about.titleHighlight")}</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            {t("about.description")}
                        </p>

                        {/* Stats row */}
                        <div className="flex flex-wrap justify-center gap-8 mt-12">
                            {[
                                { value: "500+", label: t("about.statUsers") },
                                { value: "10+", label: t("about.statStores") },
                                { value: "10K+", label: t("about.statPoints") },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="text-center"
                                >
                                    <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                                    <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6 tracking-tight leading-tight">
                                {t("about.missionTitle1")}
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                {t("about.missionP1")}
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                {t("about.missionP2")}
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                {t("about.missionP3")}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {[
                                    { icon: <Check className="w-4 h-4" />, text: t("about.verifiedReceipts") },
                                    { icon: <Check className="w-4 h-4" />, text: t("about.instantPoints") },
                                    { icon: <Check className="w-4 h-4" />, text: t("about.globalPartners") },
                                    { icon: <Check className="w-4 h-4" />, text: t("about.discountCodes") },
                                ].map((badge, i) => (
                                    <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                        {badge.icon}
                                        {badge.text}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                                <div className="absolute top-0 end-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                                <Sparkles className="w-12 h-12 mb-6 text-blue-200" />
                                <h3 className="text-2xl font-bold mb-4">{t("about.joinMovement")}</h3>
                                <div className="space-y-4">
                                    {[
                                        { label: t("about.statUsers"), value: "500+" },
                                        { label: t("about.statStores"), value: "10+" },
                                        { label: t("about.statPoints"), value: "10,000+" },
                                    ].map((stat, i) => (
                                        <div key={i} className="flex items-center justify-between py-3 border-b border-white/20 last:border-0">
                                            <span className="text-blue-100">{stat.label}</span>
                                            <span className="font-bold text-lg">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-4 tracking-tight">
                            {t("about.valuesTitle")}
                        </h2>
                        {t("about.valuesDescription") && (
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {t("about.valuesDescription")}
                            </p>
                        )}
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t("about.ctaTitle") && (
                            <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6 tracking-tight">
                                {t("about.ctaTitle")} <span className="text-primary italic">{t("about.ctaHighlight")}</span>?
                            </h2>
                        )}
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                            {t("about.ctaDescription")}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button
                                asChild
                                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-all group gap-2"
                            >
                                <a href="/features">
                                    {t("about.discoverFeatures")}
                                    <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="rounded-full px-8 py-6 text-lg border-slate-300 hover:bg-slate-100 hover:text-slate-900 hover:scale-105 active:scale-95 transition-all"
                            >
                                <a href="/business">{t("about.partnerWithUs")}</a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
