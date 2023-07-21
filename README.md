# spotify-simple-gigih
simple spotify for gigih asignment

# How to run
run
```
node app.js
```
*default port is 3000

# How to test

Get all song inside playlist
- method: GET
- url: "/plelist"

Play song
- method: GET
- url: "/play/id"
- *id = the song id

Add song to playlist
- method: POST
- url: "/plelist"

Sort song by the played count
- method: GET
- url: "/sort"
