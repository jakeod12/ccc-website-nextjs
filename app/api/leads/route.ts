import { NextRequest, NextResponse } from "next/server";

const BD_TOOL_LEADS_URL = "https://bd-tool-nine.vercel.app/api/website-leads";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, role, message, source_page } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const lead = {
      name: name.trim(),
      email: email.trim(),
      company: (company || "").trim(),
      phone: (phone || "").trim(),
      role: (role || "").trim(),
      message: message.trim(),
      source_page: source_page || "contact",
      date: new Date().toISOString(),
      status: "new",
    };

    // Forward lead to BD Tool API
    const bdResponse = await fetch(BD_TOOL_LEADS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });

    if (!bdResponse.ok) {
      const err = await bdResponse.text();
      console.error("BD Tool leads API error:", err);
      return NextResponse.json(
        { error: "Failed to submit lead. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Leads API error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
