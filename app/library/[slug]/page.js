import Link from "next/link";
import { ArrowLeft, Droplets, Sun, Thermometer, Clock, AlertTriangle } from "lucide-react";

export default function PlantDetailPage({ params }) {
    // Mock data lookup based on slug
    const slug = params.slug;
    const name = slug.charAt(0).toUpperCase() + slug.slice(1);

    return (
        <div className="container py-12 max-w-4xl">
            <Link href="/library" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
                <ArrowLeft className="w-4 h-4" /> Back to Library
            </Link>

            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                    <h1 className="text-4xl font-bold mb-4">{name}</h1>
                    <div className="flex gap-4 mb-8">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">Easy to Grow</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">Hydroponic Favorite</span>
                    </div>

                    <div className="prose max-w-none text-muted-foreground">
                        <p className="mb-6">
                            {name} is one of the most popular crops for hydroponic growers. It grows fast, requires minimal maintenance, and thrives in water-based systems.
                        </p>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Ideal Conditions</h3>
                        <p className="mb-6">
                            Maintain a pH level between 5.5 and 6.5 for optimal nutrient uptake. {name} prefers a cooler environment, so keep water temperatures below 75°F to prevent root rot.
                        </p>

                        <h3 className="text-2xl font-bold text-foreground mb-4">Common Issues</h3>
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-start gap-2">
                                <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                <span><strong>Tip Burn:</strong> Caused by calcium deficiency or irregular watering. Increase airflow.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                <span><strong>Root Rot:</strong> Brown, slimy roots. Keep water oxygenated and cool.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="card bg-secondary/30 border-primary/20">
                        <h3 className="font-bold mb-4">Quick Stats</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Droplets className="w-4 h-4" /> pH Level
                                </div>
                                <div className="font-bold">5.5 - 6.5</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Sun className="w-4 h-4" /> EC Range
                                </div>
                                <div className="font-bold">0.8 - 1.2</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Thermometer className="w-4 h-4" /> Temp
                                </div>
                                <div className="font-bold">60 - 70°F</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Clock className="w-4 h-4" /> Harvest
                                </div>
                                <div className="font-bold">30 - 45 Days</div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-blue-50 border-blue-100">
                        <h3 className="font-bold mb-2 text-blue-900">Best System</h3>
                        <p className="text-sm text-blue-800 mb-4">
                            NFT (Nutrient Film Technique) or DWC (Deep Water Culture) are highly recommended for {name}.
                        </p>
                        <Link href="/builder" className="btn btn-primary w-full text-sm">
                            Build System for {name}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
