import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const required = ['name', 'phone', 'email', 'type', 'service', 'message'];
    if (required.some((key) => !String(data?.[key] ?? '').trim())) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }
    if (String(data?.website ?? '').trim()) {
      return NextResponse.json({ ok: true });
    }

    const key = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO || 'tevin@tmlcontractors.com';
    const from = process.env.CONTACT_FROM;
    if (!key || !from) {
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 });
    }

    const resend = new Resend(key);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: String(data.email),
      subject: `New TML estimate request — ${String(data.type)}`,
      text: [
        `Name: ${data.name}`,
        `Phone: ${data.phone}`,
        `Email: ${data.email}`,
        `Project Type: ${data.type}`,
        `Service: ${data.service}`,
        `Timeline: ${data.timeline || 'Not specified'}`,
        `Property Address: ${data.address || 'Not provided'}`,
        `Preferred Contact: ${data.contact || 'Not specified'}`,
        '',
        'Project Description:',
        String(data.message),
      ].join('\n'),
    });

    if (result.error) {
      return NextResponse.json({ error: 'Unable to send your request.' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unable to send your request.' }, { status: 500 });
  }
}
