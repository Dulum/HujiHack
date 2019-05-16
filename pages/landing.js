
function myFunc(){
  color_of_text = document.getElementById("blabla").style.color;
  if (color_of_text == "blue") {
    document.getElementById("blabla").style.color = "magenta";  
  } else {
    document.getElementById("title").style.color = "magenta"
    navigator.geolocation.getCurrentPosition(show_position)
  }
  
}

function show_position(position){
    x = document.getElementById("position_goes_here");
    x.innerHTML = position.coords.latitude + "\n" + position.coords.longitude;

}

