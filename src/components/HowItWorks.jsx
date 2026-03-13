import { motion } from "framer-motion";
import { Search, Tag, ShoppingBag, ArrowRight, Check, Star, Receipt, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import BrowseImage from "../assets/browse.png";
import CouponCodeImage from "../assets/noon.png";
import ThirdImage from "../assets/third.jpeg";

const HowItWorks = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const steps = [
        {
            id: 1,
            title: t("howItWorks.step1Title"),
            description: t("howItWorks.step1Desc"),
            visual: (
                <div className="w-full max-w-[260px] h-[340px] rounded-2xl shadow-xl border border-slate-100 overflow-hidden bg-white transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-primary/10">
                    <img src={BrowseImage} alt="Browse" className="w-full h-full object-cover object-top" />
                </div>
            ),
        },
        {
            id: 2,
            title: t("howItWorks.step2Title"),
            description: t("howItWorks.step2Desc"),
            visual: (
                <div className="w-full max-w-[260px] h-[340px] rounded-2xl shadow-xl border border-slate-100 overflow-hidden bg-white transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-primary/10">
                    <img src={CouponCodeImage} alt="Coupon Code" className="w-full h-full object-cover object-top" />
                </div>
            ),
        },
        {
            id: 3,
            title: t("howItWorks.step3Title"),
            description: t("howItWorks.step3Desc"),
            visual: (
                <div className="w-full max-w-[260px] h-[340px] rounded-2xl shadow-xl border border-slate-100 overflow-hidden bg-white transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-primary/10">
                    <img src={ThirdImage} alt="Step 3" className="w-full h-full object-cover object-top" />
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
                    {/* Connecting line (desktop only) - Centered on badges */}
                    <div className="hidden md:block absolute top-5 start-[20%] end-[20%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 overflow-hidden">
                        <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                            className="w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center relative group"
                        >
                            {/* Step number badge */}
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/30 mb-6 relative z-10">
                                {step.id}
                            </div>

                            <div className="min-h-[140px] flex flex-col items-center">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed max-w-[240px] mx-auto text-sm md:text-base">
                                    {step.description}
                                </p>
                            </div>

                            {/* Visual */}
                            <div className="flex justify-center">
                                {step.visual}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
