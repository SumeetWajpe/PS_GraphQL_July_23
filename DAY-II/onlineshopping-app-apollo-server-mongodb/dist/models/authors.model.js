import mongoose, { Schema } from "mongoose";
const AuthorSchema = new Schema({
    id: Number,
    name: String,
    age: Number,
    noOfBooks: Number,
});
export let AuthorModel = mongoose.model("authors", AuthorSchema);
