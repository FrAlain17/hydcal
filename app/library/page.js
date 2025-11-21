"use client";

import { useState } from "react";
import { Search, Droplets, Sun, Thermometer } from "lucide-react";
import Link from "next/link";

const PLANTS = [
    {
        id: "lettuce",
        name: "Lettuce (Butterhead)",
        type: "Leafy Green",
        ph: "5.5 - 6.5",
        ec: "0.8 - 1.2",
        temp: "60-70°F",
        image: "🥬",
        difficulty: "Easy"
    },
    {
        id: "basil",
        name: "Basil (Genovese)",
        type: "Herb",
        ph: "5.5 - 6.5",
        ec: "1.0 - 1.6",
        temp: "65-85°F",
        image: "🌿",
        difficulty: "Easy"
    },
    {
        id: "tomato",
        name: "Tomato (Cherry)",
        type: "Fruiting",
        ph: "5.5 - 6.5",
        ec: "2.0 - 5.0",
        temp: "70-85°F",
        image: "🍅",
        difficulty: "Medium"
    },
    {
        id: "strawberry",
        name: "Strawberry",
        type: "Fruiting",
        ph: "5.5 - 6.5",
        ec: "1.0 - 1.4",
        temp: "60-80°F",
        image: "🍓",
        difficulty: "Hard"
    },
    {
        id: "spinach",
        name: "Spinach",
        type: "Leafy Green",
        ph: "5.5 - 6.5",
        ec: "1.0 - 1.6",
        temp: "45-75°F",
        image: "🍃",
        difficulty: "Medium"
    },
    {
        id: "pepper",
        name: "Bell Pepper",
        type: "Fruiting",
        ph: "5.5 - 6.5",
        ec: "2.0 - 3.0",
        temp: "70-85°F",
        image: "🫑",
        difficulty: "Medium"
    }
];

export default function LibraryPage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredPlants = PLANTS.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "All" || p.type === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="container py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-4">Plant Library</h1>
                <p className="text-muted-foreground">Detailed growing guides for over 200+ hydroponic crops.</p>
            </div>

            {/* Search & Filter */}
            <div className="max-w-2xl mx-auto mb-12 space-y-4">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search plants..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                </div>
                <div className="flex justify-center gap-2">
                    {["All", "Leafy Green", "Herb", "Fruiting"].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === f
                                    ? "bg-primary text-white"
                                    : "bg-secondary text-muted-foreground hover:bg-green-100"
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-3 gap-6">
                {filteredPlants.map(plant => (
                    <Link key={plant.id} href={`/library/${plant.id}`} className="card group hover:-translate-y-1 block">
                        <div className="flex justify-between items-start mb-4">
                            <div className="text-4xl">{plant.image}</div>
                            <span className={`px-2 py-1 rounded text-xs font-bold ${plant.difficulty === "Easy" ? "bg-green-100 text-green-700" :
                                    plant.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" :
                                        "bg-red-100 text-red-700"
                                }`}>
                                {plant.difficulty}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{plant.name}</h3>
                        <div className="text-sm text-muted-foreground mb-4">{plant.type}</div>

                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-secondary p-2 rounded flex items-center gap-2">
                                <Droplets className="w-4 h-4 text-blue-500" />
                                <span>pH {plant.ph}</span>
                            </div>
                            <div className="bg-secondary p-2 rounded flex items-center gap-2">
                                <Sun className="w-4 h-4 text-orange-500" />
                                <span>EC {plant.ec}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
