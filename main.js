let map

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.048960245448107, lng: 30.048960245448107 },
    zoom: 8,
    mapId: "90827bd74f6e05cf",
  })

  new google.maps.Marker({
    position: { lat: 30.03777624237361, lng: 31.253073760485755 },
    map,
    title: "Zalat 21",
  })

  new google.maps.Marker({
    position: { lat: 30.03411791744902, lng: 31.24187301282231 },
    map,
    title: "Zalat roxi",
  })
}

// 30.048960245448107, 31.23975844721226
// 30.03411791744902, 31.24187301282231
