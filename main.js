// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
$(document).ready(function(){
  $.ajax({
    url: "songs.json"
  }).done(function(data){
    console.log(data);
    var element = document.getElementById("right");
    //var right = $('#right').html();
    for(var i=1; i<=data.songs.length; i++){
      //if(i===1){
      //$('#right').html("<div class='container'><p class='large' id='song'>"+data.songs[i-1].name+"</p><ul><li id='artist'>"+data.songs[i-1].artist+"</li><li class='middle' id='album'>"+data.songs[i-1].album+"</li><li id='genre"+i+"'>Genre</li></ul></div>");
      //$( "<div class='container'><p class='large' id='song'>"+data.songs[i-1].name+"</p><ul><li id='artist'>"+data.songs[i-1].artist+"</li><li class='middle' id='album'>"+data.songs[i-1].album+"</li><li id='genre"+i+"'>Genre</li></ul></div><span></span>" ).insertAfter( "<span></span>" );
      
      element.innerHTML+="<div class='container'><p class='large' id='song'>"+data.songs[i-1].name+"</p><ul><li id='artist'>"+data.songs[i-1].artist+"</li><li class='middle' id='album'>"+data.songs[i-1].album+"</li><li id='genre"+i+"'>Genre</li></ul></div>";

      //
      // else{
      //   $("<div class='container'><p class='large' id='song"+i+"'>Song Name</p><ul><li id='artist"+i+"'>Artist Name</li><li class='middle' id='album"+i+"'>Album Name</li><li id='genre"+i+"'>Genre</li></ul></div>").after("<div class='container'></div>");
      // }
      //right+="<div class='container'><p class='large' id='song"+i+"'>Song Name</p><ul><li id='artist"+i+"'>Artist Name</li><li class='middle' id='album"+i+"'>Album Name</li><li id='genre"+i+"'>Genre</li></ul></div>";
      // $('#song'+i).text(data.songs[i-1].name);
      // $('#song'+i).text(data.songs[i-1].artist);
      // $('#song'+i).text(data.songs[i-1].album);

      // $('song'+i).text(data.songs[i-1].name);
      // console.log(data.songs[i-1].name)
      // $('artist'+i).text(data.songs[i-1].artist);
      // console.log(data.songs[i-1].artist)
      // $('album'+i).text(data.songs[i-1].album);
      // console.log(data.songs[i-1].album)
    }
    //$('#main').append(JSON.stringify(parsedData));
  })
});


// //var newSongs = [];
// var songTitles = [];
// var songArtist = [];
// var songAlbum = [];
// var songGenre = [];
// for(var i=0; i<songs.length; i++){
//   /*
//   songs[i]=songs[i].replace("!", "");
//   songs[i]=songs[i].replace(">", "-");
//   songs[i]=songs[i].replace("*" , "");
//   songs[i]=songs[i].replace("@", "");
//   songs[i]=songs[i].replace("(", "");
//   	*/
//   songs[i]=songs[i].replace(/[!*@(]/g, "");
//   songs[i]=songs[i].replace(">", "-");


//   //-----title
//   var place = songs[i].indexOf("-");
//   for(var j=0; j<place; j++){
//     songTitles.push("");
//   	songTitles[i]+=songs[i].charAt(j);
//   }
//   //-----artist
//   var artistPlace = songs[i].indexOf("on ");
//   for(var k=place; k<artistPlace; k++){
//     songArtist.push("");
//     songArtist[i]+=songs[i].charAt(k);
//   }
//     //-----album
//   var albumPlace = songs[i].length;//indexOf("album");
//   for(var l=artistPlace; l<albumPlace; l++){
//     songAlbum.push("");
//     songAlbum[i]+=songs[i].charAt(l);
//   }
//     //-----genre
  
// }

// var songTitleElements = [];
// var artistElements = [];
// var albumElements = [];
// var genreElements = [];
// for(var i=0; i<songs.length; i++){
//   //-----title
//   var idTitle="song"+(i+1);
//   songTitleElements[i] = document.getElementById(idTitle);
//   songTitleElements[i].innerHTML = songTitles[i];
//   //-----artist
//   var idArtist="artist"+(i+1);
//   artistElements[i] = document.getElementById(idArtist);
//   artistElements[i].innerHTML = songArtist[i];
//   //-----album
//   var idAlbum="album"+(i+1);
//   albumElements[i] = document.getElementById(idAlbum);
//   albumElements[i].innerHTML = songAlbum[i];
//   //-----genre
//   // var idGenre="album"+(i+1);
//   // genreElements[i] = document.getElementById(idGenre);
//   // genreElements[i].innerHTML = songGenre[i];
// }