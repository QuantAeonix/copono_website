import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Users, Store, Trophy, FileCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const Counter = ({ value }) => {
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

    useEffect(() => {
        const animate = () => {
            spring.set(0);
            setTimeout(() => {
                spring.set(value);
            }, 100);
        };

        animate();

        const interval = setInterval(animate, 3500);

        return () => clearInterval(interval);
    }, [value, spring]);

    return <motion.span>{display}</motion.span>;
};

const Statistics = () => {
    const { t } = useTranslation();

    const stats = [
        {
            id: 1,
            label: t("statistics.activeUsers"),
            value: 50000,
            suffix: "+",
            icon: <Users className="w-8 h-8 text-blue-500" />
        },
        {
            id: 2,
            label: t("statistics.partnerStores"),
            value: 1000,
            suffix: "+",
            icon: <Store className="w-8 h-8 text-purple-500" />
        },
        {
            id: 3,
            label: t("statistics.pointsEarned"),
            value: 5000000,
            suffix: "+",
            icon: <Trophy className="w-8 h-8 text-amber-500" />
        },
        {
            id: 4,
            label: t("statistics.receiptsVerified"),
            value: 100000,
            suffix: "+",
            icon: <FileCheck className="w-8 h-8 text-green-500" />
        }
    ];

    return (
        <section id="statistics" className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 md:px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center text-white">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/20 transform hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-5xl font-bold font-heading mb-2 bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">
                                <Counter value={stat.value} />
                                {stat.suffix}
                            </div>
                            <div className="text-slate-400 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
