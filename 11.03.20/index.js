let map;
let latitude;
let longitude;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//     styles: [
//       { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
//       { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
//       { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
//       {
//         featureType: 'administrative.locality',
//         elementType: 'labels.text.fill',
//         stylers: [{ color: '#d59563' }],
//       },
//       {
//         featureType: 'poi',
//         elementType: 'labels.text.fill',
//         stylers: [{ color: '#d59563' }],
//       },
//       {
//         featureType: 'poi.park',
//         elementType: 'geometry',
//         stylers: [{ color: '#263c3f' }],
//       },
//       {
//         featureType: 'poi.park',
//         elementType: 'labels.text.fill',
//         stylers: [{ color: '#6b9a76' }],
//       },
//       {
//         featureType: 'road',
//         elementType: 'geometry',
//         stylers: [{ color: '#38414e' }],
//       },
//       {
//         featureType: 'road',
//         elementType: 'geometry.stroke',
//         stylers: [{ color: '#212a37' }],
//       },
//       {
//         featureType: 'road',
//         elementType: 'labels.text.fill',
//         stylers: [{ color: '#9ca5b3' }],
//       },
//       {
//         featureType: 'road.highway',
//         elementType: 'geometry',
//         stylers: [{ color: '#746855' }],
//       },
//       {
//         featureType: 'road.highway',
//         elementType: 'geometry.stroke',
//         stylers: [{ color: '#1f2835' }],
//       },
//       {
//         featureType: 'road.highway',
//         elementType: 'labels.text.fill',
//         stylers: [{ color: '#f3d19c' }],
//       },
//       {
//         featureType: 'transit',
//         elementType: 'geometry',
//         stylers: [{ color: '#2f3948' }],
//       },
//       {
//         featureType: 'transit.station',
//         elementType: 'labels.text.fill',
//         stylers: [{ color: '#d59563' }],
//       },
//       {
//         featureType: 'water',
//         elementType: 'geometry',
//         stylers: [{ color: '#17263c' }],
//       },
//       {
//         featureType: 'water',
//         elementType: 'labels.text.fill',
//         stylers: [{ color: '#515c6d' }],
//       },
//       {
//         featureType: 'water',
//         elementType: 'labels.text.stroke',
//         stylers: [{ color: '#17263c' }],
//       },
//     ],
//   });
// }
async function blabla() {
  geo = navigator.geolocation.getPosition(position => {
    geo = position;
    latitude = geo.coords.latitude;
    longitude = geo.coords.longitude;
  });
}

const getNavigation = new Promise(resolve => {
  navigator.geolocation.getCurrentPosition(position => {
    geo = position;
    latitude = geo.coords.latitude;
    longitude = geo.coords.longitude;

    resolve([latitude, longitude]);
  });
});
// // async function geo() {
// //   let geo = await navigator.geolocation.watchPosition(
// //     position => (geo = position),
// //   );
// //   console.log(await geo);
// // }
// // geo();
async function initMap() {
  // The location of Uluru
  const cors = await getNavigation;
  var uluru = { lat: cors[0], lng: cors[1] };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }],
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }],
      },
    ],
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}
