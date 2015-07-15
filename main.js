var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//var newSongs = [];
var songTitles = [""];
var songArtist = [""];
var songAlbum = [""];
var songGenre = [""];
for(var i=0; i<songs.length; i++){
  /*
  songs[i]=songs[i].replace("!", "");
  songs[i]=songs[i].replace(">", "-");
  songs[i]=songs[i].replace("*" , "");
  songs[i]=songs[i].replace("@", "");
  songs[i]=songs[i].replace("(", "");
  	*/
  songs[i]=songs[i].replace(/[!*@(]/, "");
  songs[i]=songs[i].replace(">", "-");

  var place = songs[i].indexOf("-");
  for(var j=0; j<place; j++){
    songTitles.push("");
  	songTitles[i]+=songs[i].charAt(j);
  }
  // // //--retrieves title
  // for(var j=0; j<newSongs[i].length; j++){
  //   var letter=newSongs[i].charAt(j);
  //   if(letter==="-"){
  //     break;
  //   }
  //   else{
  //     songTitles[i] += letter;
  //   }
  // }
}
alert(songs);

var songTitleElements = [];
for(var i=0; i<songs.length; i++){
  var id="song"+(i+1);
  alert(id);
  songTitleElements[i] = document.getElementById(id);
  songTitleElements[i].innerHTML = songTitles[i];
}

//var songTitleElements = document.getElementById("song1");
//songTitleElements.innerHTML = songTitles[0];