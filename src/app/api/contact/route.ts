import { NextRequest, NextResponse } from 'next/server';

const MATON_API_KEY = process.env.MATON_API_KEY || '';
const SENDER_EMAIL = 'fusionwebsitescorps@gmail.com';
const OWNER_EMAIL = 'andyzhang@hanovernorwichschools.org';

function createMimeBase64(to: string, from: string, replyTo: string, subject: string, body: string) {
  const mime = `From: ${from}\r\nTo: ${to}\r\nReply-To: ${replyTo}\r\nSubject: ${subject}\r\nMIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\n${body}`;
  return Buffer.from(mime).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { firstName, lastName, phone, vehicle, service, details } = data;

    if (!firstName || !lastName || !phone || !vehicle || !service) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const raw = createMimeBase64(
      OWNER_EMAIL,
      `O. G. Auto Website <${SENDER_EMAIL}>`,
      SENDER_EMAIL,
      `New Service Request from ${firstName} ${lastName}`,
      `New service booking request!\n\nName: ${firstName} ${lastName}\nPhone: ${phone}\nVehicle: ${vehicle}\nService: ${service}\nDetails: ${details || 'None'}\n\nReceived: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}`
    );

    const res = await fetch('https://gateway.maton.ai/google-mail/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MATON_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ raw }),
    });

    if (!res.ok) {
      console.error('Maton API error:', res.status, await res.text());
      return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
