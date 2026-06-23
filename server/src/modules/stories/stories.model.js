import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    petName: String,
    title: String,
    quote: String,
    image: String,
    author: String,
    location: String,
    badge: String,
    accentColor: String,
    authorAvatar: String,
});

storySchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

export default mongoose.model('Story', storySchema)