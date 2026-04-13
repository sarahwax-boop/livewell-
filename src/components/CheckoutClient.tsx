const createOrder = async () => {
  try {
    const res = await fetch("/api/paypal/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // We use 'items' here because that is what is defined in your component
        items: items.map((item: any) => ({
          id: item.id, // Matches the ID in your route.ts database
          qty: item.quantity || 1,
        })),
      }),
    });

    const order = await res.json();

    if (!order.id) {
      console.error("PayPal Error:", order);
      throw new Error(order.error || "Failed to create order");
    }

    return order.id;
  } catch (err) {
    console.error("Checkout Error:", err);
  }
};
