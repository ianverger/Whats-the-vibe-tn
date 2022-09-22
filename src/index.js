const { mark } = require("regenerator-runtime");
const obj = require("../bars.json");
let currentVibe = "";
window.switchVibe = switchVibe;
window.showPage = showPage;
window.showBop = showBop;

function showPage(vibe) {
    let splashScreen = document.querySelector(".splash");
    splashScreen.style.opacity = 0;
    splashScreen.style.zIndex = "-10"; 
    switchVibe(null, vibe)
};

function switchVibe(event, vibe) {
    let body = document.body;
    body.setAttribute("class", "");

    setTimeout(() => {
    body.setAttribute("class", vibe);
    }, 100);

    let vibez = document.getElementsByClassName("vibe");
    for (i = 0; i < vibez.length; i++) {
    vibez[i].id = vibez[i].id.replace("active", "");
    };

    currentVibe = vibe;
    switchTitle(vibe);
    window.initMap(currentVibe);
    event.currentTarget.setAttribute("id", "active");
};

function switchTitle(vibe) {
    let title = document.querySelector("#title");
    let logo = "";
        if (vibe === 'natty') logo = "assets/natty_logo.png";
        if (vibe === 'cocktail') logo = "assets/cocktail_logo.png";
        if (vibe === 'dive') logo = "assets/dive_logo.png";
        if (vibe === 'rooftop') logo = "assets/rooftop_logo.png";
    title.innerHTML = (
        `<img alt="" class="pic" src="${logo}"/>`
    );
};

function initMap(currentVibe) {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.72163829901166, lng: -73.979618357371},
        // center: {lat: 40.722637848408105, lng: -73.98678972114551},
        gestureHandling: "none",
        disableDefaultUI: true,
        zoom: 13.1,
        // mapTypeId: 'satellite',
        // heading: -90
    });

    const bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(40.788882014610316, -73.94062489948102),
        new google.maps.LatLng(40.67704769503717, -74.05299816586422)
       
    );

    const image = "assets/dive_map.png"

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
            img.style.width = "600px";
            img.style.height = "600px";
            // img.style.position = "absolute";
            this.div.appendChild(img);

            // Add the element to the "overlayLayer" pane.
            const panes = this.getPanes();
            panes.overlayLayer.style.left = "-300px";
            panes.overlayLayer.style.top = "-300px";
            panes.overlayLayer.appendChild(this.div);
          
        }
        draw() {
            // We use the south-west and north-east
            // coordinates of the overlay to peg it to the correct position and size.
            // To do this, we need to retrieve the projection from the overlay.
            const overlayProjection = this.getProjection();
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
            if (this.div) {
            this.div.style.left = sw.x + "px";
            this.div.style.top = ne.y + "px";
            this.div.style.width = ne.x - sw.x + "px";
            this.div.style.height = sw.y - ne.y + "px";
            }
        }
    }
    // const overlay = new USGSOverlay(bounds, image);

    // overlay.setMap(map);

    let arr = Object.values(obj).filter(ele => ele.vibe.includes(currentVibe));
    console.log(arr);
    for (let bar of arr) {
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(bar.coords[0], bar.coords[1]),
            map: map
        });
        marker.setMap(map);
        marker.setClickable(true);
        let info = document.querySelector("#info"); 
        let infoOverlay = document.querySelector("#info_overlay");
        let bopButton = document.querySelector("#bop_overlay");
        let instructions = document.querySelector("#instructions_overlay");
        marker.addListener("click", () => {
            infoOverlay.style.opacity = 0;
            infoOverlay.style.zIndex = -1; 
            instructions.style.zIndex = -10;
            bopButton.style.opacity = 1;
            bopButton.style.zIndex = 1; 
            info.setAttribute('class', '');
            setTimeout(() => {
                info.setAttribute('class', 'info_flash');
            }, 1)
            initInfo(bar.name, bar.address, bar.hours, bar.description, bar.link, bar.next, bar.pic);
           
        })
    }
    
}
    // document.addEventListener('DOMContentLoaded', () => {
    //         initMap;
    // });
window.initMap = initMap;

function initInfo(name, address, hours, description, link, next, pic) {
    let deets = document.querySelector("#deets");
    deets.innerHTML = (
        `Name: ${name} <br>
        Address: ${address} <br>
        Hours: ${hours} <br>
        <br>
        ${description} <br>
        <br>
        <a href="${link}" target="_blank">Google Maps</a>
        `
    );

    let photo = document.querySelector("#photo");
    photo.innerHTML = (
        `<img alt="" class="pic" src="${pic}"/>`
    );


    let bop = document.querySelector("#boptext");
    bop.innerHTML = `${next[0]}`
};

function showBop() {
    let bopButton = document.querySelector("#bop_overlay");
    bopButton.style.opacity = 0;
    bopButton.style.zIndex = "-1"; 
}