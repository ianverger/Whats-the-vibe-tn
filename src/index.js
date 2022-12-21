const { mark } = require("regenerator-runtime");
const obj = require("../bars.json");
let currentVibe = "";
window.switchVibe = switchVibe;
window.showPage = showPage;
window.switchBar = switchBar;
// window.nextNext = nextNext;
// window.prevNext = prevNext;
// window.showBop = showBop;
// window.currentNextBar = currentNextBar;
let realClick = true;

function showPage(vibe) {
    let splashScreen = document.querySelector(".splash");
    splashScreen.style.opacity = 0;
    splashScreen.style.zIndex = "-10"; 
    let event = document.getElementById(`${vibe}-b`)
    event.click();
};

// When a different "vibe" tab is selected, the class attribute of the body is cleared out and then 
// set to the new "vibe". This, in turn, prompts all of the elements to inherit new CCS qualities based 
// on their new class. An established Element ("currentVibe") is set and used to invoke two functions:
// one that intitalizes the map and another that sets the title for the page.
function switchVibe(event, vibe) {
    let body = document.body;
    body.setAttribute("class", "");
    
    setTimeout(() => {
    body.setAttribute("class", vibe);
    }, 100);

    let vibez = document.getElementsByClassName("vibe");
    for (i = 0; i < vibez.length; i++) {
        let innertext = vibez[i].textContent
        vibez[i].id = vibez[i].id.replace("active", `${innertext}-b`);
    };
    let infoOverlay = document.querySelector("#info_overlay");
    let instructions = document.querySelector("#instructions_overlay");
    let deets = document.querySelector("#deets");
    let photo = document.querySelector("#photo");
    let nextInstructions = document.querySelector("#switch_text");

    if (realClick) {
        infoOverlay.style.opacity = 1;
        infoOverlay.style.zIndex = 1; 
        instructions.style.zIndex = 5;
        instructions.style.opacity = 1;
        deets.innerHTML = null;
        photo.innerHTML = null;
        nextInstructions.innerHTML = null;
    }

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

// Google Maps API boiler plate code used to initialize the map with chosen latitude and longitude, 
// gesture handling, zoom, etc.

let currentMarkers = [];
let lastClick = null;

function initMap(currentVibe) {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.72163829901166, lng: -73.979618357371},
        gestureHandling: "none",
        disableDefaultUI: true,
        keyboardShortcuts: false,
        zoom: window.innerWidth < 1300 ? 13.1 : 13.3,
        mapId: 'd08c3dd1a5339f5e'
    });
   
// Here I turn my JSON database into an array of objects, filter to the locations pertaining to the
// currently selected "vibe" and pull up only those markers on the map.

    let arr = Object.values(obj).filter(ele => ele.vibe.includes(currentVibe));
    
    for (let bar of arr) {
        let icon ="";
            if (currentVibe === 'natty') icon = "assets/bar_icon_beige.png";
            if (currentVibe === 'cocktail') icon = "assets/bar_icon_pink2.png";
            if (currentVibe === 'dive') icon = "assets/bar_icon_maroon.png";
            if (currentVibe === 'rooftop') icon = "assets/bar_icon_blue.png";

        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(bar.coords[0], bar.coords[1]),
            map: map,
            icon: {
                url: icon,
                scaledSize: new google.maps.Size(38, 40)
            }
        });

        let selectedIcon = "";
        if (currentVibe === 'natty') selectedIcon = "assets/selected_natty.png";
        if (currentVibe === 'cocktail') selectedIcon = "assets/selected_cocktail.png";
        if (currentVibe === 'dive') selectedIcon = "assets/selected_dive.png";
        if (currentVibe === 'rooftop') selectedIcon = "assets/selected_rooftop.png";
        let bigIcon = {
            url: selectedIcon,
            scaledSize: new google.maps.Size(55, 58)
        }

        if (window.currentNextLat && window.currentNextLng) {
            if ((marker.position.lat() === window.currentNextLat) && (marker.position.lng() === window.currentNextLng)) {
                marker.setIcon(bigIcon)
                window.currentNextLat = null;
                window.currentNextLng = null;
                lastClick = marker;
            }
        }
        

        currentMarkers.push(marker);
        marker.setMap(map);
        marker.setClickable(true);
        let info = document.querySelector("#info"); 
        let infoOverlay = document.querySelector("#info_overlay");
        let bop = document.querySelector("#bop");
        // let bopButton = document.querySelector("#bop_switch");
        let instructions = document.querySelector("#instructions_overlay");
        
// When a marker is clicked, overlayed divs on both the "info" and "next" windows are pushed to the 
// bottom and top of the display (respectively) to allow for a smooth user experience. A function to 
// pull up the info window is invoked, passing in all of the related data from the database.
        marker.addListener("click", () => {
            let smallIcon = {
                url: icon,
                scaledSize: new google.maps.Size(38, 40)
            }
            if (lastClick) lastClick.setIcon(smallIcon);

            lastClick = marker;

            let selectedIcon = "";
                if (currentVibe === 'natty') selectedIcon = "assets/selected_natty.png";
                if (currentVibe === 'cocktail') selectedIcon = "assets/selected_cocktail.png";
                if (currentVibe === 'dive') selectedIcon = "assets/selected_dive.png";
                if (currentVibe === 'rooftop') selectedIcon = "assets/selected_rooftop.png";
            let bigIcon = {
                url: selectedIcon,
                scaledSize: new google.maps.Size(55, 58)
            }
            marker.setIcon(bigIcon);
         
            infoOverlay.style.opacity = 0;
            infoOverlay.style.zIndex = -1; 
            instructions.style.zIndex = -10;
            instructions.style.opacity = 0;
            // bopButton.style.opacity = 1;
            // bopButton.style.zIndex = 1; 
            info.setAttribute('class', '');
            bop.setAttribute('class', '');
            setTimeout(() => {
                info.setAttribute('class', 'info_flash');
                bop.setAttribute('class', 'info_flash');
            }, 2)
            initInfo(bar.name, bar.address, bar.hours, bar.description, bar.link, bar.next, bar.pic);
        })
    }
}

window.initMap = initMap;

function initInfo(name, address, hours, description, link, next, pic) {
    let deets = document.querySelector("#deets");
    deets.innerHTML = (
        `<b>Name:</b> ${name} <br>
        <b>Address:</b> ${address} <br>
        <b>Hours:</b> ${hours} <br>
        <br>
        ${description} <br>
        <br>
        <a href="${link}" target="_blank">Open in Google Maps</a>
        `
    );

    let photo = document.querySelector("#photo");
    photo.innerHTML = (
        `<img alt="" class="pic" src="${pic}"/>`
    );

    let nextInstructions = document.querySelector("#switch_text");
    nextInstructions.innerHTML = (`There are 2 other spots near ${name}.<br>Wanna switch up the vibe?`)

    window.next = next;
    window.currentNextNum1 = next[0]
    window.currentNextNum2 = next[1]
    // window.currentBar = name;
    // window.currentNextNum = next[Math.floor(Math.random() * next.length)];
    setNext(next);
};

//bop stuff--------------------------------------------------------------------
function setNext(next) {
    let currentNextBar1 = obj[next[0]];
    let currentNextBar2 = obj[next[1]];
    let bopButton1 = document.querySelector("#bop_switch");
    let bopButton2 = document.querySelector("#bop_switch2");
    let currentNextVibe1 = currentNextBar1.vibe[0];
    let currentNextVibe2 = currentNextBar2.vibe[0];
    setTimeout(() => {
        bopButton1.setAttribute('class', `${currentNextVibe1}-nxt-button`)
        bopButton2.setAttribute('class', `${currentNextVibe2}-nxt-button`)
    }, 2);

    let bopLogo1 = "";
    let bopLogo2 = "";
        if (currentNextVibe1 === 'natty') bopLogo1 = "assets/natty_logo.png";
        if (currentNextVibe2 === 'natty') bopLogo2 = "assets/natty_logo.png";
        if (currentNextVibe1 === 'cocktail') bopLogo1 = "assets/cocktail_logo.png";
        if (currentNextVibe2 === 'cocktail') bopLogo2 = "assets/cocktail_logo.png";
        if (currentNextVibe1 === 'dive') bopLogo1 = "assets/dive_logo.png";
        if (currentNextVibe2 === 'dive') bopLogo2 = "assets/dive_logo.png";
        if (currentNextVibe1 === 'rooftop') bopLogo1 = "assets/rooftop_logo.png";
        if (currentNextVibe2 === 'rooftop') bopLogo2 = "assets/rooftop_logo.png";
    bopButton1.innerHTML = (`
    <img id="next_vibe_logo" alt="" class="bop_logo" src="${bopLogo1}"/>
    `);
    bopButton2.innerHTML = (`
    <img id="next_vibe_logo" alt="" class="bop_logo" src="${bopLogo2}"/>
    `);
}

// function setNext(currentNextNum) {
//     let currentNextBar = obj[currentNextNum];
//     let bopButton = document.querySelector("#bop_switch");
//     let currentNextVibe = currentNextBar.vibe[0];
 
//     setTimeout(() => {
//         bopButton.setAttribute('class', `${currentNextVibe}-nxt-button`)
//     }, 2);

//     let bopLogo = "";
//         if (currentNextVibe === 'natty') bopLogo = "assets/natty_logo.png";
//         if (currentNextVibe === 'cocktail') bopLogo = "assets/cocktail_logo.png";
//         if (currentNextVibe === 'dive') bopLogo = "assets/dive_logo.png";
//         if (currentNextVibe === 'rooftop') bopLogo = "assets/rooftop_logo.png";
//     bopButton.innerHTML = (`
//     <img id="next_vibe_logo" alt="" class="bop_logo" src="${bopLogo}"/>
//     `);
// }

// function nextNext(next, currentNextNum) {
//     let currentIndex = next.indexOf(currentNextNum);
//     let nextIndex = (currentIndex + 1) % next.length;
//     currentNextNum = next[nextIndex];
//     window.currentNextNum = next[nextIndex];
//     setNext(currentNextNum);
// }

function switchBar(currentNextNum) {
    let info = document.querySelector("#info"); 
    let bop = document.querySelector("#bop");
    let currentNextBar = obj[currentNextNum];
    let currentNextVibe = currentNextBar.vibe[0];
    let currentNextLat = currentNextBar.coords[0];
    let currentNextLng = currentNextBar.coords[1];
    window.currentNextLat = currentNextBar.coords[0];
    window.currentNextLng = currentNextBar.coords[1];
    let currentNextMarker = null;
    
    let icon ="";
        if (currentVibe === 'natty') icon = "assets/bar_icon_beige.png";
        if (currentVibe === 'cocktail') icon = "assets/bar_icon_pink2.png";
        if (currentVibe === 'dive') icon = "assets/bar_icon_maroon.png";
        if (currentVibe === 'rooftop') icon = "assets/bar_icon_blue.png";
    let smallIcon = {
        url: icon,
        scaledSize: new google.maps.Size(38, 40)
    }
    if (lastClick) lastClick.setIcon(smallIcon);

    for (let i = 0; i < currentMarkers.length; i++) {
        let marker = currentMarkers[i];
        if ((marker.position.lat() === currentNextLat) && (marker.position.lng() === currentNextLng)) {
            currentNextMarker = marker;
        }
    }

    lastClick = currentNextMarker;

    let selectedIcon = "";
    if (currentVibe === 'natty') selectedIcon = "assets/selected_natty.png";
    if (currentVibe === 'cocktail') selectedIcon = "assets/selected_cocktail.png";
    if (currentVibe === 'dive') selectedIcon = "assets/selected_dive.png";
    if (currentVibe === 'rooftop') selectedIcon = "assets/selected_rooftop.png";
    let bigIcon = {
        url: selectedIcon,
        scaledSize: new google.maps.Size(55, 58)
    }

    if (currentVibe !== currentNextVibe) {
        let event = document.getElementById(`${currentNextVibe}-b`);
        realClick = false;
        event.click();
        realClick = true;
    } else {
        info.setAttribute('class', '');
        bop.setAttribute('class', '');
        setTimeout(() => {
            info.setAttribute('class', 'info_flash');
            bop.setAttribute('class', 'info_flash');
        }, 2);
    }

    initInfo(currentNextBar.name, currentNextBar.address, currentNextBar.hours, currentNextBar.description, currentNextBar.link, currentNextBar.next, currentNextBar.pic);
    
    currentNextMarker.setIcon(bigIcon);
}


