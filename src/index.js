const obj = require("../bars.json")

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.73111943279368, lng: -73.98234710313223},
    zoom: 13.2,
    // mapTypeId: 'satellite',
    // heading: -90
  });
  for (let bar in obj) {
    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(obj[bar].coords[0], obj[bar].coords[1]),
        map: map
      });
      marker.setMap(map);
    console.log(obj[bar])
  }
}

document.addEventListener('DOMContentLoaded', () => {
    initMap();
})