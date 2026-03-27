import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields: name, email, and message" },
                { status: 400 }
            );
        }

        const messageId = `GM-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

        // 1. Send Auto-Response to Customer
        // We call our own email API for this
        const protocol = req.nextUrl.protocol;
        const host = req.nextUrl.host;
        const baseUrl = `${protocol}//${host}`;

        try {
            await fetch(`${baseUrl}/api/email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    name: name,
                    type: "support_confirmation",
                    messageId: messageId
                })
            });

            // 2. Send Notification to Admin
            await fetch(`${baseUrl}/api/email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: "admin@greenmarket.com.ng", // Placeholder admin email
                    name: "Admin",
                    type: "contact_notification",
                    userEmail: email,
                    name: name,
                    subject: subject,
                    userMessage: message
                })
            });
        } catch (emailErr) {
            console.error("Failed to trigger email notification:", emailErr);
            // We still proceed since the message was "received" (logged)
        }

        // In a real app, we'd also save this to a 'contacts' table in Supabase
        console.log(`Support Message received [${messageId}]:`, body);

        return NextResponse.json({
            success: true,
            messageId,
            message: "Support inquiry received successfully."
        });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
