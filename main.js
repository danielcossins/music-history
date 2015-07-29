// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//var $right = $("#right");

$(document).ready(function(){
  $.ajax({
    url: "songs.json"
  }).done(function(data){
    addSongs(data);
  });
  var index=2;
  $("#more").click(function(){
    $.ajax({
      url: "songs"+index+".json"
    }).done(function(data2){
      addSongs(data2);
      index++;
    });
  });
});


function addSongs(data){
  for(var i=1; i<=data.songs.length; i++){
    $('#more').before("<div class='container'><p class='large' id='song'>"
    +data.songs[i-1].name+"</p><ul><li id='artist'>"
    +data.songs[i-1].artist+"</li><li class='middle' id='album'>"
    +data.songs[i-1].album+"</li><li id='year'>"
    +data.songs[i-1].year+"</li></ul><button class='delete' type='button'>Delete</button></div>");
  }
  initDelete();
}

function initDelete(){
  $('.delete').click(function(){
    // var id = $(this).attr('id');
    // console.log(id);
    $(this).parent().remove();
  });
}