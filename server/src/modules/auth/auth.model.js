import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    id: { type: Number, unique: true},
    username: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type:  String,
        required: true
    }
});

UserSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
        // We keep the numeric 'id' field we added to the schema
        // ret.id = ret.id; // This line is actually not needed if 'id' is in the schema and not overwritten
        return ret;
    }
});

export default mongoose.model('User', UserSchema);