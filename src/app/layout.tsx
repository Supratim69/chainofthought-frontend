import type React from "react";
import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";

const patrickHand = Patrick_Hand({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-patrick-hand",
});

export const metadata: Metadata = {
    title: "Chain Of Thought - Doodle Notebook",
    description:
        "A playful multiplayer game that feels like a creative digital whiteboard",
    generator: "v0.app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`font-sans ${patrickHand.variable} ${GeistMono.variable}`}
            >
                <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
                <Analytics />
            </body>
        </html>
    );
}
