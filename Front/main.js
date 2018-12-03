function startMap() {
    const ironhackBCN = {
        lat: 20.5969379,
        lng: -100.3757306};
    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: ironhackBCN
      }
    );
  }
  
  startMap();