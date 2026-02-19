import { motion, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Apple, Play } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="hero" className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400/5 blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium mb-6 border border-blue-100">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                1 Rewards Platform
                            </span>

                            <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-slate-900 leading-[1.1] mb-6">
                                Shop Smarter, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                                    Save More,
                                </span> <br />
                                Earn Rewards.
                            </h1>

                            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                                Discover exclusive coupons, submit your receipts, and earn points with every purchase. Join thousands of savvy shoppers on Copono!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Button aria-label="Download on App Store" className="h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-xl shadow-slate-900/20 text-base">
                                    <Apple className="mr-2 h-5 w-5" />
                                    App Store
                                </Button>
                                <Button aria-label="Get it on Google Play" className="h-14 px-8 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 rounded-full text-base">
                                    <Play className="mr-2 h-5 w-5 fill-current" />
                                    Google Play
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
                                <StatItem label="Active Users" value="10000+" />
                                <StatItem label="Partner Stores" value="500+" />
                                <StatItem label="Points Earned" value="1000000+" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Hero Image / Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative lg:h-[700px] flex items-center justify-center"
                    >
                        <div className="relative w-[300px] md:w-[350px] aspect-[9/19] bg-slate-900 rounded-[3rem] shadow-2xl border-[8px] border-slate-900 overflow-hidden">
                            {/* Detailed App Interface Mockup */}
                            <div className="absolute inset-0 bg-slate-50 flex flex-col relative overflow-hidden">

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
                                        Search for brands...
                                    </div>
                                    {/* Categories */}
                                    <div className="flex gap-3 overflow-hidden">
                                        {['All', 'Food', 'Fashion', 'Tech'].map((cat, i) => (
                                            <div key={i} className={`px-4 py-1.5 rounded-full text-xs font-medium ${i === 0 ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'}`}>
                                                {cat}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Scrollable Content */}
                                <div className="flex-1 overflow-hidden p-4 space-y-3 relative">
                                    {/* Featured Banner */}
                                    <div className="w-full h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 text-white flex flex-col justify-between shadow-lg shadow-blue-500/20">
                                        <span className="bg-white/20 self-start px-2 py-1 rounded text-[10px] font-bold">LIMITED TIME</span>
                                        <div>
                                            <div className="font-bold text-lg">Super Sale</div>
                                            <div className="text-xs opacity-90">Up to 70% off fashion</div>
                                        </div>
                                    </div>

                                    {/* Coupon List */}
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex gap-3 items-center">
                                            <div className={`w-12 h-12 rounded-lg ${i === 1 ? 'bg-red-50 text-red-500' : (i === 2 ? 'bg-orange-50 text-orange-500' : 'bg-green-50 text-green-500')} flex items-center justify-center font-bold text-lg`}>
                                                {i === 1 ? '70%' : (i === 2 ? '50%' : '$20')}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold text-slate-900 text-sm mb-1">{i === 1 ? 'Nike Store' : (i === 2 ? 'Zara Fashion' : 'Uber Eats')}</div>
                                                <div className="text-[10px] text-slate-500">Expires in 2 days</div>
                                            </div>
                                            <div className="px-3 py-1 bg-slate-50 text-primary text-xs font-bold rounded-full">Claim</div>
                                        </div>
                                    ))}

                                    {/* Fade at bottom */}
                                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>
                                </div>

                                {/* Bottom Nav */}
                                <div className="h-16 bg-white border-t border-slate-100 flex justify-around items-center px-2 shrink-0 z-20 relative">
                                    <div className="flex flex-col items-center gap-1 text-primary">
                                        <div className="w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></div>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-slate-300">
                                        <div className="w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg></div>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-slate-300">
                                        <div className="w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg></div>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-slate-300">
                                        <div className="w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements - Placed OUTSIDE the phone frame but inside the relative container */}
                            <FloatingCard className="top-24 left-[calc(50%-150px)] md:-left-12 delay-100" icon="🎁" title="50% OFF" subtitle="Zara Fashion" />
                            <FloatingCard className="bottom-32 right-[calc(50%-150px)] md:-right-8 delay-300" icon="✨" title="+500 pts" subtitle="Receipt Verified" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

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

const StatItem = ({ label, value }) => {
    // Extract numeric value for animation if possible
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    const suffix = value.replace(/[0-9]/g, '');

    return (
        <div>
            <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                {numericValue ? <Counter value={numericValue} /> : value}
                {numericValue ? suffix : ''}
            </div>
            <div className="text-sm text-slate-500 font-medium">{label}</div>
        </div>
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

        // Set initial state
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
            className={`absolute ${isMinimized ? 'bg-slate-900' : 'bg-white'} p-3 rounded-xl shadow-xl flex items-center gap-3 overflow-hidden h-16 z-30 cursor-pointer hover:scale-105 transition-colors duration-300 ${className}`}
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
