var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


//var newSongs = [];
var songTitles = [];
var songArtist = [];
var songAlbum = [];
var songGenre = [];
for(var i=0; i<songs.length; i++){
  /*
  songs[i]=songs[i].replace("!", "");
  songs[i]=songs[i].replace(">", "-");
  songs[i]=songs[i].replace("*" , "");
  songs[i]=songs[i].replace("@", "");
  songs[i]=songs[i].replace("(", "");
  	*/
  songs[i]=songs[i].replace(/[!*@(]/g, "");
  songs[i]=songs[i].replace(">", "-");


  //-----title
  var place = songs[i].indexOf("-");
  for(var j=0; j<place; j++){
    songTitles.push("");
  	songTitles[i]+=songs[i].charAt(j);
  }
  //-----artist
  var artistPlace = songs[i].indexOf("on ");
  for(var k=place; k<artistPlace; k++){
    songArtist.push("");
    songArtist[i]+=songs[i].charAt(k);
  }
    //-----album
  var albumPlace = songs[i].length;//indexOf("album");
  for(var l=artistPlace; l<albumPlace; l++){
    songAlbum.push("");
    songAlbum[i]+=songs[i].charAt(l);
  }
    //-----genre
  
}

var songTitleElements = [];
var artistElements = [];
var albumElements = [];
var genreElements = [];
for(var i=0; i<songs.length; i++){
  //-----title
  var idTitle="song"+(i+1);
  songTitleElements[i] = document.getElementById(idTitle);
  songTitleElements[i].innerHTML = songTitles[i];
  //-----artist
  var idArtist="artist"+(i+1);
  artistElements[i] = document.getElementById(idArtist);
  artistElements[i].innerHTML = songArtist[i];
  //-----album
  var idAlbum="album"+(i+1);
  albumElements[i] = document.getElementById(idAlbum);
  albumElements[i].innerHTML = songAlbum[i];
  //-----genre
  // var idGenre="album"+(i+1);
  // genreElements[i] = document.getElementById(idGenre);
  // genreElements[i].innerHTML = songGenre[i];
}

//var songTitleElements = document.getElementById("song1");
//songTitleElements.innerHTML = songTitles[0];