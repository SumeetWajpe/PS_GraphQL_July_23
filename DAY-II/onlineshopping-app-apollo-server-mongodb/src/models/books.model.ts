import mongoose, { Schema } from "mongoose";

const BookSchema = new Schema({
  id: Number,
  title: String,
  authorId: Number,
  epub: Boolean,
  publication:String
});

export let BookModel = mongoose.model("authors", BookSchema);
