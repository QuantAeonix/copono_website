import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay"; // We'll need to install this or remove if not needed, seeing as user asked for "next prev icons"

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Regular Shopper",
        content: "I've saved over $200 in just my first month using Copono. The receipt scanning is super fast and actually works!",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Tech Enthusiast",
        content: "The UI is beautiful and the app is incredibly responsive. I love the leaderboard feature, it makes saving money fun.",
        rating: 5
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Fashion Blogger",
        content: "Finding deals for my favorite brands has never been easier. The exclusive coupons are actually legit and save me so much.",
        rating: 5
    },
    {
        id: 4,
        name: "David Smith",
        role: "Restaurant Owner",
        content: "As a business partner, Copono has brought in so many new faces to my bistro. The analytics dashboard is a game changer.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
                    Loved by Thousands of Shoppers
                </h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                    Don't just take our word for it. Here's what our community has to say about their savings journey.
                </p>
            </div>

            <div className="container mx-auto px-10 md:px-20 max-w-6xl">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1 h-full">
                                    <Card className="h-full border-none shadow-lg bg-white relative overflow-hidden group hover:shadow-xl transition-shadow">
                                        <div className="absolute top-0 right-0 p-4 opacity-10">
                                            <Quote className="w-24 h-24 text-primary rotate-180" />
                                        </div>
                                        <CardContent className="p-8 flex flex-col h-full relative z-10">
                                            <div className="flex gap-1 mb-6">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                            <p className="text-slate-600 italic mb-6 flex-grow leading-relaxed">
                                                "{testimonial.content}"
                                            </p>
                                            <div className="flex items-center gap-4 mt-auto">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white font-bold text-sm">
                                                    {testimonial.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                                                    <p className="text-slate-500 text-xs">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-12" />
                    <CarouselNext className="hidden md:flex -right-12" />

                    {/* Mobile Navigation Indicators (Dots) could go here if needed, but standard swipe + hidden arrows works well for mobile usually. 
              The user asked for "next prev best icons" on mobile too? Usually arrows on mobile take up screen space. 
              I'll enable them on mobile too if space permits, or better yet, make them visible but smaller/positioned nicely.
          */}
                    <div className="flex md:hidden justify-center gap-4 mt-8">
                        <CarouselPrevious className="static translate-y-0" />
                        <CarouselNext className="static translate-y-0" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default Testimonials;
