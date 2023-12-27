import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const orderSchema = new mongoose.Schema(
  {
    oderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItemes: {
      type: [orderItemSchema],
    },
    address: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING"
    }
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
