
const express = require("express");
const app=express();


const path = require("path");
const hbs = require("hbs");
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, 'images')));


app.get('/', (req, res) => {
    const cards = [
        { title: 'Card 1', description: 'Description 1', images: 'image1.jpg' },
        { title: 'Card 2', description: 'Description 2', images: 'image 2.jpg' },
        { title: 'Card 3', description: 'Description 3', images: 'image 3.jpg' }
    ];
    res.render('cards', { cards });
});



app.listen(3000, () => {
    console.log("Port connected");
});