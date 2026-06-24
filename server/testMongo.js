import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables de entorno, incluyendo la URI

const uri = process.env.URI;

async function testConnection() {
  if (!uri) {
    console.error('❌ Error: La variable de entorno URI no está definida.');
    process.exit(1);
  }

  console.log('Intentando conectar con la URI:', uri);

  try {
    await mongoose.connect(uri);
    console.log('✅ Conexión a MongoDB Atlas exitosa.');
    await mongoose.disconnect();
    console.log('Conexión cerrada.');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB Atlas:', error);
    process.exit(1);
  }
}

testConnection();