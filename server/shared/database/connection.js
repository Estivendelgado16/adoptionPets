import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/petadoption';

async function connectDB() {
    try {
        await mongoose.connect(uri)
        console.log('mongoDB connect')
    } catch (error) {
        console.error('Error to connect mongo', error)
        process.exit(1)
    }
}

export default connectDB;