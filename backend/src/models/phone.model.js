import { Schema, model } from "mongoose";

export const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    memory: { type: String, required: true },
    price: { type: Number, required: true },
    favorite: { type: Boolean, default: false },
    img: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: [String] },
    colour: { type: [String], required: true },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export const ProductModel = model("phone", ProductSchema);
