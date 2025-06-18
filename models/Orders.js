import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true, ref: "user" },
  items: [
    {
      product: { type: String, required: true, ref: "product" },
    },
  ],
  amount: { type: Number, required: true },
  address: { type: String, ref: "address", required: true },
  status: { type: String, required: true, default: "order placed" },
  date: { type: Number, required: true },
});

const Order = mongoose.models.order || mongoose.model("order", orderSchema);

export default Order;
