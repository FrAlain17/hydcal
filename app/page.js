import Link from "next/link";
import { ArrowRight, Sprout, Activity, Droplets, Zap, Star } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col gap-20 pb-20">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-secondary">
                <div className="container relative z-10">
                    <div className="max-w-2xl animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-green-100 text-sm font-medium text-primary-dark mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            AI-Powered Grow Assistant
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
                            Your Smart Assistant for <span className="text-primary-dark">Hydroponic Success</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                            Master the art of soil-less growing. From system design to harvest, we guide you every step of the way with AI precision.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/builder" className="btn btn-primary text-lg px-8">
                                Start New System
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/doctor" className="btn btn-outline text-lg px-8 bg-white">
                                Diagnose Plant
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Abstract Nature Background Pattern */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-primary">
                        <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.9,32.4C59.6,43.3,48.3,52.2,36.2,60.8C24.1,69.4,11.2,77.7,-0.9,79.2C-13,80.8,-26,75.6,-37.5,66.8C-49,58,-59,45.6,-67.3,31.7C-75.6,17.8,-82.2,2.4,-80.3,-11.9C-78.4,-26.2,-68,-39.4,-56.3,-47.9C-44.6,-56.4,-31.6,-60.2,-18.9,-68.2C-6.2,-76.2,6.2,-88.4,19.6,-89.2C33,-90,46,-79.4,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </section>

            {/* Quick Actions / Features */}
            <section className="container -mt-20 relative z-20">
                <div className="grid grid-3 gap-6">
                    <Link href="/builder" className="card hover:-translate-y-1 group cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-primary-dark mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Smart System Builder</h3>
                        <p className="text-muted-foreground text-sm">Get a custom setup plan, equipment list, and maintenance schedule in 3 clicks.</p>
                    </Link>

                    <Link href="/doctor" className="card hover:-translate-y-1 group cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            <Activity className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">AI Plant Doctor</h3>
                        <p className="text-muted-foreground text-sm">Upload a photo to detect deficiencies, pests, or diseases instantly.</p>
                    </Link>

                    <Link href="/nutrients" className="card hover:-translate-y-1 group cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                            <Droplets className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Nutrient Calculator</h3>
                        <p className="text-muted-foreground text-sm">Precise dosing charts and pH adjustment guides for your specific crop.</p>
                    </Link>
                </div>
            </section>

            {/* Stats Preview */}
            <section className="container">
                <div className="bg-foreground rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Monitor Your Grow in Real-Time</h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <Sprout className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">24 Days</div>
                                        <div className="text-white/60 text-sm">Until Harvest</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <Activity className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">98% Health</div>
                                        <div className="text-white/60 text-sm">Optimal Conditions</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Link href="/dashboard" className="btn btn-primary">
                                    View Demo Dashboard
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                            {/* Mock Chart/Graph UI */}
                            <div className="flex justify-between items-end h-48 gap-2">
                                {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                                    <div key={i} className="w-full bg-primary/20 rounded-t-sm relative group">
                                        <div
                                            className="absolute bottom-0 w-full bg-primary rounded-t-sm transition-all duration-1000"
                                            style={{ height: `${h}%` }}
                                        ></div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between text-xs text-white/40 mt-4">
                                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="container text-center">
                <h2 className="text-3xl font-bold mb-12">Grown with HydroSmart</h2>
                <div className="grid grid-3 gap-8">
                    {[
                        { name: "Sarah J.", role: "Urban Farmer", text: "My lettuce yield doubled after using the nutrient calculator. It's so easy!" },
                        { name: "Mike T.", role: "Beginner", text: "The AI Doctor saved my tomatoes from root rot. I wouldn't have known otherwise." },
                        { name: "Emma W.", role: "Hobbyist", text: "Finally an app that looks good and actually helps. The interface is beautiful." }
                    ].map((t, i) => (
                        <div key={i} className="bg-secondary/50 p-6 rounded-xl">
                            <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="text-muted-foreground mb-6">"{t.text}"</p>
                            <div className="font-bold">{t.name}</div>
                            <div className="text-xs text-muted-foreground">{t.role}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
