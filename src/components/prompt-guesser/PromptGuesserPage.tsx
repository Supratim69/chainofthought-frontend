"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb, Star, Heart, Sparkles } from "lucide-react";

export default function PromptGuesserPage() {
    const [playerName, setPlayerName] = useState("");
    const router = useRouter();

    useEffect(() => {
        const name = localStorage.getItem("playerName");
        if (name) {
            setPlayerName(name);
        }
    }, []);

    return (
        <main className="min-h-screen p-4 md:p-8 bg-background relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-20 h-20 border-4 border-secondary rounded-full animate-wobble" />
                <div
                    className="absolute bottom-20 right-10 w-16 h-16 border-4 border-[oklch(0.7_0.18_40)] rotate-45 animate-float-doodle"
                    style={{ animationDelay: "1s" }}
                />
                <svg
                    className="absolute top-1/3 left-1/4 w-32 h-32 text-secondary/30 animate-wobble"
                    viewBox="0 0 100 100"
                    style={{ animationDelay: "0.5s" }}
                >
                    <path
                        d="M20,80 L80,20 M70,15 L80,20 L75,30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                    />
                </svg>
                <Heart
                    className="absolute bottom-1/3 left-1/3 w-10 h-10 text-secondary fill-secondary/50 animate-bounce-doodle"
                    style={{ animationDelay: "0.3s" }}
                />
                <Star
                    className="absolute top-1/2 right-1/4 w-8 h-8 text-accent fill-accent/50 animate-wobble"
                    style={{ animationDelay: "1.2s" }}
                />
            </div>

            <div className="relative max-w-6xl mx-auto space-y-6 z-10">
                {/* Header */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <Button
                        variant="outline"
                        onClick={() => router.push("/")}
                        className="gap-2 border-4 border-foreground/80 bg-card text-foreground hover:bg-secondary hover:text-secondary-foreground font-bold rounded-2xl transition-all hover:translate-x-1 hover:translate-y-1 sketchy-shadow text-lg h-12 px-6"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back</span>
                    </Button>
                    {playerName && (
                        <div className="text-lg font-bold bg-card px-6 py-3 border-4 border-secondary rounded-2xl sketchy-shadow doodle-glow-pink">
                            <span className="text-secondary">Player:</span>{" "}
                            <span className="text-foreground ml-2">
                                {playerName}
                            </span>
                        </div>
                    )}
                </div>

                {/* Main content */}
                <div className="bg-card border-4 border-foreground/80 rounded-3xl p-8 md:p-12 sketchy-shadow relative">
                    {/* Corner fold */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/20 border-l-4 border-b-4 border-foreground/80 rounded-bl-3xl" />

                    <div className="space-y-8">
                        {/* Title section */}
                        <div className="text-center space-y-6">
                            {/* Icon */}
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div className="w-24 h-24 bg-secondary border-4 border-foreground rounded-full flex items-center justify-center animate-wobble">
                                        <Lightbulb className="w-12 h-12 text-secondary-foreground" />
                                    </div>
                                    <Heart className="absolute -top-2 -right-2 w-10 h-10 text-secondary fill-secondary" />
                                    <Sparkles className="absolute -bottom-2 -left-2 w-8 h-8 text-accent" />
                                </div>
                            </div>

                            {/* Title */}
                            <div className="space-y-4">
                                <div className="text-secondary text-xl font-bold">
                                    Game Mode
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance text-foreground">
                                    Prompt Guesser
                                </h1>
                                <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed text-pretty">
                                    Guess the prompts and test your deduction
                                    skills!
                                </p>
                            </div>
                        </div>

                        {/* Placeholder content */}
                        <div className="mt-12 p-12 bg-accent/20 border-4 border-dashed border-foreground/50 rounded-3xl">
                            <div className="text-center space-y-6">
                                <div className="flex justify-center gap-4">
                                    <div className="w-4 h-4 bg-secondary rounded-full animate-bounce-doodle" />
                                    <div
                                        className="w-4 h-4 bg-accent rounded-full animate-bounce-doodle"
                                        style={{ animationDelay: "0.2s" }}
                                    />
                                    <div
                                        className="w-4 h-4 bg-primary rounded-full animate-bounce-doodle"
                                        style={{ animationDelay: "0.4s" }}
                                    />
                                </div>
                                <p className="text-2xl font-bold text-secondary">
                                    Loading Game...
                                </p>
                                <p className="text-lg text-muted-foreground">
                                    Gameplay coming soon
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
