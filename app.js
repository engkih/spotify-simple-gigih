const express = require("express");
const app = express();

const {getAllSong, sortSong} = require("./plelist");
const {getsong} = require("./plelist");
const {addNewSong} = require("./plelist");


app.use(express.json());

app.get("/", (req,res) => {
    res.send("coba get ke root");
})

app.get("/tes", (req,res) => {
    res.send("coba get ke tes")
})

app.get("/plelist", (req, res) => {
    const playlist = getAllSong();
    res.send(playlist);
})

app.get("/plays/:id", (req, res) => {
    let id = parseInt (req.params.id);
    const song = getsong(id);
    song.played += 1
    res.send(song);

})

app.post("/plelist", (req, res) => {
    const {title,artist,url} = req.body;
    addNewSong(title, artist, url);
    res.status(201).json({message: "Lagu ditambahkan"});
})

app.get("/sort", (req,res) => {
    const sorted = sortSong();
    res.send(sorted);
})


app.listen(3000);

