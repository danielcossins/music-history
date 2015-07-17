/*
var count = 0;
for(var i=0; ; i++){
  var input = prompt("Enter the name of a song. Type 'exit' to quit.");
  if(input==="exit"){
    break;
  }
  else{
    count++;//songs[songs.length] = input;
  }
}
var element = document.getElementById("right");
var divContainer = [];
var container = "container";
var large = "large";
var middle = "middle"
for(var i=0; i<count; i++){
  var songNumber = "song"+i;
  var artistNumber = "artist"+i;
  var albumNumber = "album"+i;
  var genreNumber = "genre"+i;
  divContainer.push("");
  divContainer[i] = "<div class="+container+">
        <p class="+large+" id="+songNumber+">Song Name</p>
          <ul>
            <li id="+artistNumber+">Artist Name</li>
            <li class="+middle+" id="+albumNumber+">Album Name</li>
            <li id="+genreNumber+">Genre</li>
          </ul>
        </div>"
  element.innerHTML += divContainer[i];
}



*/
