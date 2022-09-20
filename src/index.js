const { mark } = require("regenerator-runtime");
const obj = require("../bars.json");

var map;

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.72163829901166, lng: -73.979618357371},
        // center: {lat: 40.722637848408105, lng: -73.98678972114551},
        zoom: 13.1,
        // mapTypeId: 'satellite',
        // heading: -90
    });
    
    const bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(40.801004776182744, -73.88767050854922),
        new google.maps.LatLng(40.687335837821394, -74.06379507436245)
       
    );

    const image = "assets/dive.png"
    

    class USGSOverlay extends google.maps.OverlayView {
        bounds;
        image;
        div;
        constructor(bounds, image) {
            super();
            this.bounds = bounds;
            this.image = image;
        }
        /**
         * onAdd is called when the map's panes are ready and the overlay has been
         * added to the map.
         */
        onAdd() {
            this.div = document.createElement("div");
            this.div.classList.add('overlay');
            this.div.style.borderStyle = "none";
            this.div.style.borderWidth = "0px";
            // this.div.style.position = "absolute";
            // this.div.style.top = "0";
            // this.div.style.left = "0";
            // this.div.style.width = "520px";
            // this.div.style.height = "530px";

            // Create the img element and attach it to the div.
            const img = document.createElement("img");

            img.src = this.image;
            img.style.width = "100%";
            img.style.height = "100%";
            // img.style.position = "absolute";
            this.div.appendChild(img);

            // Add the element to the "overlayLayer" pane.
            const panes = this.getPanes();
            panes.overlayLayer.style.left = "-260px";
            panes.overlayLayer.style.top = "-260px";
            panes.overlayLayer.appendChild(this.div);
          
        }
        draw() {
            // We use the south-west and north-east
            // coordinates of the overlay to peg it to the correct position and size.
            // To do this, we need to retrieve the projection from the overlay.
            const overlayProjection = this.getProjection();
            // debugger
            // Retrieve the south-west and north-east coordinates of this overlay
            // in LatLngs and convert them to pixel coordinates.
            // We'll use these coordinates to resize the div.
            const sw = overlayProjection.fromLatLngToDivPixel(
            this.bounds.getSouthWest()
            );
            const ne = overlayProjection.fromLatLngToDivPixel(
            this.bounds.getNorthEast()
            );

            // Resize the image's div to fit the indicated dimensions.
            // if (this.div) {
            // this.div.style.left = sw.x + "px";
            // this.div.style.top = ne.y + "px";
            // this.div.style.width = ne.x - sw.x + "px";
            // this.div.style.height = sw.y - ne.y + "px";
            // }
        }
    }
    // const overlay = new USGSOverlay(bounds, image);

    // overlay.setMap(map);

    for (let bar in obj) {
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(obj[bar].coords[0], obj[bar].coords[1]),
            map: map
        });
        marker.setMap(map);
        marker.setClickable(true);
        marker.addListener("click", () => {
            initInfo(obj[bar].name, obj[bar].address, obj[bar].hours, obj[bar].description, obj[bar].link, obj[bar].next, obj[bar].pic);
        })
    }
}
window.initMap = initMap;
// document.addEventListener('DOMContentLoaded', () => {
//     initMap();
// })

function initInfo(name, address, hours, description, link, next, pic) {
    let deets = document.querySelector("#deets");
    deets.innerHTML = (
        `Name: ${name} <br>
        Address: ${address} <br>
        Hours: ${hours} <br>
        <br>
        ${description} <br>
        <a href="${link}" target="_blank">Google</a>
        `
    );

    let photo = document.querySelector("#photo");
    photo.innerHTML = (
        `<img alt="" class="pic" src="${pic}"/>`
    )


    let bop = document.querySelector("#bop");
    bop.innerText = (
        `Wanna switch up the vibe?
        
        ${next[0]}`
    );
}

