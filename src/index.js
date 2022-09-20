const { mark } = require("regenerator-runtime");
const obj = require("../bars.json")

// var map;

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.72163829901166, lng: -73.979618357371},
    // center: {lat: 40.722637848408105, lng: -73.98678972114551},
    zoom: 13.1,
    // mapTypeId: 'satellite',
    // heading: -90
  });
  for (let bar in obj) {
    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(obj[bar].coords[0], obj[bar].coords[1]),
        map: map
      });
      marker.setMap(map);
      marker.setClickable(true);
      marker.addListener("click", () => {
        initInfo(obj[bar].name, obj[bar].address, obj[bar].hours, obj[bar].description, obj[bar].link);
      })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initMap();
})

function initInfo(name, address, hours, description, link) {
    let info = document.querySelector("#info");
    info.innerText = (
        `Name: ${name}
        Address: ${address}
        Hours: ${hours}

        ${description}`
    );

    let bop = document.querySelector("#bop");
    bop.innerText = "Wanna switch up the vibe?"

}

40.722637848408105, -73.98678972114551