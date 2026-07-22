import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "RESEND_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const data = await req.json();

    const { data: emailData, error } = await resend.emails.send({
      from: "TML Contractor <noreply@astiamflau.resend.app>",
      to: ["tevin@hartandcrowncoatings.com"],
      replyTo: data.email,
      subject: `New Estimate Request - ${data.service}`,
      html: `
        <h2>New Estimate Request</h2>

        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Preferred Contact:</strong> ${data.contactMethod}</p>

        <hr />

        <p>${data.message}</p>
      `,
    });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, emailData });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server Error" }, { status: 500 });
  }
}