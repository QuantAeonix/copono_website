import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

const DownloadCTA = () => {
    return (
        <section id="download" className="py-24 bg-primary overflow-hidden relative">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-white/10 blur-[100px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[80px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left text-white">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            Ready to Start Saving?
                        </h2>
                        <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Download the Copono app today and join the community of smart shoppers earning rewards on every purchase.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button className="h-16 px-8 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-xl shadow-slate-900/20 text-lg transition-transform hover:scale-105">
                                <Apple className="mr-2 h-6 w-6" />
                                App Store
                            </Button>
                            <Button className="h-16 px-8 bg-white hover:bg-slate-50 text-slate-900 rounded-full shadow-xl shadow-black/10 text-lg transition-transform hover:scale-105">
                                <Play className="mr-2 h-6 w-6 fill-current" />
                                Google Play
                            </Button>
                        </div>

                        <p className="mt-6 text-sm text-blue-200">
                            *Available on iOS and Android. Free forever.
                        </p>
                    </div>

                    {/* CTA Image / Mockup */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-[300px] md:w-[320px] aspect-[9/18] bg-slate-900 rounded-[3rem] shadow-2xl border-[8px] border-slate-900 overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                            {/* Screen Content */}
                            <div className="absolute inset-0 bg-white flex flex-col">
                                {/* Header */}
                                <div className="h-24 bg-primary p-6 pt-10 text-white">
                                    <div className="flex justify-between items-center">
                                        <div className="font-bold text-lg">My Rewards</div>
                                        <div className="text-xs bg-white/20 px-2 py-1 rounded">2,450 pts</div>
                                    </div>
                                </div>

                                {/* Body - Coupons List */}
                                <div className="flex-1 p-4 space-y-3 bg-slate-50">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex gap-3 items-center">
                                            <div className={`w-12 h-12 rounded-lg ${i % 2 === 0 ? 'bg-orange-100 text-orange-500' : 'bg-blue-100 text-blue-500'} flex items-center justify-center font-bold`}>
                                                {i % 2 === 0 ? '%' : '$'}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold text-slate-900 text-sm mb-0.5">{i % 2 === 0 ? 'Starbucks' : 'Target'}</div>
                                                <div className="text-[10px] text-slate-500">{i % 2 === 0 ? '15% Cashback' : '$10 Off'}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Floating 'Get It' Badge */}
                                <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                                    <div className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold shadow-lg text-sm">
                                        Download Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DownloadCTA;
