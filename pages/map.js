navigator.geolocation.getCurrentPosition(initMap);


function initMap(position) {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: position.coords.latitude, 
    				lng: position.coords.longitude }
  });
  
	/* here DANIEL gets the positions from server!!!! */  
  positions = [{lat: 31.71, lng: 35.22}, {lat: 31.72, lng: 35.21}, {lat: 31.72, lng: 35.22}, {lat: 31.71, lng: 35.21}];
	for (i=0; i<positions.length; i++){
  var poss = positions[i];
  placeMarkerAndPanTo(poss, map); /* and maybe the order itself? */
  }
  /* map.addListener('click', function(e) {
    placeMarkerAndPanTo(e.latLng, map);
  }); */
}

function placeMarkerAndPanTo(latLng, map) {
	
  var marker = new google.maps.Marker({
    position: latLng,
    map: map ,
  });
  marker.tooltipContent = 'this content should go inside the tooltip';
    

    google.maps.event.addListener(marker, 'click', function () {
        toggleModal(marker);
    });

}


//modal logic 
	
var modal = document.querySelector(".modal");



var trigger = document.querySelector(".trigger");

//this makes modal pop on button press
//trigger.addEventListener("click", toggleModal);


var closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", toggleModal);

// this closes the modal by clicking outside the modal
window.addEventListener("click", windowOnClick);


function toggleModal(marker) {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
    
