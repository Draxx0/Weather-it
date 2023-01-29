const navigatorLocalisationData = (setLat, setLon) => {
  navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  });
};

export default navigatorLocalisationData;
