import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, TrendingUp, BarChart3, ChevronUp, DollarSign, ShoppingBag } from "lucide-react";
import { useTranslation } from "react-i18next";

const ForBusinesses = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const benefits = [
        { icon: <Eye className="w-5 h-5" />, title: t("forBusinesses.benefit1Title"), desc: t("forBusinesses.benefit1Desc") },
        { icon: <ShoppingBag className="w-5 h-5" />, title: t("forBusinesses.benefit2Title"), desc: t("forBusinesses.benefit2Desc") },
        { icon: <BarChart3 className="w-5 h-5" />, title: t("forBusinesses.benefit3Title"), desc: t("forBusinesses.benefit3Desc") },
    ];

    return (
        <section id="business" className="py-16 md:py-28 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 start-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 end-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground text-sm font-semibold mb-6 border border-primary/30">
                            {t("forBusinesses.badge")}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            <span className="text-white">{t("forBusinesses.title")}</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            {t("forBusinesses.description")}
                        </p>

                        <div className="space-y-6 mb-10">
                            {benefits.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg mb-1">{item.title}</h4>
                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <Button
                            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all group gap-2"
                        >
                            {t("forBusinesses.becomePartner")}
                            <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                        </Button>
                    </motion.div>

                    {/* Visual Mockup - with original chart hover tooltips */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative block mt-10 lg:mt-0"
                    >
                        {/* Background blob */}
                        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary/20 blur-[100px] rounded-full" />

                        <div className="relative rounded-2xl bg-slate-800 border border-slate-700 shadow-2xl overflow-hidden aspect-[16/10] group">
                            {/* Browser chrome */}
                            <div className="h-8 bg-slate-900 border-b border-slate-700 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>

                            <div className="p-4 sm:p-6 h-full flex items-center justify-center bg-slate-900/50">
                                <div className="w-full max-w-md space-y-6">
                                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                                        <div className="p-2 sm:p-3 bg-slate-800 rounded-lg border border-slate-700">
                                            <div className="text-[10px] sm:text-xs text-slate-500 mb-1">{t("forBusinesses.views")}</div>
                                            <div className="h-1.5 sm:h-2 w-full bg-blue-500/20 rounded-full mb-1">
                                                <div className="h-full w-[70%] bg-blue-500 rounded-full"></div>
                                            </div>
                                            <div className="text-sm sm:text-lg font-bold text-white">2.4k</div>
                                        </div>
                                        <div className="p-2 sm:p-3 bg-slate-800 rounded-lg border border-slate-700">
                                            <div className="text-[10px] sm:text-xs text-slate-500 mb-1">{t("forBusinesses.sales")}</div>
                                            <div className="h-1.5 sm:h-2 w-full bg-green-500/20 rounded-full mb-1">
                                                <div className="h-full w-[85%] bg-green-500 rounded-full"></div>
                                            </div>
                                            <div className="text-sm sm:text-lg font-bold text-white">$12k</div>
                                        </div>
                                        <div className="p-2 sm:p-3 bg-slate-800 rounded-lg border border-slate-700">
                                            <div className="text-[10px] sm:text-xs text-slate-500 mb-1">{t("forBusinesses.growth")}</div>
                                            <div className="h-1.5 sm:h-2 w-full bg-purple-500/20 rounded-full mb-1">
                                                <div className="h-full w-[40%] bg-purple-500 rounded-full"></div>
                                            </div>
                                            <div className="text-sm sm:text-lg font-bold text-white">+24%</div>
                                        </div>
                                    </div>
                                    <div className="h-48 bg-slate-800 rounded-lg w-full flex items-end justify-between p-4 px-4 sm:px-6 border border-slate-700 relative overflow-hidden">
                                        {/* Chart Lines Grid */}
                                        <div className="absolute inset-x-4 sm:inset-x-6 inset-y-4 flex flex-col justify-between opacity-10 pointer-events-none">
                                            <div className="border-t border-white"></div>
                                            <div className="border-t border-white"></div>
                                            <div className="border-t border-white"></div>
                                            <div className="border-t border-white"></div>
                                        </div>

                                        {[40, 70, 50, 90, 60, 80, 65, 85].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                                className="w-6 bg-gradient-to-t from-primary/50 to-primary rounded-t-sm relative group"
                                            >
                                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[8px] sm:text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold z-10">
                                                    {h}%
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ForBusinesses;
