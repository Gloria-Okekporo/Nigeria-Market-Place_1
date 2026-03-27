import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, type } = body;

    if (!email || !type) {
      return NextResponse.json(
        { error: "Missing required fields: email and type" },
        { status: 400 }
      );
    }

    let subject = "";
    let htmlContent = "";

    const baseTemplate = (content: string) => `
      <div style="font-family: Arial, sans-serif; max-w: 600px; margin: 0 auto; color: #1e293b;">
        <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #13ec6d;">
          <h1 style="color: #13ec6d; margin: 0;">GreenMarket</h1>
          <p style="margin: 5px 0 0; color: #64748b; font-size: 14px;">Nigeria's Premier Fresh Produce Marketplace</p>
        </div>
        <div style="padding: 30px 20px;">
          ${content}
        </div>
        <div style="text-align: center; padding: 20px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
          <p>Need help? Contact our support team.</p>
          <p>© ${new Date().getFullYear()} GreenMarket. All rights reserved.</p>
        </div>
      </div>
    `;

    if (type === "checkout") {
      const { orderId, total } = body;
      subject = `Order Confirmation - ${orderId}`;
      htmlContent = baseTemplate(`
        <h2 style="margin-top: 0;">Hi ${name || 'Customer'},</h2>
        <p style="font-size: 16px; line-height: 1.5;">Thank you for shopping on GreenMarket! We've received your order and we're currently processing it. A seller will pack your fresh produce shortly.</p>
        
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 30px 0;">
          <h3 style="margin-top: 0; margin-bottom: 15px;">Order Summary</h3>
          <p style="margin: 5px 0;"><strong>Order ID:</strong> ${orderId}</p>
          <p style="margin: 5px 0;"><strong>Total Amount:</strong> ₦${total?.toLocaleString()}</p>
          <p style="margin: 5px 0;"><strong>Status:</strong> Processing</p>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5;">You can track your order status in your Buyer Dashboard.</p>
        
        <div style="text-align: center; margin-top: 40px;">
          <a href="#" style="background-color: #13ec6d; color: #020617; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; display: inline-block;">View Dashboard</a>
        </div>
      `);
    } else if (type === "seller_approval") {
      subject = "Welcome to GreenMarket Sellers!";
      htmlContent = baseTemplate(`
        <h2 style="margin-top: 0;">Congratulations ${name || 'Seller'},</h2>
        <p style="font-size: 16px; line-height: 1.5;">Your application to become a verified GreenMarket seller has been <strong>approved</strong>!</p>
        <p style="font-size: 16px; line-height: 1.5;">You can now start listing your farm produce, setting your prices, and reaching thousands of buyers across the country directly from your market stall or farm.</p>
        
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 30px 0;">
          <h3 style="margin-top: 0; margin-bottom: 15px;">Next Steps:</h3>
          <ul style="padding-left: 20px; margin: 0; line-height: 1.8;">
            <li>Log in to your Seller Dashboard.</li>
            <li>Setup your Store Profile and add a logo.</li>
            <li>Add your first 5 products to your inventory.</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin-top: 40px;">
          <a href="#" style="background-color: #13ec6d; color: #020617; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; display: inline-block;">Go to Seller Dashboard</a>
        </div>
      `);
    } else if (type === "welcome") {
      subject = "Welcome to GreenMarket!";
      htmlContent = baseTemplate(`
        <h2 style="margin-top: 0;">Hi ${name || 'there'},</h2>
        <p style="font-size: 16px; line-height: 1.5;">Welcome to GreenMarket! The freshest produce from Mile 12, Oyingbo, and other major markets is now at your fingertips.</p>
        <p style="font-size: 16px; line-height: 1.5;">We connect you directly with verified farmers and market vendors to ensure you get the best quality at the best prices, delivered right to your door.</p>
        
        <div style="text-align: center; margin-top: 40px;">
          <a href="#" style="background-color: #13ec6d; color: #020617; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; display: inline-block;">Start Shopping</a>
        </div>
      `);
    } else if (type === "support_confirmation") {
      const { messageId } = body;
      subject = `We've received your message - ${messageId || 'GreenMarket Support'}`;
      htmlContent = baseTemplate(`
        <h2 style="margin-top: 0;">Hi ${name || 'there'},</h2>
        <p style="font-size: 16px; line-height: 1.5;">Thank you for reaching out to GreenMarket! This is an automated response to let you know that we've received your inquiry.</p>
        <p style="font-size: 16px; line-height: 1.5;">Our support team is currently reviewing your message and will get back to you within 24 hours.</p>
        
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 30px 0;">
          <h3 style="margin-top: 0; margin-bottom: 10px;">Message Summary</h3>
          <p style="margin: 5px 0; font-size: 14px; color: #64748b;">A copy of your inquiry has been sent to our desk. Reference ID: <strong>${messageId || 'GM-' + Math.random().toString(36).substr(2, 9).toUpperCase()}</strong></p>
        </div>
        
        <p style="font-size: 14px; color: #64748b;">In the meantime, you might find answers to common questions in our <a href="#" style="color: #13ec6d; text-decoration: none;">Help Center</a>.</p>
      `);
    } else if (type === "contact_notification") {
      const { userEmail, userMessage, subject: userSubject } = body;
      subject = `New Support Inquiry: ${userSubject || 'General'}`;
      htmlContent = baseTemplate(`
        <h2 style="margin-top: 0;">New Support Request</h2>
        <p style="font-size: 16px; line-height: 1.5;">You have received a new message from the contact form:</p>
        
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 30px 0;">
          <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${userEmail}</p>
          <p style="margin: 5px 0;"><strong>Subject:</strong> ${userSubject || 'None'}</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 15px 0;" />
          <p style="margin: 5px 0;"><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${userMessage}</p>
        </div>
      `);
      return NextResponse.json({ error: "Invalid email type" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "GreenMarket <onboarding@resend.dev>",
      to: [email],
      subject,
      html: htmlContent,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
