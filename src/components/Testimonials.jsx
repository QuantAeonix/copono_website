import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const testimonials = [
        { name: t("testimonials.t1Name"), role: t("testimonials.t1Role"), rating: 5, content: t("testimonials.t1Content"), avatar: "SJ" },
        { name: t("testimonials.t2Name"), role: t("testimonials.t2Role"), rating: 5, content: t("testimonials.t2Content"), avatar: "MC" },
        { name: t("testimonials.t3Name"), role: t("testimonials.t3Role"), rating: 5, content: t("testimonials.t3Content"), avatar: "ER" },
        { name: t("testimonials.t4Name"), role: t("testimonials.t4Role"), rating: 5, content: t("testimonials.t4Content"), avatar: "DS" },
    ];

    return (
        <section className="py-12 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-12"
                >
                    <h2 className="text-2xl md:text-5xl font-bold font-heading tracking-tight text-slate-900 mb-4">
                        {t("testimonials.title")}
                    </h2>
                    <p className="text-slate-600 text-sm md:text-lg leading-relaxed">
                        {t("testimonials.description")}
                    </p>
                </motion.div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                        direction: isRTL ? "rtl" : "ltr",
                    }}
                    plugins={[
                        Autoplay({ delay: 4000, stopOnInteraction: false }),
                    ]}
                    className="w-full max-w-5xl mx-auto"
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2">
                                <Card className="border border-slate-100 shadow-sm h-full">
                                    <CardContent className="p-6 md:p-8 flex flex-col h-full">
                                        <div className="flex gap-1 mb-4">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                        <p className="text-slate-700 leading-relaxed mb-6 flex-1 text-sm md:text-base">
                                            "{testimonial.content}"
                                        </p>
                                        <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                            <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                                                {testimonial.avatar}
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
                                                <p className="text-slate-500 text-xs">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>
        </section>
    );
};

export default Testimonials;
