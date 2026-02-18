import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Is Copono free to use?",
        answer: "Yes, Copono is completely free for shoppers! You can download the app, browse coupons, and earn rewards without paying a dime."
    },
    {
        question: "How do I earn points?",
        answer: "You earn points by uploading receipts from partner stores, engaging with daily challenges, and inviting friends to the platform."
    },
    {
        question: "Where can I redeem my rewards?",
        answer: "Points can be redeemed for gift cards, cash back, or exclusive discounts at our partner retailers directly within the app."
    },
    {
        question: "How does the receipt verification work?",
        answer: "Simply snap a photo of your receipt using the app. Our AI technology scans and verifies the purchase details to award your points instantly."
    },
    {
        question: "Can I use Copono for online shopping?",
        answer: "Absolutely! We have digital coupons for thousands of online stores. You can also link your email to track online receipts automatically."
    },
    {
        question: "I'm a business owner, how can I join?",
        answer: "We'd love to have you! Click the 'Become a Partner' button in the Business section to sign up and start creating campaigns for your store."
    }
];

const FAQ = () => {
    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">
                        Support
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Have questions? We've got answers. If you need more help, feel free to contact our support team.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-100 mb-4">
                            <AccordionTrigger className="text-left text-lg font-medium text-slate-900 hover:text-primary py-6 transition-colors [&[data-state=open]]:text-primary">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ;
