import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, BarChart3, Users, Globe } from "lucide-react";

const benefits = [
    {
        icon: <Globe className="w-5 h-5 text-primary" />,
        title: "Increase Visibility",
        description: "Reach thousands of local customers actively looking for deals in your area."
    },
    {
        icon: <Users className="w-5 h-5 text-primary" />,
        title: "Verified Customers",
        description: "Our receipt scanning technology ensures you only reward actual purchases."
    },
    {
        icon: <BarChart3 className="w-5 h-5 text-primary" />,
        title: "Detailed Analytics",
        description: "Track campaign performance, customer demographics, and ROI in real-time."
    }
];

const ForBusinesses = () => {
    return (
        <section id="business" className="py-24 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground text-sm font-semibold mb-6 border border-primary/30">
                            For Store Owners
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            Grow Your Business with Copono
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Join our network of partner stores and start driving more foot traffic and sales today. We provide the tools you need to create effective campaigns and measure your success.
                        </p>

                        <div className="space-y-6 mb-10">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                                        <p className="text-slate-400 text-sm">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg shadow-lg shadow-primary/20">
                            Become a Partner
                        </Button>
                    </motion.div>

                    {/* Admin Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Background blobs */}
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
                                            <div className="text-[10px] sm:text-xs text-slate-500 mb-1">Views</div>
                                            <div className="h-1.5 sm:h-2 w-full bg-blue-500/20 rounded-full mb-1">
                                                <div className="h-full w-[70%] bg-blue-500 rounded-full"></div>
                                            </div>
                                            <div className="text-sm sm:text-lg font-bold text-white">2.4k</div>
                                        </div>
                                        <div className="p-2 sm:p-3 bg-slate-800 rounded-lg border border-slate-700">
                                            <div className="text-[10px] sm:text-xs text-slate-500 mb-1">Sales</div>
                                            <div className="h-1.5 sm:h-2 w-full bg-green-500/20 rounded-full mb-1">
                                                <div className="h-full w-[85%] bg-green-500 rounded-full"></div>
                                            </div>
                                            <div className="text-sm sm:text-lg font-bold text-white">$12k</div>
                                        </div>
                                        <div className="p-2 sm:p-3 bg-slate-800 rounded-lg border border-slate-700">
                                            <div className="text-[10px] sm:text-xs text-slate-500 mb-1">Growth</div>
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
