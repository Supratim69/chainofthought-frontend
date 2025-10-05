// src/app/api/user.ts
// API utility for user endpoints

export async function createOrUpdateUser(displayName: string, userId?: string) {
    const res = await fetch(
        `${
            process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"
        }/api/user`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ displayName, userId }),
        }
    );
    if (!res.ok) {
        throw new Error("Failed to create or update user");
    }
    return res.json();
}

export async function getCurrentUser() {
    const res = await fetch(
        `${
            process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"
        }/api/user`,
        {
            method: "GET",
            credentials: "include",
        }
    );
    if (!res.ok) {
        return null;
    }
    return res.json();
}
