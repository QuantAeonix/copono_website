import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Download, Gift, Star, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const DownloadCTA = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <section id="download" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
            <div className="absolute start-1/4 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-600/10 opacity-50" />
                    <div className="absolute top-0 end-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Content */}
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 tracking-tight leading-tight"
                            >
                                {t("downloadCta.title")}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-slate-400 text-lg mb-8 leading-relaxed"
                            >
                                {t("downloadCta.description")}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-3"
                            >
                                <Button
                                    size="lg"
                                    className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-6 py-6 text-base shadow-xl hover:scale-105 active:scale-95 transition-all group gap-2"
                                >
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                                    {t("downloadCta.appStore")}
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 rounded-full px-6 py-6 text-base hover:scale-105 active:scale-95 transition-all group gap-2 backdrop-blur-sm"
                                >
                                    <a href="https://play.google.com/store/apps/details?id=com.copono.copono" target="_blank" rel="noopener noreferrer">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 1.33a1 1 0 010 1.73l-2.302 1.33-2.535-2.535 2.535-2.535zM5.864 3.458L16.8 9.79l-2.302 2.302-8.634-8.634z" /></svg>
                                        {t("downloadCta.googlePlay")}
                                    </a>
                                </Button>
                            </motion.div>

                            <p className="text-slate-500 text-xs mt-4">{t("downloadCta.footnote")}</p>
                        </div>

                        {/* Phone mockup */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="hidden lg:flex justify-center"
                        >
                            <div className="relative">
                                <div className="w-[260px] bg-slate-800 rounded-[2.5rem] p-3 border border-slate-700/50 shadow-2xl">
                                    <div className="bg-white rounded-[2rem] overflow-hidden">
                                        <div className="bg-gradient-to-br from-primary to-blue-600 p-6 text-center">
                                            <Gift className="w-10 h-10 text-white mx-auto mb-3" />
                                            <h3 className="text-white font-bold text-lg mb-1">{t("downloadCta.myRewards")}</h3>
                                            <p className="text-blue-100 text-xs">2,450 pts</p>
                                        </div>
                                        <div className="p-4 space-y-3">
                                            <button className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
                                                <Download className="w-4 h-4" />
                                                {t("downloadCta.downloadNow")}
                                            </button>
                                            {[t("downloadCta.cashback"), t("downloadCta.tenOff")].map((reward, i) => (
                                                <div key={i} className="flex items-center justify-between bg-slate-50 rounded-xl p-3">
                                                    <div className="flex items-center gap-2">
                                                        <Star className="w-4 h-4 text-amber-400" />
                                                        <span className="text-xs font-medium text-slate-700">{reward}</span>
                                                    </div>
                                                    <ChevronRight className={`w-4 h-4 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadCTA;
