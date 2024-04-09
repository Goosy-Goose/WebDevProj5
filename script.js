let songs_grid = document.getElementById("songs-grid");

let jSON_songs_database = [
    {
        "title": "Akuou (The King of Evil)",
        "cover-art": "song-covers/akuou-thumbnail.jpg",
        "link":"https://www.youtube.com/watch?v=RUIelJYMO4U",
        "color": [150, 65, 48],
        "flash-warning": true,
    },
    {
        "title": "Black Smoke Maze",
        "cover-art": "song-covers/a-minus-in-the-sun-album-cover.jpg",
        "link":"https://www.youtube.com/watch?v=x4CbDLe3PQ8",
        "color": [158, 158, 158],
        "flash-warning": false,
    },
    {
        "title": "Cherry Blossom Drops, Burning Spring",
        "cover-art": "song-covers/cherry-blossom-drops-thumbnail.jpg",
        "link":"https://www.youtube.com/watch?v=0OOWWNFTguY",
        "color": [255, 188, 173],
        "flash-warning": true,
    },
    {
        "title": "Happppy Song",
        "cover-art": "song-covers/happppy-song-thumbnail.jpg",
        "link":"https://www.youtube.com/watch?v=uGZ0I71Yawo",
        "color": [255, 224, 84],
        "flash-warning": true,
    },
    {
        "title": "iiillluuuvvvUUU",
        "cover-art": "song-covers/iiillluuuvvvUUU-thumbnail.jpg",
        "link":"https://www.youtube.com/watch?v=w2i53_YwHWo",
        "color": [145, 12, 29],
        "flash-warning": false,
    },
    {
        "title": "Raven Haven",
        "cover-art": "song-covers/a-minus-in-the-sun-album-cover.jpg",
        "link":"https://www.youtube.com/watch?v=CrUcvgiXwCo",
        "color": [158, 158, 158],
        "flash-warning": false,
    },
]

for (var i = 0; i < jSON_songs_database.length; i++) {
    
    create_song_elem(jSON_songs_database[i]);
}

// console.log("done0");
function create_song_elem(incomingJSON){
    // create the organizer element and set its specific background color
    let song_element = document.createElement("DIV");
    song_element.classList.add("song-organizer");
    song_element.style.backgroundColor = "rgba(" + incomingJSON['color'] + ", 0.3)";

    let song_cover = document.createElement("IMG");
    song_cover.classList.add("song-cover");
    song_cover.src = incomingJSON["cover-art"];
    song_element.appendChild(song_cover);

    // create an h2 element and make it display the song title
    // also links the youtube video
    let song_title = document.createElement("A");
    song_title.classList.add("song-title");
    song_title.href = incomingJSON["link"];
    song_title.innerText = incomingJSON["title"];
    song_element.appendChild(song_title);



    songs_grid.appendChild(song_element);   
}