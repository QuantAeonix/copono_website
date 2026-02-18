import { motion } from "framer-motion";
import { Search, ShoppingCart, Upload } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Browse & Discover",
        description: "Explore thousands of exclusive coupons from your favorite fashion, food, and lifestyle brands.",
        icon: <Search className="w-6 h-6 text-primary" />,
        visual: (
            <div className="w-full h-full bg-slate-50 p-4 flex flex-col gap-3 relative overflow-hidden">
                {/* Search Bar */}
                <div className="flex gap-2 mb-2 relative z-10">
                    <div className="w-full h-8 bg-white rounded-full shadow-sm border border-slate-100 flex items-center px-3 text-[10px] text-slate-400">
                        <Search className="w-3 h-3 mr-2 text-slate-300" />
                        Search brands...
                    </div>
                </div>
                {/* Categories */}
                <div className="flex gap-2 mb-1 flex-wrap relative z-10">
                    <div className="px-3 py-1 bg-primary text-white text-[9px] font-bold rounded-full">All</div>
                    <div className="px-3 py-1 bg-white border border-slate-100 text-slate-600 text-[9px] font-medium rounded-full">Fashion</div>
                    <div className="px-3 py-1 bg-white border border-slate-100 text-slate-600 text-[9px] font-medium rounded-full">Food</div>
                    <div className="px-3 py-1 bg-white border border-slate-100 text-slate-600 text-[9px] font-medium rounded-full">Tech</div>
                </div>
                {/* Grid */}
                <div className="grid grid-cols-2 gap-3 relative z-10">
                    <div className="aspect-square bg-white rounded-xl shadow-sm p-2 flex flex-col gap-1 relative overflow-hidden group">
                        <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-red-50 rounded-md text-red-500 text-[8px] font-bold border border-red-100">-50%</div>
                        <div className="w-full h-1/2 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 text-lg">👟</div>
                        <div className="font-bold text-slate-900 text-[10px]">Nike Store</div>
                        <div className="text-[8px] text-slate-400">Up to 50% off</div>
                    </div>
                    <div className="aspect-square bg-white rounded-xl shadow-sm p-2 flex flex-col gap-1 relative overflow-hidden">
                        <div className="w-full h-1/2 bg-purple-50 rounded-lg flex items-center justify-center text-purple-500 text-lg">👗</div>
                        <div className="font-bold text-slate-900 text-[10px]">Zara</div>
                        <div className="text-[8px] text-slate-400">New Arrivals</div>
                    </div>
                    <div className="aspect-square bg-white rounded-xl shadow-sm p-2 flex flex-col gap-1 relative overflow-hidden">
                        <div className="w-full h-1/2 bg-green-50 rounded-lg flex items-center justify-center text-green-500 text-lg">🍔</div>
                        <div className="font-bold text-slate-900 text-[10px]">UberEats</div>
                    </div>
                    <div className="aspect-square bg-white rounded-xl shadow-sm p-2 flex flex-col gap-1 relative overflow-hidden">
                        <div className="w-full h-1/2 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500 text-lg">📱</div>
                        <div className="font-bold text-slate-900 text-[10px]">Apple</div>
                    </div>
                </div>
                {/* Decoration */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            </div>
        )
    },
    {
        id: 2,
        title: "Shop & Save",
        description: "Use the coupon codes at checkout to get instant discounts on your purchases.",
        icon: <ShoppingCart className="w-6 h-6 text-primary" />,
        visual: (
            <div className="w-full h-full bg-slate-50 p-4 pt-12 flex flex-col justify-between relative overflow-hidden">
                <div className="bg-white p-4 rounded-xl shadow-md border border-slate-100 relative z-10">
                    <div className="space-y-2 mb-3">
                        <div className="flex justify-between items-center text-[10px] text-slate-600">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center">👕</div>
                                <span>Denim Jacket</span>
                            </div>
                            <span className="font-medium">$80.00</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-slate-600">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center">👟</div>
                                <span>Sneakers</span>
                            </div>
                            <span className="font-medium">$40.00</span>
                        </div>
                    </div>
                    <div className="flex justify-between mb-4 border-t border-slate-100 pt-2 border-b pb-2">
                        <div className="text-xs font-bold text-slate-900">Total Amount</div>
                        <div className="text-xs font-bold text-slate-900">$120.00</div>
                    </div>
                    <div className="flex gap-2 items-center bg-green-50 p-2 rounded-lg border border-green-100 mb-2">
                        <div className="text-green-600 font-mono text-xs font-bold">SAVE20</div>
                        <div className="text-[10px] text-green-600 ml-auto">- $24.00</div>
                    </div>
                    <div className="flex items-center gap-1 justify-center text-[10px] text-green-600 font-bold uppercase tracking-wider">
                        <span>✓ Coupon Applied Successfully</span>
                    </div>
                </div>
                <div className="w-full h-10 bg-slate-900 rounded-xl mt-4 shadow-xl shadow-slate-900/10 text-white text-xs font-bold flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                    Pay Now $96.00
                </div>
                {/* Confetti decoration */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-red-400 rounded-full opacity-50"></div>
                <div className="absolute bottom-10 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-50"></div>
                <div className="absolute top-1/2 right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-50"></div>
            </div>
        )
    },
    {
        id: 3,
        title: "Submit & Earn",
        description: "Upload your receipt to the app. We verify it, and you earn points towards amazing rewards.",
        icon: <Upload className="w-6 h-6 text-primary" />,
        visual: (
            <div className="w-full h-full bg-slate-50 flex items-center justify-center relative overflow-hidden">
                {/* Phone Frame */}
                <div className="w-56 h-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 relative z-10">
                    <div className="w-full h-full bg-slate-50 rounded-xl overflow-hidden relative border border-slate-100">
                        {/* Receipt Image */}
                        <div className="absolute inset-x-4 top-4 bottom-8 bg-white shadow-sm border border-slate-100 flex flex-col items-center pt-3 gap-1 px-2">
                            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-[10px] font-bold">M</div>
                            <div className="text-[8px] text-slate-400 uppercase tracking-widest mb-1">Receipt</div>
                            <div className="w-full flex justify-between text-[7px] text-slate-500 font-medium">
                                <span>Milk</span>
                                <span>$4.00</span>
                            </div>
                            <div className="w-full flex justify-between text-[7px] text-slate-500 font-medium">
                                <span>Bread</span>
                                <span>$2.50</span>
                            </div>
                            <div className="w-full flex justify-between text-[7px] text-slate-500 font-medium">
                                <span>Eggs</span>
                                <span>$3.00</span>
                            </div>
                            <div className="w-full flex justify-between text-[7px] text-slate-500 font-medium">
                                <span>Cheese</span>
                                <span>$5.50</span>
                            </div>
                            <div className="w-full flex justify-between text-[7px] text-slate-500 font-medium">
                                <span>Apples</span>
                                <span>$4.20</span>
                            </div>
                            <div className="w-full flex justify-between text-[7px] text-slate-500 font-medium">
                                <span>Chicken</span>
                                <span>$8.90</span>
                            </div>
                            <div className="w-full h-px bg-slate-100 my-1"></div>
                            <div className="w-full flex justify-between text-[8px] font-bold text-slate-900">
                                <span>Total</span>
                                <span>$9.50</span>
                            </div>
                            <div className="mt-auto mb-1 w-full text-center">
                                <div className="text-[6px] font-mono tracking-[0.2em] text-slate-400">||||||||||||||||</div>
                                <div className="text-[5px] text-slate-300 mt-0.5">Thank You!</div>
                            </div>
                        </div>
                        {/* Scanning Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-[scan_2s_ease-in-out_infinite] z-20"></div>
                    </div>
                </div>

                {/* Floating Success Badge */}
                <div className="absolute bottom-6 right-6 bg-white text-green-600 text-xs font-bold px-3 py-2 rounded-xl shadow-lg border border-green-100 flex items-center gap-2 animate-bounce z-30">
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-[10px]">✓</div>
                    +50 pts
                </div>
            </div>
        )
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-green-100/30 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">
                        Simple Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
                        Start Saving in 3 Simple Steps
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Join millions of users who are turning their shopping receipts into real rewards.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[160px] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-200 via-primary/50 to-blue-200 z-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center"
                            >
                                {/* Step Image (Placeholder) */}
                                <div className="w-full max-w-sm aspect-[4/5] bg-white rounded-3xl shadow-xl border border-slate-100 mb-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {step.visual}
                                    </div>
                                    {/* Badge */}
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary to-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20 z-20 group-hover:scale-110 transition-transform duration-300 ring-2 ring-white">
                                        {step.id}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
