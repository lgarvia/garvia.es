const provinces = [
    "Madrid", "Guadalajara", "Cáceres", "Badajoz", "Toledo", "Cuenca", 
    "Ciudad Real", "Albacete", "Valencia", "Zamora", "León", "Asturias"
];

// Mock database of locations
// Coordinates are approximate for demonstration
const fishingLocations = [
    {
        id: 1,
        name: "Embalse de Valmayor",
        type: "Embalse",
        province: "Madrid",
        lat: 40.550,
        lng: -4.050,
        species: ["Lucio", "Carpa", "Black Bass", "Barbo"],
        description: "Uno de los embalses más populares de Madrid."
    },
    {
        id: 2,
        name: "Embalse de San Juan",
        type: "Embalse",
        province: "Madrid",
        lat: 40.366,
        lng: -4.366,
        species: ["Lucio", "Black Bass", "Carpa", "Barbo Común"],
        description: "El único embalse de la Comunidad de Madrid donde está permitido el baño y las actividades a motor."
    },
    {
        id: 3,
        name: "Río Tajo (Aranjuez)",
        type: "Río",
        province: "Madrid",
        lat: 40.033,
        lng: -3.600,
        species: ["Carpa", "Barbo", "Lucioperca", "Siluro"],
        description: "Tramo histórico con grandes oportunidades de pesca."
    },
    {
        id: 4,
        name: "Embalse de Cijara",
        type: "Embalse",
        province: "Badajoz",
        lat: 39.383,
        lng: -4.950,
        species: ["Black Bass", "Lucio", "Barbo", "Carpa"],
        description: "Mundialmente conocido por su pesca de Black Bass."
    },
    {
        id: 5,
        name: "Embalse de Orellana",
        type: "Embalse",
        province: "Badajoz",
        lat: 38.983,
        lng: -5.533,
        species: ["Lucio", "Black Bass", "Carpa Royal"],
        description: "Primer embalse de Extremadura con bandera azul."
    },
    {
        id: 6,
        name: "Embalse de Entrepeñas",
        type: "Embalse",
        province: "Guadalajara",
        lat: 40.633,
        lng: -2.716,
        species: ["Lucio", "Carpa", "Lucioperca"],
        description: "Parte del Mar de Castilla."
    },
    {
        id: 7,
        name: "Río Tormes",
        type: "Río",
        province: "Salamanca",
        lat: 40.963,
        lng: -5.669,
        species: ["Trucha Común", "Hucho", "Barbo"],
        description: "Famoso por sus cotos de trucha y hucho."
    },
    {
        id: 8,
        name: "Embalse de Ricobayo",
        type: "Embalse",
        province: "Zamora",
        lat: 41.516,
        lng: -5.983,
        species: ["Lucio", "Black Bass", "Zander"],
        description: "Embalse del río Esla."
    }
];

// Mock database of initial catches
// Ideally this would be stored in localStorage or a backend
const initialCatches = [
    {
        id: 101,
        locationId: 1,
        date: "2024-05-12",
        species: "Lucio",
        size: "82 cm",
        lure: "Cucharilla Plata",
        modality: "spinning"
    },
    {
        id: 102,
        locationId: 2,
        date: "2024-06-20",
        species: "Black Bass",
        size: "1.5 kg",
        lure: "Vinilo tipo lombriz",
        modality: "casting"
    },
    {
        id: 103,
        locationId: 4,
        date: "2024-04-10",
        species: "Black Bass",
        size: "2.8 kg",
        lure: "Crankbait",
        modality: "casting"
    }
];
