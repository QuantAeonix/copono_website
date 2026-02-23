import { motion, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Apple, Play, Star, Shield, Zap, Search, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
                                { value: "10K+", label: t("hero.statUsers"), icon: <Star className="w-4 h-4 text-amber-500" /> },
                                { value: "500+", label: t("hero.statStores"), icon: <Shield className="w-4 h-4 text-emerald-500" /> },
                                { value: "1M+", label: t("hero.statPoints"), icon: <Zap className="w-4 h-4 text-violet-500" /> },
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
                        <div className="relative w-[300px] md:w-[320px] aspect-[9/18.5] bg-slate-900 rounded-[3rem] shadow-2xl border-[8px] border-slate-900">
                            {/* Detailed App Interface Mockup */}
                            <div className="absolute inset-0 bg-slate-50 flex flex-col relative overflow-hidden rounded-[2.5rem]">

                                {/* Status Bar area */}
                                <div className="h-6 bg-slate-900 w-full z-20"></div>

                                {/* App Header */}
                                <div className="bg-white p-6 pb-4 shadow-sm z-10">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">C</div>
                                            <span className="font-bold text-slate-900">Copono</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                            <span className="w-4 h-4 rounded-full border-2 border-slate-400"></span>
                                        </div>
                                    </div>
                                    {/* Search Bar */}
                                    <div className="w-full h-10 bg-slate-100 rounded-full flex items-center px-4 text-xs text-slate-400 mb-4">
                                        {t("hero.searchPlaceholder")}
                                    </div>
                                    {/* Categories */}
                                    <div className="flex gap-2 overflow-hidden">
                                        {[t("hero.catAll"), t("hero.catFood"), t("hero.catFashion"), t("hero.catTech")].map((cat, i) => (
                                            <span
                                                key={cat}
                                                className={`text-[10px] font-semibold px-3 py-1 rounded-full whitespace-nowrap ${i === 0
                                                    ? "bg-primary text-white"
                                                    : "bg-slate-100 text-slate-600"
                                                    }`}
                                            >
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Scrollable Content */}
                                <div className="flex-1 overflow-hidden p-4 space-y-3 relative">
                                    {/* Featured Banner */}
                                    <div className="w-full h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 text-white flex flex-col justify-between shadow-lg shadow-blue-500/20">
                                        <span className="bg-white/20 self-start px-2 py-1 rounded text-[10px] font-bold">{t("hero.limitedTime")}</span>
                                        <div>
                                            <div className="font-bold text-lg">{t("hero.superSale")}</div>
                                            <div className="text-xs opacity-90">{t("hero.superSaleDesc")}</div>
                                        </div>
                                    </div>

                                    {/* Coupon List */}
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex gap-3 items-center">
                                            <div className={`w-11 h-11 rounded-lg ${i === 1 ? 'bg-red-50 text-red-500' : (i === 2 ? 'bg-orange-50 text-orange-500' : 'bg-green-50 text-green-500')} flex items-center justify-center font-bold text-base`}>
                                                {i === 1 ? '70%' : (i === 2 ? '50%' : '$20')}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold text-slate-900 text-xs mb-0.5">{i === 1 ? t("hero.nikeStore") : (i === 2 ? t("hero.zaraFashion") : t("hero.uberEats"))}</div>
                                                <div className="text-[9px] text-slate-500">{t("hero.expiresIn")}</div>
                                            </div>
                                            <div className="px-2 py-1 bg-slate-50 text-primary text-[10px] font-bold rounded-full">{t("hero.claim")}</div>
                                        </div>
                                    ))}

                                    {/* Fade at bottom */}
                                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>
                                </div>

                                {/* Bottom Nav */}
                                <div className="h-14 bg-white border-t border-slate-100 flex justify-around items-center px-2 shrink-0 z-20 relative">
                                    <div className="text-primary flex items-center justify-center"><div className="w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></div></div>
                                    <div className="text-slate-300 flex items-center justify-center"><div className="w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg></div></div>
                                    <div className="text-slate-300 flex items-center justify-center"><div className="w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg></div></div>
                                    <div className="text-slate-300 flex items-center justify-center"><div className="w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div></div>
                                </div>
                            </div>

                            {/* Floating Elements - Now placed INSIDE the phone container div to properly attach to edges */}
                            <FloatingCard
                                className="top-24 -start-6 md:-start-12 delay-100"
                                icon="🎁"
                                title={t("hero.floatingDiscount")}
                                subtitle={t("hero.floatingSubtitle1")}
                            />
                            <FloatingCard
                                className="bottom-32 -end-4 md:-end-10 delay-300"
                                icon="✨"
                                title={t("hero.floatingPoints")}
                                subtitle={t("hero.floatingSubtitle2")}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const FloatingCard = ({ className, icon, title, subtitle }) => {
    const [isMinimized, setIsMinimized] = useState(false);

    // Default to minimized on mobile (width < 768px)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMinimized(true);
            } else {
                setIsMinimized(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.div
            animate={{
                y: [0, -10, 0],
                width: isMinimized ? 50 : 192,
            }}
            transition={{
                y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                width: { type: "spring", stiffness: 300, damping: 30 }
            }}
            onClick={() => setIsMinimized(!isMinimized)}
            className={`absolute ${isMinimized ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-3 rounded-xl shadow-xl border flex items-center gap-3 overflow-hidden h-16 z-30 cursor-pointer hover:scale-105 transition-colors duration-300 ${className}`}
        >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 transition-colors duration-300 ${isMinimized ? 'bg-slate-800 text-white' : 'bg-blue-50 text-slate-900'}`}>
                {icon}
            </div>
            <div className={`transition-opacity duration-300 ${isMinimized ? 'opacity-0 absolute pointer-events-none' : 'opacity-100'}`}>
                <div className="font-bold text-slate-900 text-sm whitespace-nowrap">{title}</div>
                <div className="text-xs text-slate-500 whitespace-nowrap">{subtitle}</div>
            </div>
        </motion.div>
    );
};

export default Hero;
