import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const required = ['company','contactName','phone','email','trade','projectType','serviceArea','services','insurance','workersComp','w9'];
    if (required.some((key) => !String(data?.[key] ?? '').trim()) || String(data?.certify ?? '') !== 'yes') {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }
    if (String(data?.websiteTrap ?? '').trim()) return NextResponse.json({ ok: true });

    const key = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO || 'tevin@tmlcontractors.com';
    const from = process.env.CONTACT_FROM;
    if (!key || !from) return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 });

    const resend = new Resend(key);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: String(data.email),
      subject: `New TML subcontractor application — ${String(data.company)}`,
      text: [
        `Company: ${data.company}`,
        `Primary Contact: ${data.contactName}`,
        `Phone: ${data.phone}`,
        `Email: ${data.email}`,
        `Website: ${data.website || 'Not provided'}`,
        `Years in Business: ${data.years || 'Not provided'}`,
        `Primary Trade: ${data.trade}`,
        `Project Type: ${data.projectType}`,
        `Service Area: ${data.serviceArea}`,
        `Crew Size: ${data.crewSize || 'Not provided'}`,
        `Insurance: ${data.insurance}`,
        `Workers' Compensation: ${data.workersComp}`,
        `W-9: ${data.w9}`,
        `Bonding: ${data.bonding || 'Not provided'}`,
        `References Available: ${data.references || 'Not provided'}`,
        `Availability: ${data.availability || 'Not provided'}`,
        `Materials: ${data.materials || 'Not provided'}`,
        '',
        'Services / Scope:',
        String(data.services),
        '',
        'Equipment / Specialty Capabilities:',
        String(data.equipment || 'Not provided'),
        '',
        'Project References:',
        String(data.referencesInfo || 'Not provided'),
        '',
        'Additional Information:',
        String(data.additional || 'Not provided'),
      ].join('\n'),
    });
    if (result.error) return NextResponse.json({ error: 'Unable to send your application.' }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unable to submit application.' }, { status: 500 });
  }
}
