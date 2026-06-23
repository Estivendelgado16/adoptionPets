import mongoose from 'mongoose';

import Pet from './src/modules/pets/pets.model.js';
import Story from './src/modules/stories/stories.model.js';

import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.URI;

async function seed() {
    console.log('Connected to MongoDB')
    await mongoose.connect(uri)
    console.log('Conectado a MongoDB')

    console.log('Cleaning existing data');

    await Pet.deleteMany({});
    await Story.deleteMany({});
    
    console.log('Deleted old data');

    const petsData = [
        {   
            id: 1,
            name: "Max", 
            species: "Perro",
            age: "Adulto",
            size: "Grande",
            sex: 'Male',
            image: "https://placedog.net/500",
            shelterPhone: "3001234567",
            tags: ["Vacunado", "Sociable"],
            status: { label: "Nuevo", variant: "new" },
        },
        {   
            id: 2,
            name: "Luna",
            species: "Gato",
            age: "Cachorro",
            size: "Pequeño",
            sex: 'Female',
            image: "https://placekitten.com/500/500",
            shelterPhone: "300987543",
            tags: ["Esterilizada", "Tranquila"],
            status: { label: "Disponible", variant: "default" }
        },
    ];

    const storiesData = [
        {
            id: 1,
            petName: "Max",
            title: "Luna encontró una familia",
            quote:
            "Adoptar a un perro senior fue la mejor decisión. Max trajo una calma y sabiduría a nuestra casa que no sabíamos que necesitábamos.",
            image:
            "https://images.unsplash.com/photo-1517849845537-4d257902454a",
            author: "Familia Rodríguez",
            location: "Valencia, ES",
            badge: "Adoptado en 6 semanas",
            accentColor: "#dcebdc",
            authorAvatar: "https://i.pravatar.cc/80?img=5",
        },

        {
            id: 2,
            petName: "Nala",
            title: "Milo volvió a confiar",
            quote:
            "Nala pasó de ser una gatita asustada a la reina del sofá. Ver su transformación nos llena de alegría cada día.",
            image:
            "https://images.unsplash.com/photo-1574158622682-e40e69881006",
            author: "Clara y Mateo",
            location: "Madrid, ES",
            badge: "Caso de resiliencia",
            accentColor: "#e4eaf6",
            authorAvatar: "https://i.pravatar.cc/80?img=8",
        },

        {
            id: 3,
            petName: "Toby",
            title: "Una nueva oportunidad",
            quote:
            "Buscábamos un compañero para los niños y encontramos un miembro más de la familia. Toby es pura energía y amor.",
            image:
            "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
            author: "Familia García",
            location: "Sevilla, ES",
            badge: "Integración perfecta",
            accentColor: "#f8efe4",
            authorAvatar: "https://i.pravatar.cc/80?img=12",
        },

        {
            id: 4,
            petName: "Luca",
            title: "Un vínculo irrompible",
            quote:
            "Rescatar a Luca nos recordó lo agradecidos que pueden ser los animales. Ahora nos recibe todos los días con un baile de felicidad.",
            image:
            "https://images.unsplash.com/photo-1469569930213-2366b9a0b332",
            author: "Sara y Emilio",
            location: "Bilbao, ES",
            badge: "Seguimiento positivo",
            accentColor: "#e7f2f5",
            authorAvatar: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
        },
    ];

    console.log(`Insert ${petsData.length} Pets`)
    await Pet.insertMany(petsData)
    console.log('Embedded pets')

    console.log(`Insert ${storiesData.length} Stories`)
    await Story.insertMany(storiesData);
    console.log('Embedded stories')

    console.log('Completed seed sucessfull')
    await mongoose.disconnect()
    console.log('Disconnect mongoDB')
}

seed().catch((err) => {
    console.error('Seed error:', err);
    mongoose.disconnect();
})