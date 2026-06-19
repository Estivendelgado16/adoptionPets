const pets = [
    {id: 1, name: "Max", species: "Perro", age: "Adulto", size: "Grande", image: "https://placedog.net/500", shelterPhone: "3001234567"},
    {id: 2, name: "Luna", species: "Gato", age: "Cachorro", size: "Pequeño", image: "https://placekitten.com/500/500", shelterPhone: "300987543"},
];

export const findAll = async () => pets;
export const findById = async (id) => pets.find(p => p.id === id);