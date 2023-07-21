let playlist = [
   {
        "songId" : 1234,
        "title" : "",
        "artist" : "",
        "url" : "",
        "played" : 1
    },
    { 
        "songId" : 5678,
        "title" : "asfd",
        "artist" : "ddffd",
        "url" : "ghf",
        "played" : 2
    }
];



function getAllSong() {
    return playlist;
}

/*
function getSong(songId) {
    return playlist.find((a) => a.songId === songId);
}
*/

function getsong(songIds) {
    return playlist.find((a) => a.songId == songIds);
}




function addNewSong(title, artist, url) {
    let newSong = {
        songId: getNewSongId(),
        title: title,
        artist: artist,
        url: url,
        played: 0,
    }
    playlist.push(newSong);
}

function sortSong() {
    return playlist.sort(function(a,b) {return b.played-a.played});
}


function getNewSongId() {
    return Math.random().toString().substr(2,4);
}



module.exports = {
    getAllSong,
    getsong,
    addNewSong,
    sortSong
}
