const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8000;
const app = express();
const users = [
    {
        userId: 45089,
        name: "Owen",
        position: "Captian of the Breakroom"
    },
    {
        userId: 223,
        name: "Brooke",
        position: "Winner of All Dance-Offs"
    },
    {
        userId: 6582,
        name: "Gobi",
        position: "King of Mid-Day Naps"
    },
    {
        userID: 9879,
        name: "Laura",
        position: "Queen of the World"
    }
];
const pets = [
    {
        name: 'Memphis',
        age: 12,
        type: 'Dog'
    },
    {
        name: 'Baby',
        age: 11,
        type: 'Panther'
    },
    {
        name: 'Peach',
        age: 3,
        type: 'Cat'
    },
    {
        name: 'Opal',
        age: 1,
        type: 'Kitten'
    }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/api/users", (req, res) => res.json(users));
app.get("/api/pets", (req, res) => res.json(pets));
app.post("/api/users", (req, res) => console.log("we want to create"));

app.listen(PORT, function () {
    console.log(`We are connected 🌎 on PORT ${PORT}`);
});
