  function initMap() {
    
    const uluru = { lat: -23.230575065541107, lng: -46.69648081502864 };
    const map = new google.maps.Map(document.getElementById("googlemap"), {
      zoom: 4,
      center: uluru,
    });
    
    new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
