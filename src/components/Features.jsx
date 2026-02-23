import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tag, Receipt, Gift, ShoppingBag, Users, Bell } from "lucide-react";
import { useTranslation } from "react-i18next";

const Features = () => {
    const { t } = useTranslation();

    const features = [
        { icon: <Tag className="w-6 h-6 md:w-8 md:h-8" />, title: t("features.feature1Title"), description: t("features.feature1Desc") },
        { icon: <Receipt className="w-6 h-6 md:w-8 md:h-8" />, title: t("features.feature2Title"), description: t("features.feature2Desc") },
        { icon: <Gift className="w-6 h-6 md:w-8 md:h-8" />, title: t("features.feature3Title"), description: t("features.feature3Desc") },
        { icon: <ShoppingBag className="w-6 h-6 md:w-8 md:h-8" />, title: t("features.feature4Title"), description: t("features.feature4Desc") },
        { icon: <Users className="w-6 h-6 md:w-8 md:h-8" />, title: t("features.feature5Title"), description: t("features.feature5Desc") },
        { icon: <Bell className="w-6 h-6 md:w-8 md:h-8" />, title: t("features.feature6Title"), description: t("features.feature6Desc") },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="features" className="py-12 md:py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 start-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-8 md:mb-16"
                >
                    <span className="text-primary font-semibold text-sm tracking-wider uppercase">{t("features.subtitle")}</span>
                    <h2 className="text-2xl md:text-5xl font-bold font-heading mt-3 mb-4 md:mb-6 tracking-tight text-slate-900">
                        {t("features.title")}
                    </h2>
                    <p className="text-slate-600 text-sm md:text-lg leading-relaxed hidden sm:block">
                        {t("features.description")}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <CardContent className="p-4 md:p-8 flex flex-col items-center text-center md:items-start md:text-left h-full">
                                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-3 md:mb-6 flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-sm md:text-xl font-bold text-slate-900 mb-2 md:mb-3 leading-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs md:text-base text-slate-600 leading-relaxed hidden sm:block">
                                        {feature.description}
                                    </p>
                                    <p className="text-[10px] text-slate-500 leading-snug sm:hidden">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
