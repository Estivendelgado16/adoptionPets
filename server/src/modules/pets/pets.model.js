import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: String,
    species: String,
    age: String,
    size: String,
    sex: String,
    image: String,
    shelterPhone: String,
    tags: [String],
    status: {
        label: String,
        variant: String,
    },
});

petSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

export default mongoose.model('Pet', petSchema)