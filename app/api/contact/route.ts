console.log(process.env.RESEND_API_KEY);
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
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
      console.error("Resend error:", error);
      return Response.json({ error }, { status: 500 });
    }

    console.log("Email sent:", emailData);

    return Response.json({ success: true, emailData });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server Error" }, { status: 500 });
  }
}