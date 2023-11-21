import mongoose, { model, models, Schema } from "mongoose";

const CustomerSchema = new Schema({
    title: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    brand: String,
    category: String,
    description: String,
    images: [String],
    stock: Number,
    thumbnail: String,
    id: Number,
    qty: Number,
});

const CustomerC = models.CustomerC || new model( "CustomerC" ,CustomerSchema );
export default CustomerC;