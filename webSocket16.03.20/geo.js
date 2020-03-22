// import { backData } from './index.js';
let map;

const getNavigation = new Promise(resolve => {
  navigator.geolocation.getCurrentPosition(position => {
    let geo = position;
    const latitude = geo.coords.latitude;
    const longitude = geo.coords.longitude;

    resolve([latitude, longitude]);
  });
});

const launchMap = async function initMap() {
  const cors = await getNavigation;

  let uluru = { lat: cors[0], lng: cors[1] };

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: uluru,
  });
  new google.maps.Marker({ position: uluru, map: map });
  return uluru;
};
function newUser(backData) {
  new google.maps.Marker({ position: backData, map: map });
}
export { getNavigation, launchMap, newUser };
