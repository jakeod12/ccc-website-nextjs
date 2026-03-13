import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { readFile, writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const LEADS_FILE = path.join(process.cwd(), "..", "bd-tool", "website-leads.json");

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  role: string;
  message: string;
  source_page: string;
  timestamp: string;
  status: string;
}

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

    const lead: Lead = {
      id: randomUUID(),
      name: name.trim(),
      email: email.trim(),
      company: (company || "").trim(),
      phone: (phone || "").trim(),
      role: (role || "").trim(),
      message: message.trim(),
      source_page: source_page || request.headers.get("referer") || "contact",
      timestamp: new Date().toISOString(),
      status: "new",
    };

    // Ensure directory exists
    const dir = path.dirname(LEADS_FILE);
    if (!existsSync(dir)) {
      await mkdir(dir, { recursive: true });
    }

    // Read existing leads or start with empty array
    let leads: Lead[] = [];
    try {
      const data = await readFile(LEADS_FILE, "utf-8");
      leads = JSON.parse(data);
      if (!Array.isArray(leads)) leads = [];
    } catch {
      // File doesn't exist or is invalid — start fresh
      leads = [];
    }

    leads.push(lead);
    await writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");

    return NextResponse.json({ success: true, id: lead.id }, { status: 200 });
  } catch (error) {
    console.error("Leads API error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
