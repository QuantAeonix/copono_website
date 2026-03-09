import { motion, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Apple, Play, Star, Shield, Zap, Search, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import coponohero from "../assets/coponohero.png";

const Hero = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="hero" className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400/5 blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Text Content Area */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl text-center lg:text-start"
                    >
                        <motion.div variants={itemVariants}>
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium mb-6 border border-blue-100">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                {t("hero.badge")}
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-slate-900 leading-[1.1] mb-6"
                        >
                            {t("hero.titleLine1")} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                                {t("hero.titleLine2")}
                            </span> <br />
                            {t("hero.titleLine3")}
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
                        >
                            {t("hero.description")}
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
                            <Button aria-label="Download on App Store" className="h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-xl shadow-slate-900/20 text-base" onClick={() => window.open('#', '_blank')}>
                                <Apple className="mr-2 h-5 w-5" />
                                {t("hero.appStore")}
                            </Button>
                            <Button aria-label="Get it on Google Play" className="h-14 px-8 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 rounded-full text-base" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.copono.copono', '_blank')}>
                                <Play className="mr-2 h-5 w-5 fill-current" />
                                {t("hero.googlePlay")}
                            </Button>
                        </motion.div>

                        {/* Stat Pills (Small Labels Type) */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start"
                        >
                            {[
                                { value: "500+", label: t("hero.statUsers"), icon: <Star className="w-4 h-4 text-amber-500" /> },
                                { value: "10+", label: t("hero.statStores"), icon: <Shield className="w-4 h-4 text-emerald-500" /> },
                                { value: "10K+", label: t("hero.statPoints"), icon: <Zap className="w-4 h-4 text-violet-500" /> },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-slate-100 rounded-xl px-4 py-2 shadow-sm"
                                >
                                    {stat.icon}
                                    <span className="font-bold text-slate-900 text-sm whitespace-nowrap">{stat.value}</span>
                                    <span className="text-slate-500 text-xs whitespace-nowrap">{stat.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Visual Area — App Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative flex items-center justify-center pt-8 lg:pt-0"
                    >
                        <div className="relative w-[300px] md:w-[320px] bg-slate-900 rounded-[3rem] shadow-2xl border-[8px] border-slate-900">
                            {/* Detailed App Interface Mockup */}
                            <div className="bg-slate-50 flex flex-col overflow-hidden rounded-[2.5rem]">
                                <img
                                    src={coponohero}
                                    alt="Copono App Interface"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
export default Hero;
