import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// 1. Asegúrate de que el nombre coincida con tu archivo .env (ej: MONGO_URI o URI)
const uri = process.env.URI || process.env.MONGO_URI; 

async function connectDB() {
    // Validación preventiva: Si la URI no existe, detenemos el proceso con un mensaje claro
    if (!uri) {
        console.error('Error: La variable de entorno de la base de datos (URI) no está definida.');
        process.exit(1);
    }

    try {
        // 2. Los eventos se configuran ANTES de conectar o se manejan directo en el flujo
        mongoose.connection.on('error', (err) => {
            console.error('Mongo error en tiempo de ejecución:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('Mongo desbalanceado / desconectado');
        });

        console.log('Intentando conectar a MongoDB Atlas...');
        await mongoose.connect(uri);
        
        console.log('¡Conexión exitosa a MongoDB Atlas!');
    } catch (error) {
        console.error('Error fatal al conectar a Mongo durante el inicio:', error);
        process.exit(1);
    }
}

export default connectDB;