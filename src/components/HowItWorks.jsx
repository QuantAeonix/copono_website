import { motion } from "framer-motion";
import { Search, Tag, ShoppingBag, ArrowRight, Check, Star, Receipt, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const steps = [
        {
            id: 1,
            title: t("howItWorks.step1Title"),
            description: t("howItWorks.step1Desc"),
            visual: (
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-4 w-full max-w-[260px]">
                    <div className="bg-slate-50 rounded-xl flex items-center px-3 py-2 mb-3 gap-2">
                        <Search className="w-4 h-4 text-slate-400" />
                        <span className="text-xs text-slate-400">{t("howItWorks.searchBrands")}</span>
                    </div>
                    <div className="flex gap-2 mb-4">
                        {[t("howItWorks.fashion"), t("howItWorks.food"), t("howItWorks.tech")].map((cat, i) => (
                            <span key={cat} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${i === 0 ? "bg-primary text-white" : "bg-slate-100 text-slate-600"}`}>{cat}</span>
                        ))}
                    </div>
                    <div className="space-y-2">
                        {[t("howItWorks.upTo50"), t("howItWorks.newArrivals")].map((deal, i) => (
                            <div key={i} className="flex items-center justify-between bg-slate-50 rounded-xl p-2.5">
                                <div className="flex items-center gap-2">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${i === 0 ? "bg-orange-100 text-orange-500" : "bg-blue-100 text-blue-500"}`}>
                                        <Tag className="w-4 h-4" />
                                    </div>
                                    <span className="text-xs font-medium text-slate-700">{deal}</span>
                                </div>
                                <Star className="w-3.5 h-3.5 text-amber-400" />
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            title: t("howItWorks.step2Title"),
            description: t("howItWorks.step2Desc"),
            visual: (
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-4 w-full max-w-[260px]">
                    <div className="space-y-3 mb-4">
                        {[
                            { name: t("howItWorks.denimJacket"), price: "$89.99" },
                            { name: t("howItWorks.sneakers"), price: "$129.99" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                                        <ShoppingBag className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <span className="text-xs font-medium text-slate-700">{item.name}</span>
                                </div>
                                <span className="text-xs font-bold text-slate-900">{item.price}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-dashed border-slate-200 pt-3 mb-3">
                        <div className="flex justify-between text-xs">
                            <span className="text-slate-500">{t("howItWorks.totalAmount")}</span>
                            <div className="text-end">
                                <span className="line-through text-slate-400 me-1">$219.98</span>
                                <span className="font-bold text-primary">$96.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-emerald-50 text-emerald-600 text-[10px] font-semibold text-center py-1.5 rounded-lg mb-2">{t("howItWorks.couponApplied")}</div>
                    <button className="w-full bg-slate-900 text-white text-xs font-bold py-2.5 rounded-xl">{t("howItWorks.payNow")}</button>
                </div>
            ),
        },
        {
            id: 3,
            title: t("howItWorks.step3Title"),
            description: t("howItWorks.step3Desc"),
            visual: (
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-4 w-full max-w-[260px]">
                    <div className="bg-slate-50 rounded-xl p-4 mb-3 relative overflow-hidden">
                        <div className="flex flex-col items-center">
                            <Receipt className="w-10 h-10 text-primary mb-2" />
                            <div className="bg-white rounded-lg px-3 py-1.5 text-[10px] font-mono text-center shadow-sm w-full">
                                <p className="text-slate-400">{t("howItWorks.receipt")}</p>
                                <p className="font-bold text-slate-900">{t("howItWorks.total")}: $96.00</p>
                            </div>
                        </div>
                        <div className="absolute top-0 inset-x-0 h-0.5 bg-primary/30 animate-pulse" />
                    </div>
                    <div className="text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 mb-2"
                        >
                            <Check className="w-6 h-6 text-emerald-600" />
                        </motion.div>
                        <p className="text-sm font-bold text-emerald-600">{t("howItWorks.thankYou")}</p>
                        <div className="flex items-center justify-center gap-1 mt-1 text-primary">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-xs font-bold">+500 pts</span>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section id="how-it-works" className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute end-0 top-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
                >
                    <span className="text-primary font-semibold text-sm tracking-wider uppercase">{t("howItWorks.subtitle")}</span>
                    <h2 className="text-2xl md:text-5xl font-bold font-heading mt-3 mb-6 tracking-tight text-slate-900">
                        {t("howItWorks.title")}
                    </h2>
                    <p className="text-slate-600 text-sm md:text-lg leading-relaxed">
                        {t("howItWorks.description")}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden md:block absolute top-1/3 start-[20%] end-[20%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center relative"
                        >
                            {/* Step number badge */}
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/30 mb-6 relative z-10">
                                {step.id}
                            </div>

                            {/* Visual */}
                            <div className="mb-6 flex justify-center">
                                {step.visual}
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
