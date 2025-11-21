"use client";

import { useState } from "react";
import { Upload, Camera, AlertTriangle, CheckCircle, ArrowRight, Activity } from "lucide-react";

export default function DoctorPage() {
    const [status, setStatus] = useState("idle"); // idle, analyzing, result

    const handleUpload = () => {
        setStatus("analyzing");
        setTimeout(() => {
            setStatus("result");
        }, 2000);
    };

    return (
        <div className="container py-12 max-w-3xl">
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 mb-6">
                    <Activity className="w-8 h-8" />
                </div>
                <h1 className="text-3xl font-bold mb-4">AI Plant Doctor</h1>
                <p className="text-muted-foreground">Upload a photo of your plant to instantly diagnose issues.</p>
            </div>

            {status === "idle" && (
                <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-primary hover:bg-green-50/50 transition-all cursor-pointer group" onClick={handleUpload}>
                    <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Camera className="w-10 h-10 text-primary-dark" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Take a Photo or Upload</h3>
                    <p className="text-muted-foreground mb-8">Supports JPG, PNG (Max 10MB)</p>
                    <button className="btn btn-primary">
                        <Upload className="w-4 h-4" /> Select Photo
                    </button>
                </div>
            )}

            {status === "analyzing" && (
                <div className="bg-white border border-border rounded-2xl p-12 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-8">
                        <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Activity className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Analyzing Plant Health...</h3>
                    <p className="text-muted-foreground">Scanning for deficiencies, pests, and diseases.</p>
                </div>
            )}

            {status === "result" && (
                <div className="animate-fade-in space-y-8">
                    <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                        <div className="bg-red-50 border-b border-red-100 p-6 flex items-start gap-4">
                            <div className="p-3 bg-red-100 rounded-full text-red-600">
                                <AlertTriangle className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="text-xl font-bold text-red-900">Magnesium Deficiency Detected</h3>
                                    <span className="px-2 py-0.5 bg-red-200 text-red-800 text-xs font-bold rounded-full">98% Confidence</span>
                                </div>
                                <p className="text-red-700">The yellowing between leaf veins (interveinal chlorosis) is a classic sign.</p>
                            </div>
                        </div>

                        <div className="p-8">
                            <h4 className="font-bold text-lg mb-4">Treatment Plan</h4>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-primary-dark font-bold shrink-0">1</div>
                                    <div>
                                        <div className="font-bold mb-1">Check pH Levels</div>
                                        <p className="text-sm text-muted-foreground">Ensure pH is between 5.8 - 6.2. Magnesium absorption is locked out below 5.8.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-primary-dark font-bold shrink-0">2</div>
                                    <div>
                                        <div className="font-bold mb-1">Add Cal-Mag Supplement</div>
                                        <p className="text-sm text-muted-foreground">Add 5ml/gallon of Cal-Mag supplement to your reservoir.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-primary-dark font-bold shrink-0">3</div>
                                    <div>
                                        <div className="font-bold mb-1">Foliar Spray (Optional)</div>
                                        <p className="text-sm text-muted-foreground">Spray leaves with a mild Epsom salt solution (1 tsp/gallon) for quick relief.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t flex justify-between items-center">
                                <button onClick={() => setStatus("idle")} className="text-muted-foreground hover:text-foreground">
                                    Analyze Another Photo
                                </button>
                                <button className="btn btn-primary">
                                    Add Treatment to Calendar <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-center gap-4">
                        <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                            <CheckCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-bold text-blue-900">Prevention Tip</div>
                            <p className="text-sm text-blue-800">Maintain a balanced nutrient solution and avoid large pH fluctuations to prevent future lockouts.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
