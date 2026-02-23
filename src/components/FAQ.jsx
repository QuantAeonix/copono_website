import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const FAQ = () => {
    const { t } = useTranslation();

    const faqs = [
        { question: t("faq.q1"), answer: t("faq.a1") },
        { question: t("faq.q2"), answer: t("faq.a2") },
        { question: t("faq.q3"), answer: t("faq.a3") },
        { question: t("faq.q4"), answer: t("faq.a4") },
        { question: t("faq.q5"), answer: t("faq.a5") },
        { question: t("faq.q6"), answer: t("faq.a6") },
    ];

    return (
        <section id="faq" className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-12"
                >
                    <span className="text-primary font-semibold text-sm tracking-wider uppercase">{t("faq.subtitle")}</span>
                    <h2 className="text-2xl md:text-5xl font-bold font-heading mt-3 mb-4 tracking-tight text-slate-900">
                        {t("faq.title")}
                    </h2>
                    <p className="text-slate-600 text-sm md:text-lg leading-relaxed">
                        {t("faq.description")}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <Accordion type="single" collapsible>
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-100 mb-4">
                                <AccordionTrigger className="text-start text-lg font-medium text-slate-900 hover:text-primary py-6 transition-colors [&[data-state=open]]:text-primary">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
