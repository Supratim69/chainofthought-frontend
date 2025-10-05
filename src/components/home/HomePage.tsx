import { useState, useEffect } from "react";
import { createOrUpdateUser } from "@/app/api/user";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Link2, Lightbulb, Star, Heart, Sparkles } from "lucide-react";
import { getCookie, setCookie } from "@/lib/utils";

export default function HomePage() {
    const [playerName, setPlayerName] = useState("");
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const nameFromCookie = getCookie("playerName");
        if (nameFromCookie) {
            setPlayerName(nameFromCookie);
        }
    }, []);
    const handleGameMode = async (mode: "chain" | "guesser") => {
        if (!playerName.trim()) {
            alert("Please enter your name!");
            return;
        }
        setLoading(true);
        try {
            const user = await createOrUpdateUser(playerName);
            setCookie("playerName", user.user.displayName);
            if (mode === "chain") {
                router.push("/prompt-chain");
            } else {
                router.push("/prompt-guesser");
            }
        } catch (e) {
            console.error("Failed to save user:", e);
            alert("Failed to save user. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center p-4 bg-background relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Colorful doodle shapes */}
                <div className="absolute top-10 left-10 w-16 h-16 border-4 border-primary rounded-full animate-wobble" />
                <div
                    className="absolute top-20 right-20 w-12 h-12 border-4 border-secondary rotate-45 animate-float-doodle"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="absolute bottom-20 left-20 w-20 h-20 border-4 border-accent rounded-full animate-bounce-doodle"
                    style={{ animationDelay: "0.5s" }}
                />
                <div
                    className="absolute bottom-32 right-32 w-14 h-14 border-4 border-[oklch(0.7_0.18_40)] rotate-12 animate-wobble"
                    style={{ animationDelay: "2s" }}
                />
                <div
                    className="absolute top-1/3 left-1/4 w-10 h-10 border-4 border-[oklch(0.65_0.18_140)] rounded-full animate-float-doodle"
                    style={{ animationDelay: "1.5s" }}
                />

                {/* Squiggly lines and arrows */}
                <svg
                    className="absolute top-1/4 right-1/3 w-32 h-32 text-primary/40 animate-wobble"
                    viewBox="0 0 100 100"
                >
                    <path
                        d="M10,50 Q30,20 50,50 T90,50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>
                <svg
                    className="absolute bottom-1/4 left-1/3 w-24 h-24 text-secondary/40 animate-float-doodle"
                    viewBox="0 0 100 100"
                    style={{ animationDelay: "0.8s" }}
                >
                    <path
                        d="M20,80 L80,20 M70,15 L80,20 L75,30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                    />
                </svg>

                {/* Small stars and hearts */}
                <Star
                    className="absolute top-1/2 right-1/4 w-8 h-8 text-accent fill-accent/50 animate-bounce-doodle"
                    style={{ animationDelay: "0.3s" }}
                />
                <Heart
                    className="absolute bottom-1/3 right-1/2 w-6 h-6 text-secondary fill-secondary/50 animate-wobble"
                    style={{ animationDelay: "1.2s" }}
                />
                <Sparkles
                    className="absolute top-2/3 left-1/2 w-7 h-7 text-[oklch(0.7_0.18_40)] animate-float-doodle"
                    style={{ animationDelay: "0.6s" }}
                />
            </div>

            <div className="relative w-full max-w-2xl z-10">
                <div className="bg-card border-4 border-foreground/80 rounded-3xl p-8 md:p-12 sketchy-shadow relative">
                    {/* Corner fold effect */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-accent/30 border-l-4 border-b-4 border-foreground/80 rounded-bl-3xl" />

                    <div className="space-y-8">
                        {/* Header */}
                        <div className="text-center space-y-6">
                            {/* Doodle icon */}
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div className="w-20 h-20 bg-primary border-4 border-foreground rounded-full flex items-center justify-center animate-wobble">
                                        <Pencil className="w-10 h-10 text-primary-foreground" />
                                    </div>
                                    <Star className="absolute -top-2 -right-2 w-8 h-8 text-accent fill-accent" />
                                    <Heart className="absolute -bottom-1 -left-1 w-6 h-6 text-secondary fill-secondary" />
                                </div>
                            </div>

                            {/* Title with hand-drawn feel */}
                            <div className="space-y-3">
                                <div className="text-primary text-lg font-bold">
                                    Welcome to
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance text-foreground">
                                    Chain of Thought
                                </h1>
                                <p className="text-muted-foreground text-xl max-w-md mx-auto leading-relaxed text-pretty">
                                    A creative multiplayer game where ideas
                                    connect!
                                </p>
                            </div>
                        </div>

                        {/* Name input with doodle style */}
                        <div className="space-y-3">
                            <label
                                htmlFor="playerName"
                                className="text-xl font-bold text-foreground flex items-center gap-2"
                            >
                                <span>Your Name</span>
                                <svg
                                    className="w-12 h-4 text-primary"
                                    viewBox="0 0 50 10"
                                >
                                    <path
                                        d="M5,5 Q15,2 25,5 T45,5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </label>
                            <Input
                                id="playerName"
                                type="text"
                                placeholder="Enter your name..."
                                value={playerName}
                                onChange={(e) => setPlayerName(e.target.value)}
                                className="h-14 text-xl px-6 bg-background border-4 border-foreground/80 focus:border-primary transition-all rounded-2xl font-bold"
                                maxLength={20}
                                disabled={loading}
                                onKeyDown={async (e) => {
                                    if (
                                        e.key === "Enter" &&
                                        playerName.trim()
                                    ) {
                                        await handleGameMode("chain");
                                    }
                                }}
                            />
                        </div>

                        {/* Game mode buttons with colorful doodle borders */}
                        <div className="space-y-4 pt-4">
                            <Button
                                size="lg"
                                onClick={() => handleGameMode("chain")}
                                className="w-full h-16 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground border-4 border-foreground/80 rounded-2xl sketchy-shadow hover:translate-x-1 hover:translate-y-1 transition-all active:translate-x-0 active:translate-y-0 doodle-glow-blue"
                                disabled={loading}
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <Link2 className="w-6 h-6" />
                                    <span>Prompt Chain</span>
                                    <svg
                                        className="w-8 h-8"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
                                    </svg>
                                </div>
                            </Button>

                            <Button
                                size="lg"
                                onClick={() => handleGameMode("guesser")}
                                className="w-full h-16 text-xl font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground border-4 border-foreground/80 rounded-2xl sketchy-shadow hover:translate-x-1 hover:translate-y-1 transition-all active:translate-x-0 active:translate-y-0 doodle-glow-pink"
                                disabled={loading}
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <Lightbulb className="w-6 h-6" />
                                    <span>Prompt Guesser</span>
                                    <Heart className="w-6 h-6 fill-current" />
                                </div>
                            </Button>
                        </div>

                        {/* Footer with doodle decoration */}
                        <div className="text-center pt-6 border-t-4 border-dashed border-border">
                            <div className="flex items-center justify-center gap-3 text-lg text-muted-foreground">
                                <svg
                                    className="w-6 h-6 text-primary"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <circle cx="12" cy="12" r="8" />
                                </svg>
                                <span>Pick your game mode!</span>
                                <svg
                                    className="w-6 h-6 text-secondary"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <circle cx="12" cy="12" r="8" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
