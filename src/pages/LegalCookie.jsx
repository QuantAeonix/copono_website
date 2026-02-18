import { motion } from "framer-motion";
import Meta from "../components/Meta";
import { Cookie, Info, Shield, Settings, Trash2, HelpCircle, ChevronRight, BarChart3 } from "lucide-react";

const LegalCookie = () => {
    const sections = [
        {
            id: "what",
            icon: <Info className="w-5 h-5" />,
            title: "1. What are Cookies?",
            content: "Cookies are small text files that are stored on your device when you visit our website. They help us remember your preferences, understand how you use our site, and improve your overall experience. Some cookies are essential for the site to function, while others are used for analytics and marketing."
        },
        {
            id: "essential",
            icon: <Shield className="w-5 h-5" />,
            title: "2. Essential Cookies",
            content: "These cookies are strictly necessary for the website to function properly. They enable core features like security, account authentication, and receipt upload sessions. Without these cookies, the basic services of Copono cannot be provided."
        },
        {
            id: "analytics",
            icon: <BarChart3 className="w-5 h-5" />,
            title: "3. Analytics Cookies",
            content: "We use analytics cookies to collect information about how visitors interact with our website. This helps us understand which pages are popular, identify technical issues, and improve the user journey. The information collected is aggregated and anonymous."
        },
        {
            id: "preference",
            icon: <Settings className="w-5 h-5" />,
            title: "4. Preference Cookies",
            content: "Preference cookies allow our website to remember choices you make (such as your language or region) and provide enhanced, more personal features. These cookies can also be used to remember changes you have made to text size and other parts of web pages that you can customize."
        },
        {
            id: "manage",
            icon: <Trash2 className="w-5 h-5" />,
            title: "5. Managing Cookies",
            content: "You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, please note that disabling certain cookies may affect the functionality of our website and your ability to use our services."
        },
        {
            id: "questions",
            icon: <HelpCircle className="w-5 h-5" />,
            title: "6. Questions?",
            content: "If you have any questions about our use of cookies, please contact our privacy team at privacy@copono.com."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Meta
                title="Cookie Policy | Copono"
                description="Understand how we use cookies to improve your experience on the Copono platform."
            />

            {/* Premium Header */}
            <div className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-600/10 opacity-50" />
                    <div className="absolute top-[-40%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/15 blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-6">
                            <span>Legal</span>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-primary-foreground">Cookie Policy</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white font-heading mb-6 tracking-tight flex items-center gap-4">
                            <Cookie className="w-10 h-10 md:w-16 md:h-16 text-primary" />
                            Cookie Policy
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                            Discover how we use cookies and similar technologies to enhance your journey with Copono,
                            maintaining the perfect balance of performance and privacy.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 pb-32">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Sticky Sidebar Navigation */}
                    <motion.aside
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:w-1/4 hidden lg:block"
                    >
                        <div className="sticky top-32 space-y-2">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 px-4">Sections</h3>
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className="w-full text-left px-4 py-3 rounded-xl text-slate-600 hover:bg-white hover:text-primary transition-all duration-200 group flex items-center gap-3 text-sm font-medium border border-transparent hover:border-slate-200 hover:shadow-sm"
                                >
                                    <span className="text-slate-400 group-hover:text-primary transition-colors">
                                        {section.icon}
                                    </span>
                                    {section.title.split('. ')[1]}
                                </button>
                            ))}
                        </div>
                    </motion.aside>

                    {/* Main Content Area */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:w-3/4"
                    >
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-12">
                            <div className="flex justify-between items-center mb-12 pb-8 border-b border-slate-100">
                                <div className="text-slate-500 text-sm">
                                    Last Updated: <span className="font-semibold text-slate-900">February 18, 2026</span>
                                </div>
                                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold">
                                    <Cookie className="w-3.5 h-3.5" />
                                    DATA PROTECTION
                                </div>
                            </div>

                            <div className="space-y-16">
                                {sections.map((section) => (
                                    <motion.div
                                        key={section.id}
                                        id={section.id}
                                        variants={itemVariants}
                                        className="group"
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                                {section.icon}
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                                                {section.title}
                                            </h2>
                                        </div>
                                        <div className="pl-0 md:pl-16">
                                            <p className="text-slate-600 leading-relaxed text-lg">
                                                {section.content}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Cookie Settings Portal CTA */}
                            <div className="mt-20 pt-10 border-t border-slate-100">
                                <div className="bg-slate-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                                    <div className="relative z-10">
                                        <h4 className="font-bold text-slate-900 mb-2">Want to change your mind?</h4>
                                        <p className="text-slate-500 text-sm">You can clear your cookie consent at any time through our portal.</p>
                                    </div>
                                    <div className="flex gap-4 relative z-10">
                                        <button className="bg-white text-primary border border-slate-200 px-6 py-3 rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-all whitespace-nowrap">
                                            Reset Consent
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default LegalCookie;
