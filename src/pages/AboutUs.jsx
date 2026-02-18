import { motion } from "framer-motion";
import Meta from "../components/Meta";
import { Target, Users, Rocket, Award, ShieldCheck, Heart, ChevronRight, Download } from "lucide-react";

const AboutUs = () => {
    const stats = [
        { label: "Active Users", value: "50,000+", icon: <Users className="w-5 h-5" /> },
        { label: "Partner Stores", value: "1,000+", icon: <Target className="w-5 h-5" /> },
        { label: "Points Earned", value: "5M+", icon: <Award className="w-5 h-5" /> },
    ];

    const values = [
        {
            title: "Transparency",
            description: "We believe in being clear about how we reward our users and how we handle data.",
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            title: "Community First",
            description: "Our platform is built for you. We listen to feedback to make saving easier every day.",
            icon: <Heart className="w-6 h-6" />
        },
        {
            title: "Innovation",
            description: "Constantly evolving our receipt verification and reward systems for a seamless experience.",
            icon: <Rocket className="w-6 h-6" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Meta
                title="About Us | Copono"
                description="Discover the story behind Copono, our mission to help you save, and the values that drive us."
            />

            {/* Premium Header */}
            <div className="relative pt-40 pb-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-blue-600/10 opacity-60" />
                    <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        OUR STORY
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white font-heading mb-8 tracking-tight"
                    >
                        Revolutionizing <span className="text-primary italic">Saving</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Copono was born out of a simple idea: making rewards accessible to everyone,
                        everywhere. We bridge the gap between your everyday shopping and meaningful savings.
                    </motion.p>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="container mx-auto px-4 md:px-6 -mt-12 relative z-20">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary mb-4">
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                            <div className="text-slate-500 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mission Section */}
            <section className="py-32 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                                Our Mission: Empowing Your <br />
                                <span className="text-primary line-through decoration-blue-200">Receipts</span> Into Rewards
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    We believe that every purchase you make should bring you value beyond the product itself.
                                    Copono is designed to turn the "boring" part of shopping—the receipt—into a gateway for
                                    exclusive discounts and points.
                                </p>
                                <p>
                                    By partnering with thousands of local and international stores, we've created an ecosystem
                                    where users save money and businesses grow through verified customer interactions.
                                </p>
                            </div>
                            <div className="mt-10 flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                    Verified Receipts
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                    Instant Points
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                    Global Partners
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] rotate-3 blur-sm" />
                            <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-slate-100">
                                <div className="bg-slate-900 rounded-[2.5rem] aspect-video flex items-center justify-center overflow-hidden">
                                    {/* Placeholder for a company video or image */}
                                    <div className="text-center">
                                        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-primary/40">
                                            <Download className="w-8 h-8" />
                                        </div>
                                        <div className="text-white font-bold">Join the movement</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-bold mb-6 tracking-tight">The Values That Drive Us</h2>
                        <p className="text-slate-400 text-lg">
                            We aren't just building an app; we're building a trustworthy platform for millions.
                            Our core values are at the heart of every line of code we write.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Vision CTA */}
            <section className="py-32 text-center">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                            Ready to join the future of <span className="text-primary italic underline decoration-blue-100">saving</span>?
                        </h2>
                        <p className="text-xl text-slate-500 mb-12">
                            Download Copono today and see why thousands of users choose us for their everyday rewards.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all">
                                Discover Features
                            </button>
                            <button className="bg-white text-slate-700 border border-slate-200 px-10 py-5 rounded-full font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                                Partner with Us
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
