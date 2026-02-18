import { motion } from "framer-motion";
import { Gift, Camera, Trophy, Store, Users, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
    {
        icon: <Gift className="w-6 h-6 text-primary" />,
        title: "Exclusive Coupons",
        description: "Access thousands of verified discount codes from top global and local brands.",
        color: "bg-blue-50"
    },
    {
        icon: <Camera className="w-6 h-6 text-green-600" />,
        title: "Receipt Rewards",
        description: "Upload your purchase receipts to verify transactions and earn points instantly.",
        color: "bg-green-50"
    },
    {
        icon: <Trophy className="w-6 h-6 text-amber-500" />,
        title: "Points System",
        description: "Accumulate points for every action and redeem them for amazing rewards.",
        color: "bg-amber-50"
    },
    {
        icon: <Store className="w-6 h-6 text-purple-600" />,
        title: "Discover Stores",
        description: "Browse stores by category - Fashion, Food, Beauty, Electronics and more.",
        color: "bg-purple-50"
    },
    {
        icon: <Users className="w-6 h-6 text-rose-500" />,
        title: "Social Leaderboard",
        description: "Compete with friends and climb the leaderboard to win special prizes.",
        color: "bg-rose-50"
    },
    {
        icon: <Bell className="w-6 h-6 text-cyan-500" />,
        title: "Real-time Alerts",
        description: "Never miss a deal with instant notifications for new coupons and offers.",
        color: "bg-cyan-50"
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">
                        Why Choose Copono
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
                        Everything You Need to Save & Earn
                    </h2>
                    <p className="text-slate-600 text-lg">
                        We've built the most comprehensive rewards platform to make your shopping experience more rewarding.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <CardContent className="p-4 md:p-8 flex flex-col items-center text-center md:items-start md:text-left h-full">
                                    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-3 md:mb-6 shrink-0`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-sm md:text-xl font-bold text-slate-900 mb-2 md:mb-3 leading-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs md:text-base text-slate-600 leading-relaxed hidden sm:block">
                                        {feature.description}
                                    </p>
                                    <p className="text-[10px] text-slate-600 leading-tight sm:hidden">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
