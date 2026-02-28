import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

    if (!SENDGRID_API_KEY) {
      console.error("SENDGRID_API_KEY not configured");
      return NextResponse.json(
        { error: "Subscription service temporarily unavailable." },
        { status: 500 }
      );
    }

    // Add contact to SendGrid
    const sgResponse = await fetch("https://api.sendgrid.com/v3/marketing/contacts", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contacts: [
          {
            email: email.toLowerCase().trim(),
            custom_fields: {
              newsletter: "freightsignal",
            },
          },
        ],
      }),
    });

    if (!sgResponse.ok) {
      const errorData = await sgResponse.json();
      console.error("SendGrid error:", errorData);
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    // Send welcome email
    await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: email.toLowerCase().trim() }] }],
        from: {
          email: "hello@freightsignal.io",
          name: "FreightSignal",
        },
        subject: "Welcome to FreightSignal — Your Freight Intelligence",
        content: [
          {
            type: "text/html",
            value: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background-color: #0d1b2a; padding: 30px; border-radius: 8px;">
                  <h1 style="color: #e87c3e; margin: 0 0 20px;">Welcome to FreightSignal</h1>
                  <p style="color: #ffffff; line-height: 1.6;">
                    You're now subscribed to the free weekly edition of FreightSignal — freight and supply chain intelligence delivered every Wednesday.
                  </p>
                  <p style="color: #cccccc; line-height: 1.6;">
                    Every issue includes:<br/>
                    • Rate Alert of the Week — the one rate movement that signals market direction<br/>
                    • Spot Rate Movements — key lane changes with carrier capacity analysis<br/>
                    • Supply Chain Intel — port congestion, rail alerts, weather impacts<br/>
                    • Regulatory Watch — ELD, emissions, and Hours of Service updates<br/>
                    • Fuel & Cost Drivers — diesel prices and driver wage inflation
                  </p>
                  <p style="color: #ffffff; line-height: 1.6;">
                    Your first issue arrives this Wednesday. In the meantime, <a href="https://freightsignal.io/archive/sample" style="color: #e87c3e;">read our sample issue</a>.
                  </p>
                  <p style="color: #999999; font-size: 12px; margin-top: 30px;">
                    FreightSignal is a SignalStack Media newsletter.<br/>
                    181 Bay Street, Suite 1400, Toronto ON M5J 2T3<br/>
                    <a href="https://freightsignal.io/unsubscribe" style="color: #e87c3e;">Unsubscribe</a>
                  </p>
                </div>
              </div>
            `,
          },
        ],
      }),
    });

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to FreightSignal!",
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}