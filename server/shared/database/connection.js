import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.URI;

async function connectDB() {
    try {
        await mongoose.connect(uri);
        mongoose.connection.on('connected', () => console.log('Mongo connect'));
        mongoose.connection.on('error', (err) => console.log('Mongo error', err));
        mongoose.connection.on('disconnected', () => console.log('Mongo disconnected'));

        console.log('mongoDB connect');
    } catch (error) {
        console.error('Error to connect mongo', error)
        process.exit(1)
    }
};

export default connectDB;