// Подключаем mongoose.
import mongoose from 'mongoose';
import '../middleware/env.js';
import Region from '../models/Region.js'
console.log(process.env.DB_URL)

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const regions = [{
        name: "Португалия",
        gold: 1000,
        wars: 1000,
        neighboringRegion: ["Испания"]
    },
    {
        name: "Испания",
        gold: 4000,
        wars: 2000,
        neighboringRegion: ["Португалия", "Франция"]
    },
    {
        name: "Франция",
        gold: 3000,
        wars: 2000,
        neighboringRegion: ["Испания", "Бельгия", "Люксембург", "Германия", "Швейцария", "Итлия"]
    },
    {
        name: "Бельгия",
        gold: 8000,
        wars: 800,
        neighboringRegion: ["Франция", "Нидерлаанды", "Люксембург", "Германия"]
    },
    {
        name: "Люксембург",
        gold: 5000,
        wars: 300,
        neighboringRegion: ["Франция", "Бельгия", "Германия"]
    },
    {
        name: "Нидерланды",
        gold: 4500,
        wars: 7000,
        neighboringRegion: ["Бельгия", "Германия"]
    },
    {
        name: "Дания",
        gold: 9500,
        wars: 10000,
        neighboringRegion: ["Германия"]
    },
    {
        name: "Швейцария",
        gold: 15000,
        wars: 7500,
        neighboringRegion: ["Франция", "Австрия", "Германия", "Итлия"]
    },
    {
        name: "Италия",
        gold: 18000,
        wars: 12000,
        neighboringRegion: ["Франция", "Австрия", "Словения", "Швейцария"]
    },
    {
        name: "Германия",
        gold: 15000,
        wars: 21000,
        neighboringRegion: ["Дания", "Бельгия", "Люксембург", "Нидерланды", "Швейцария", "Австрия", "Чехия", "Польша",
            "Франция"
        ]
    },
    {
        name: "Польша",
        gold: 6000,
        wars: 21000,
        neighboringRegion: ["Россия", "Литва", "Беларусь", "Украина", "Словакия", "Чехия", "Германия"]
    },
    {
        name: "Чехия",
        gold: 7000,
        wars: 9000,
        neighboringRegion: ["Польша", "Словакия", "Австрия", "Германия"]
    },
    {
        name: "Австрия",
        gold: 5000,
        wars: 1000,
        neighboringRegion: ["Чехия", "Словакия", "Венгрия", "Италия", "Швейцария", "Германия"]
    },
    {
        name: "Словения",
        gold: 500,
        wars: 1200,
        neighboringRegion: ["Австрия", "Венгрия", "Хорватия", "Италия"]
    },
];

Region.insertMany(regions).then(() => {
    mongoose.connection.close();
});