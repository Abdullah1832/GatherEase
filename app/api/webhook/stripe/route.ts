import stripe from "stripe";
import { NextResponse } from "next/server";
import { createOrder } from "@/lib/actions/order.actions";

export async function POST(request: Request) {
  console.log("Stripe webhook received");
  const body = await request.text();

  const sig = request.headers.get("stripe-signature") as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({ message: "Webhook error", error: err });
  }

  // Get the ID and type
  const eventType = event.type;

  // CREATE
  if (eventType === "checkout.session.completed") {
    const { id, amount_total, metadata } = event.data.object;
    console.log("Processing checkout.session.completed", {
      id,
      amount_total,
      metadata,
    });

    const order = {
      stripeId: id,
      eventId: metadata?.eventId || "",
      buyerId: metadata?.buyerId || "",
      totalAmount: amount_total ? (amount_total / 100).toString() : "0",
      createdAt: new Date(),
    };

    console.log("Order data to be created:", order);

    try {
      const newOrder = await createOrder(order);
      console.log("Order created successfully:", newOrder);
      return NextResponse.json({ message: "OK", order: newOrder });
    } catch (error) {
      console.error("Error creating order:", error);
      return NextResponse.json(
        { message: "Order creation failed", error },
        { status: 500 }
      );
    }
  }

  return new Response("", { status: 200 });
}
