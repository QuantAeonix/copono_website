import { motion } from "framer-motion";
import Meta from "../components/Meta";
import { Lock, Eye, Shield, Share2, Server, UserCheck, Mail, ChevronRight } from "lucide-react";

const LegalPrivacy = () => {
    const sections = [
        {
            id: "collect",
            icon: <Eye className="w-5 h-5" />,
            title: "1. Information We Collect",
            content: "We collect information you provide directly to us when you create an account, upload a receipt, or communicate with us. This include your name, email address, profile picture, and any metadata associated with the receipt images you provide for verification."
        },
        {
            id: "use",
            icon: <UserCheck className="w-5 h-5" />,
            title: "2. How We Use Your Information",
            content: "We use the information we collect to provide, maintain, and improve our services. Specifically, receipt images are used to verify purchases and calculate reward points. We also use your information to send you notifications about your account, such as receipt approval or rejection notices."
        },
        {
            id: "verification",
            icon: <Shield className="w-5 h-5" />,
            title: "3. Receipt Verification & Data",
            content: "When you upload a receipt, we process the image to extract store name, purchase amount, and date. This data is stored securely and used exclusively for reward calculation and fraud prevention. We do not sell your personal purchase data to third parties."
        },
        {
            id: "sharing",
            icon: <Share2 className="w-5 h-5" />,
            title: "4. Sharing of Information",
            content: "We may share information with third-party service providers who perform services on our behalf, such as cloud hosting or notification delivery. We may also disclose information if required by law or to protect the rights and safety of our users and the platform."
        },
        {
            id: "security",
            icon: <Server className="w-5 h-5" />,
            title: "5. Data Security",
            content: "We take reasonable measures to protect your personal information from loss, theft, misuse, and unauthorized access. However, no internet transmission is ever 100% secure, and we cannot guarantee absolute security."
        },
        {
            id: "choices",
            icon: <Lock className="w-5 h-5" />,
            title: "6. Your Choices & Rights",
            content: "You can update your profile information and notification preferences at any time through the app settings. You may also request the deletion of your account and associated data by contacting our support team."
        },
        {
            id: "contact",
            icon: <Mail className="w-5 h-5" />,
            title: "7. Contact Us",
            content: "If you have any questions about this Privacy Policy, please contact us at support@copono.com."
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
                title="Privacy Policy | Copono"
                description="Learn how Copono protects your data and manages your information."
            />

            {/* Premium Header */}
            <div className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-600/10 opacity-50" />
                    <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
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
                            <span className="text-primary-foreground">Privacy Policy</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white font-heading mb-6 tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                            At Copono, your privacy is our priority. We are committed to protecting your personal data
                            and being transparent about how we use it to provide you with the best rewards experience.
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
                                    <Shield className="w-3.5 h-3.5" />
                                    SECURE VERSION 2.1
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

                            {/* Professional Footer for the page content */}
                            <div className="mt-20 pt-10 border-t border-slate-100">
                                <div className="bg-slate-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                                    <div className="relative z-10">
                                        <h4 className="font-bold text-slate-900 mb-2">Have questions about your data?</h4>
                                        <p className="text-slate-500 text-sm">Our data protection officer is here to help you understand your rights.</p>
                                    </div>
                                    <button className="bg-white text-primary border border-slate-200 px-6 py-3 rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-all whitespace-nowrap relative z-10">
                                        Email Support
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default LegalPrivacy;
