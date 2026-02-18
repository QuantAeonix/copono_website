import { motion } from "framer-motion";
import Meta from "../components/Meta";
import { Scale, FileText, UserPlus, Zap, Ban, Copyright, AlertTriangle, RefreshCw, ChevronRight, HelpCircle } from "lucide-react";

const LegalTerms = () => {
    const sections = [
        {
            id: "acceptance",
            icon: <FileText className="w-5 h-5" />,
            title: "1. Acceptance of Terms",
            content: "By accessing or using Copono, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform."
        },
        {
            id: "service",
            icon: <Zap className="w-5 h-5" />,
            title: "2. Description of Service",
            content: "Copono provides a platform where users can discover coupons and earn reward points by uploading valid purchase receipts. We reserve the right to modify or discontinue any aspect of the service at any time."
        },
        {
            id: "eligibility",
            icon: <UserPlus className="w-5 h-5" />,
            title: "3. User Accounts & Eligibility",
            content: "You must be at least 13 years old to use Copono. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information when creating an account."
        },
        {
            id: "points",
            icon: <Scale className="w-5 h-5" />,
            title: "4. Receipt Submission & Points",
            content: "Points are awarded based on the verification of legitimate purchase receipts. We reserve the final right to approve or reject any receipt. Fraudulent submissions, including fake receipts or duplicate uploads, will result in immediate account termination and forfeiture of all points."
        },
        {
            id: "conduct",
            icon: <Ban className="w-5 h-5" />,
            title: "5. Prohibited Conduct",
            content: "You agree not to use Copono for any unlawful purpose. Prohibited activities include attempting to gain unauthorized access to our systems, interfering with the service, or using automated scripts to collect data or manipulate the rewards system."
        },
        {
            id: "ip",
            icon: <Copyright className="w-5 h-5" />,
            title: "6. Intellectual Property",
            content: "All content on Copono, including logos, text, and graphics, is the property of Copono and is protected by intellectual property laws. You may not reproduce or distribute any part of our platform without explicit permission."
        },
        {
            id: "liability",
            icon: <AlertTriangle className="w-5 h-5" />,
            title: "7. Limitation of Liability",
            content: "Copono is provided 'as is' without warranties of any kind. We shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service."
        },
        {
            id: "changes",
            icon: <RefreshCw className="w-5 h-5" />,
            title: "8. Changes to Terms",
            content: "We may update these Terms of Service from time to time. Your continued use of the platform after any changes constitutes your acceptance of the new terms."
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
                title="Terms of Service | Copono"
                description="Read the terms and conditions for using the Copono platform."
            />

            {/* Premium Header */}
            <div className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-600/10 opacity-50" />
                    <div className="absolute bottom-[-50%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
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
                            <span className="text-primary-foreground">Terms of Service</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white font-heading mb-6 tracking-tight">
                            Terms of Service
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                            Welcome to Copono. These terms govern your use of our platform. By using our services,
                            you agree to these rules which help us maintain a fair and rewarding community for everyone.
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
                                    <Scale className="w-3.5 h-3.5" />
                                    OFFICIAL TERMS
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

                            {/* FAQ Link or Contact */}
                            <div className="mt-20 pt-10 border-t border-slate-100">
                                <div className="bg-slate-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                                    <div className="relative z-10">
                                        <h4 className="font-bold text-slate-900 mb-2">Need more clarification?</h4>
                                        <p className="text-slate-500 text-sm">Check our help center or contact our legal team for detailed information.</p>
                                    </div>
                                    <div className="flex gap-4 relative z-10 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                                        <button className="bg-white text-slate-600 border border-slate-200 px-6 py-3 rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-all whitespace-nowrap flex items-center gap-2">
                                            <HelpCircle className="w-4 h-4" />
                                            Help Center
                                        </button>
                                        <button className="bg-primary text-white px-6 py-3 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all whitespace-nowrap">
                                            Contact Us
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

export default LegalTerms;
