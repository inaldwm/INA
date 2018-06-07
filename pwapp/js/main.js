
function myFunction() {

    myVar = setTimeout(showPage, 500);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

/**************************************************************/

function initMap() {
	
	
	
   // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 13,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(48.85709053658976,2.3531843134522887), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [ { "featureType": "administrative", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#e0bf80" } ] }, { "featureType": "administrative.country", "elementType": "labels.text", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [ { "color": "#e0bf80" } ] }, { "featureType": "administrative.locality", "elementType": "all", "stylers": [ { "visibility": "simplified" }, { "color": "#e0bf80" } ] }, { "featureType": "administrative.neighborhood", "elementType": "all", "stylers": [ { "color": "#e0bf80" } ] }, { "featureType": "administrative.land_parcel", "elementType": "all", "stylers": [ { "color": "#e0bf80" }, { "lightness": "0" }, { "gamma": "1.00" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#f3ede1" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.attraction", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi.attraction", "elementType": "labels.text", "stylers": [ { "color": "#e0bf80" }, { "visibility": "simplified" } ] }, { "featureType": "poi.attraction", "elementType": "labels.icon", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi.business", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi.business", "elementType": "labels.text.fill", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.government", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi.park", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi.place_of_worship", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": 45 }, { "visibility": "on" }, { "hue": "#ff0000" } ] }, { "featureType": "road", "elementType": "labels.text", "stylers": [ { "color": "#e0bf80" }, { "visibility": "simplified" } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified" }, { "color": "#ffffff" } ] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [ { "color": "#e0bf80" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit.line", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "transit.line", "elementType": "labels.text", "stylers": [ { "color": "#e0bf80" }, { "visibility": "on" } ] }, { "featureType": "transit.station", "elementType": "labels.text", "stylers": [ { "color": "#e0bf80" }, { "visibility": "simplified" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#46bcec" }, { "visibility": "on" } ] } ]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

/*
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Vous êtes ici');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }*/
}
   
   var customLabel = {
        monument: {
          label: 'M'
		  
        },
        GratteCiel: {
          label: 'G'
        },
		 stade: {
          label: 'S'
	 
        }
      };
function initMapGame() {
	
	
	
   // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 13,

                    // The latitude and longitude to center the map (always required)
                     center: new google.maps.LatLng(48.85709053658976,2.3531843134522887), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [ { "featureType": "administrative", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#e0bf80" } ] }, { "featureType": "administrative.country", "elementType": "labels.text", "stylers": [ { "visibility": "on" } ] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [ { "color": "#e0bf80" } ] }, { "featureType": "administrative.locality", "elementType": "all", "stylers": [ { "visibility": "simplified" }, { "color": "#e0bf80" } ] }, { "featureType": "administrative.neighborhood", "elementType": "all", "stylers": [ { "color": "#e0bf80" } ] }, { "featureType": "administrative.land_parcel", "elementType": "all", "stylers": [ { "color": "#e0bf80" }, { "lightness": "0" }, { "gamma": "1.00" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#f3ede1" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.attraction", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi.attraction", "elementType": "labels.text", "stylers": [ { "color": "#e0bf80" }, { "visibility": "simplified" } ] }, { "featureType": "poi.attraction", "elementType": "labels.icon", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi.business", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi.business", "elementType": "labels.text.fill", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.government", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi.park", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi.place_of_worship", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": 45 }, { "visibility": "on" }, { "hue": "#ff0000" } ] }, { "featureType": "road", "elementType": "labels.text", "stylers": [ { "color": "#e0bf80" }, { "visibility": "simplified" } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified" }, { "color": "#ffffff" } ] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [ { "color": "#e0bf80" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit.line", "elementType": "all", "stylers": [ { "visibility": "on" } ] }, { "featureType": "transit.line", "elementType": "labels.text", "stylers": [ { "color": "#e0bf80" }, { "visibility": "on" } ] }, { "featureType": "transit.station", "elementType": "labels.text", "stylers": [ { "color": "#e0bf80" }, { "visibility": "simplified" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#46bcec" }, { "visibility": "on" } ] } ]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

               
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Vous êtes ici');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  
          // Change this depending on the name of your PHP or XML file
          downloadUrl('pins.php', function(data) {
            var xml = data.responseXML;
            var markers = xml.documentElement.getElementsByTagName('marker');
            Array.prototype.forEach.call(markers, function(markerElem) {
              var name = markerElem.getAttribute('name');
              var address = markerElem.getAttribute('address');
              var type = markerElem.getAttribute('type');
              var point = new google.maps.LatLng(
                  parseFloat(markerElem.getAttribute('lat')),
                  parseFloat(markerElem.getAttribute('lng')));

              var infowincontent = document.createElement('div');
              var strong = document.createElement('strong');
              strong.textContent = name
              infowincontent.appendChild(strong);
              infowincontent.appendChild(document.createElement('br'));

              var text = document.createElement('text');
              text.textContent = address
              infowincontent.appendChild(text);
              var icon = customLabel[type] || {};
              var marker = new google.maps.Marker({
                map: map,
                position: point,
                label: icon.label
              });
              marker.addListener('click', function() {
                infoWindow.setContent(infowincontent);
                infoWindow.open(map, marker);
              });
            });
          });
        }



      function downloadUrl(url, callback) {
        var request = window.ActiveXObject ?
            new ActiveXObject('Microsoft.XMLHTTP') :
            new XMLHttpRequest;

        request.onreadystatechange = function() {
          if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request, request.status);
          }
        };

        request.open('GET', url, true);
        request.send(null);
      }

      function doNothing() {}




function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

function getMakerData(){
	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';


   var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400),
                    map: map,
                    title: 'Snazzy!'});
					
   }
   
   
   
   
   
   
   
   
   
   
   
   
   