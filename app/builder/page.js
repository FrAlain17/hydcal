"use client";

import { useState } from "react";
import { ArrowRight, Check, Droplets, Sun, Box, Sprout } from "lucide-react";
import Link from "next/link";

const STEPS = [
    { id: 1, title: "System Type", icon: Droplets },
    { id: 2, title: "Plant Type", icon: Sprout },
    { id: 3, title: "Environment", icon: Sun },
    { id: 4, title: "Your Plan", icon: Check },
];

export default function BuilderPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        systemType: "",
        plantType: "",
        space: "",
        light: "",
    });

    const handleNext = () => setStep(s => Math.min(s + 1, 4));
    const handleBack = () => setStep(s => Math.max(s - 1, 1));

    const updateForm = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="container py-12 max-w-4xl">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-4">Smart System Builder</h1>
                <p className="text-muted-foreground">Design your perfect hydroponic setup in minutes.</p>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-12 relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-secondary -z-10"></div>
                <div
                    className="absolute top-1/2 left-0 h-1 bg-primary -z-10 transition-all duration-500"
                    style={{ width: `${((step - 1) / 3) * 100}%` }}
                ></div>
                {STEPS.map((s) => {
                    const Icon = s.icon;
                    const isActive = step >= s.id;
                    const isCurrent = step === s.id;
                    return (
                        <div key={s.id} className="flex flex-col items-center gap-2 bg-white px-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${isActive ? "bg-primary border-primary text-white" : "bg-white border-gray-200 text-gray-400"
                                }`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <span className={`text-xs font-medium ${isCurrent ? "text-primary-dark" : "text-muted-foreground"}`}>
                                {s.title}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm min-h-[400px]">
                {step === 1 && (
                    <div className="animate-fade-in">
                        <h2 className="text-xl font-bold mb-6">Choose your System Type</h2>
                        <div className="grid grid-2 gap-4">
                            {[
                                { id: "nft", label: "NFT (Nutrient Film Technique)", desc: "Best for leafy greens, low water usage." },
                                { id: "dwc", label: "DWC (Deep Water Culture)", desc: "Great for beginners, fast growth." },
                                { id: "ebb", label: "Ebb & Flow", desc: "Versatile, good for various plant sizes." },
                                { id: "drip", label: "Drip System", desc: "Ideal for larger long-term crops." }
                            ].map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => updateForm("systemType", type.id)}
                                    className={`text-left p-6 rounded-xl border-2 transition-all ${formData.systemType === type.id
                                            ? "border-primary bg-green-50"
                                            : "border-transparent bg-secondary hover:bg-green-50"
                                        }`}
                                >
                                    <div className="font-bold mb-1">{type.label}</div>
                                    <div className="text-sm text-muted-foreground">{type.desc}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="animate-fade-in">
                        <h2 className="text-xl font-bold mb-6">What do you want to grow?</h2>
                        <div className="grid grid-3 gap-4">
                            {["Lettuce", "Herbs", "Tomatoes", "Peppers", "Strawberries", "Spinach"].map((plant) => (
                                <button
                                    key={plant}
                                    onClick={() => updateForm("plantType", plant)}
                                    className={`p-4 rounded-xl border-2 transition-all text-center ${formData.plantType === plant
                                            ? "border-primary bg-green-50"
                                            : "border-transparent bg-secondary hover:bg-green-50"
                                        }`}
                                >
                                    <span className="font-medium">{plant}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="animate-fade-in">
                        <h2 className="text-xl font-bold mb-6">Your Environment</h2>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Available Space</label>
                                <div className="grid grid-2 gap-4">
                                    {["Small (2x2 ft)", "Medium (4x4 ft)", "Large (Room)", "Greenhouse"].map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => updateForm("space", size)}
                                            className={`p-4 rounded-xl border-2 transition-all text-center ${formData.space === size
                                                    ? "border-primary bg-green-50"
                                                    : "border-transparent bg-secondary hover:bg-green-50"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Light Source</label>
                                <div className="grid grid-2 gap-4">
                                    {["Natural Sunlight", "LED Grow Lights", "Fluorescent", "HPS/MH"].map((light) => (
                                        <button
                                            key={light}
                                            onClick={() => updateForm("light", light)}
                                            className={`p-4 rounded-xl border-2 transition-all text-center ${formData.light === light
                                                    ? "border-primary bg-green-50"
                                                    : "border-transparent bg-secondary hover:bg-green-50"
                                                }`}
                                        >
                                            {light}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="animate-fade-in">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-dark">
                                <Check className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold">Your Custom Plan is Ready!</h2>
                            <p className="text-muted-foreground">Based on growing {formData.plantType} in a {formData.systemType.toUpperCase()} system.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-secondary p-6 rounded-xl">
                                <h3 className="font-bold mb-4 flex items-center gap-2">
                                    <Box className="w-5 h-5 text-primary-dark" /> Equipment List
                                </h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Reservoir (10-20 Gallons)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Air Pump & Air Stone</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Net Pots (3 inch)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Clay Pebbles</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> pH Control Kit</li>
                                </ul>
                            </div>
                            <div className="bg-secondary p-6 rounded-xl">
                                <h3 className="font-bold mb-4 flex items-center gap-2">
                                    <Droplets className="w-5 h-5 text-primary-dark" /> Nutrient Schedule
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between border-b border-green-100 pb-2">
                                        <span>Week 1 (Seedling)</span>
                                        <span className="font-medium">400 PPM / 0.8 EC</span>
                                    </div>
                                    <div className="flex justify-between border-b border-green-100 pb-2">
                                        <span>Week 2-3 (Veg)</span>
                                        <span className="font-medium">800 PPM / 1.6 EC</span>
                                    </div>
                                    <div className="flex justify-between border-b border-green-100 pb-2">
                                        <span>Week 4+ (Flower)</span>
                                        <span className="font-medium">1000 PPM / 2.0 EC</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8 flex justify-between">
                <button
                    onClick={handleBack}
                    disabled={step === 1}
                    className={`btn btn-outline px-8 ${step === 1 ? "opacity-0 pointer-events-none" : ""}`}
                >
                    Back
                </button>

                {step < 4 ? (
                    <button
                        onClick={handleNext}
                        disabled={
                            (step === 1 && !formData.systemType) ||
                            (step === 2 && !formData.plantType) ||
                            (step === 3 && (!formData.space || !formData.light))
                        }
                        className="btn btn-primary px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                ) : (
                    <Link href="/dashboard" className="btn btn-primary px-8">
                        Save to Dashboard
                    </Link>
                )}
            </div>
        </div>
    );
}
