var gMap

function initMap() {

    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.6303, lng: 87.8539}, zoom: 3});

    //Adds marker for Silwad, Palestine
    var marker = new google.maps.Marker({position: {lat:31.9794, lng: 35.2619 }, map:gMap})
    marker.setIcon('https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png')

    var markertwo = new google.maps.Marker({position: {lat:41.6303, lng:-87.8539 }, map:gMap})

    

    var infoWindow = new google.maps.InfoWindow({content: 'Silwad, Palestine: Where I was born'})
    marker.addListener('click', function() {
        infoWindow.open(gMap, marker)
    })

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });


}

function updateGame() {
    console.log('function UpdateGame()');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    if (gMap.getBounds().contains({lat:31.9794,lng:35.2619})) {
        inBounds = true;
    }

    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}
