      // const bounds = new google.maps.LatLngBounds(
    //     new google.maps.LatLng(40.788882014610316, -73.94062489948102),
    //     new google.maps.LatLng(40.67704769503717, -74.05299816586422)
       
    // );

    // const image = "assets/dive_map.png"
  
  
  // class USGSOverlay extends google.maps.OverlayView {
    //     bounds;
    //     image;
    //     div;
    //     constructor(bounds, image) {
    //         super();
    //         this.bounds = bounds;
    //         this.image = image;
    //     }
    //     /**
    //      * onAdd is called when the map's panes are ready and the overlay has been
    //      * added to the map.
    //      */
    //     onAdd() {
    //         this.div = document.createElement("div");
    //         this.div.classList.add('overlay');
    //         this.div.style.borderStyle = "none";
    //         this.div.style.borderWidth = "0px";
    //         // this.div.style.position = "absolute";
    //         // this.div.style.top = "0";
    //         // this.div.style.left = "0";
    //         // this.div.style.width = "520px";
    //         // this.div.style.height = "530px";

    //         // Create the img element and attach it to the div.
    //         const img = document.createElement("img");

    //         img.src = this.image;
    //         img.style.width = "600px";
    //         img.style.height = "600px";
    //         // img.style.position = "absolute";
    //         this.div.appendChild(img);

    //         // Add the element to the "overlayLayer" pane.
    //         const panes = this.getPanes();
    //         panes.overlayLayer.style.left = "-300px";
    //         panes.overlayLayer.style.top = "-300px";
    //         panes.overlayLayer.appendChild(this.div);
          
    //     }
    //     draw() {
    //         // We use the south-west and north-east
    //         // coordinates of the overlay to peg it to the correct position and size.
    //         // To do this, we need to retrieve the projection from the overlay.
    //         const overlayProjection = this.getProjection();
    //         // Retrieve the south-west and north-east coordinates of this overlay
    //         // in LatLngs and convert them to pixel coordinates.
    //         // We'll use these coordinates to resize the div.
    //         const sw = overlayProjection.fromLatLngToDivPixel(
    //         this.bounds.getSouthWest()
    //         );
    //         const ne = overlayProjection.fromLatLngToDivPixel(
    //         this.bounds.getNorthEast()
    //         );

    //         // Resize the image's div to fit the indicated dimensions.
    //         if (this.div) {
    //         this.div.style.left = sw.x + "px";
    //         this.div.style.top = ne.y + "px";
    //         this.div.style.width = ne.x - sw.x + "px";
    //         this.div.style.height = sw.y - ne.y + "px";
    //         }
    //     }
    // }
    // const overlay = new USGSOverlay(bounds, image);

    // overlay.setMap(map);