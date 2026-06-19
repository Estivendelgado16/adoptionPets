export const stories = [
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
    authorAvatar: "https://i.pravatar.cc/80?img=19",
  },
];

export const findAll = async () => stories;
export const findById = async (id) => stories.find( s => s.id === id);
 