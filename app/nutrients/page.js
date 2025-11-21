"use client";

import { useState } from "react";
import { Droplets, FlaskConical, RefreshCw, Info } from "lucide-react";

export default function NutrientsPage() {
    const [volume, setVolume] = useState(10);
    const [unit, setUnit] = useState("gallons");
    const [stage, setStage] = useState("veg");

    const stages = {
        seedling: { ec: "0.8", ppm: "400", ph: "5.8", a: 2, b: 2, micro: 2 },
        veg: { ec: "1.6", ppm: "800", ph: "6.0", a: 10, b: 10, micro: 8 },
        flower: { ec: "2.0", ppm: "1000", ph: "6.2", a: 12, b: 12, micro: 10 },
    };

    const current = stages[stage];
    const multiplier = unit === "gallons" ? 1 : 0.264; // rough conversion for display logic if needed, but usually dosing is per unit. Let's assume dosing is ml per gallon.

    // If unit is liters, we adjust dosing display. 
    // Standard: ml/gal. 
    // 1 gal = 3.78L. 
    // So if user selects Liters, we should probably show ml/Liter.
    // Let's keep it simple: Dosing is shown in Total ML needed for the reservoir.

    const totalDose = (baseMlPerGal) => {
        const volInGal = unit === "gallons" ? volume : volume * 0.264;
        return Math.round(baseMlPerGal * volInGal);
    };

    return (
        <div className="container py-12 max-w-4xl">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-4">Nutrient Calculator</h1>
                <p className="text-muted-foreground">Calculate exact nutrient doses for your system size and growth stage.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Controls */}
                <div className="md:col-span-1 space-y-6">
                    <div className="card">
                        <label className="block text-sm font-bold mb-3">Reservoir Volume</label>
                        <div className="flex gap-2 mb-4">
                            <input
                                type="number"
                                value={volume}
                                onChange={(e) => setVolume(Number(e.target.value))}
                                className="w-full p-2 border rounded-md"
                            />
                            <select
                                value={unit}
                                onChange={(e) => setUnit(e.target.value)}
                                className="p-2 border rounded-md bg-white"
                            >
                                <option value="gallons">Gal</option>
                                <option value="liters">L</option>
                            </select>
                        </div>

                        <label className="block text-sm font-bold mb-3">Growth Stage</label>
                        <div className="space-y-2">
                            {[
                                { id: "seedling", label: "Seedling / Clone" },
                                { id: "veg", label: "Vegetative" },
                                { id: "flower", label: "Flowering / Bloom" }
                            ].map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => setStage(s.id)}
                                    className={`w-full text-left p-3 rounded-lg border transition-all ${stage === s.id
                                            ? "border-primary bg-green-50 text-primary-dark font-medium"
                                            : "border-border hover:bg-secondary"
                                        }`}
                                >
                                    {s.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800">
                        <div className="flex items-center gap-2 font-bold mb-1">
                            <Info className="w-4 h-4" /> Pro Tip
                        </div>
                        Always add Micro first, then stir, then Grow, then Bloom to prevent nutrient lockout.
                    </div>
                </div>

                {/* Results */}
                <div className="md:col-span-2 space-y-6">
                    {/* Targets */}
                    <div className="grid grid-3 gap-4">
                        <div className="card text-center py-6">
                            <div className="text-muted-foreground text-xs uppercase font-bold tracking-wider mb-1">Target EC</div>
                            <div className="text-3xl font-bold text-primary-dark">{current.ec}</div>
                            <div className="text-xs text-muted-foreground">mS/cm</div>
                        </div>
                        <div className="card text-center py-6">
                            <div className="text-muted-foreground text-xs uppercase font-bold tracking-wider mb-1">Target PPM</div>
                            <div className="text-3xl font-bold text-primary-dark">{current.ppm}</div>
                            <div className="text-xs text-muted-foreground">500 scale</div>
                        </div>
                        <div className="card text-center py-6">
                            <div className="text-muted-foreground text-xs uppercase font-bold tracking-wider mb-1">Target pH</div>
                            <div className="text-3xl font-bold text-blue-600">{current.ph}</div>
                            <div className="text-xs text-muted-foreground">Range: ±0.2</div>
                        </div>
                    </div>

                    {/* Dosing Table */}
                    <div className="card">
                        <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                            <FlaskConical className="w-5 h-5 text-primary" /> Required Nutrients
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-10 bg-purple-500 rounded-full"></div>
                                    <div>
                                        <div className="font-bold">FloraMicro</div>
                                        <div className="text-xs text-muted-foreground">5-0-1</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold">{totalDose(current.micro)} ml</div>
                                    <div className="text-xs text-muted-foreground">{current.micro} ml/gal</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-10 bg-green-500 rounded-full"></div>
                                    <div>
                                        <div className="font-bold">FloraGro</div>
                                        <div className="text-xs text-muted-foreground">2-1-6</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold">{totalDose(current.a)} ml</div>
                                    <div className="text-xs text-muted-foreground">{current.a} ml/gal</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-10 bg-pink-500 rounded-full"></div>
                                    <div>
                                        <div className="font-bold">FloraBloom</div>
                                        <div className="text-xs text-muted-foreground">0-5-4</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold">{totalDose(current.b)} ml</div>
                                    <div className="text-xs text-muted-foreground">{current.b} ml/gal</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-outline w-full gap-2">
                        <RefreshCw className="w-4 h-4" /> Reset Calculator
                    </button>
                </div>
            </div>
        </div>
    );
}
