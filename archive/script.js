// Code goes here

var map = L.map("map").setView([53.596059752554929 , -2.436958332779917,], 6);
var geoson;
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(map);

function polystyle(feature) {
  return {
      fillColor: getColor(feature.properties.merged_farmers_updated),
      weight: 0.5,
      opacity: 1,
      color: 'grey',  //Outline color
      fillOpacity: 0.8
  };
}


  function getColor(d) {
    return d > 100  ? '#E31A1C' :
           d > 50  ? '#FC4E2A' :
           d > 20   ? '#FD8D3C' :
           d > 5   ? '#FEB24C' :
           d > 1   ? '#FED976' :
                      '#FFEDA0';
}

function highlightFeature(e) {
  var layer = e.target;
  info.update(layer.feature.properties);
  layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 1
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
  }
}
function resetHighlight(e) {
  info.update();
  geojson.resetStyle(e.target);
}
function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}
function onEachFeature(feature, layer) {
  layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature
  });
}
geojson = L.geoJSON(farmers, {style: polystyle,filter: county_filter,onEachFeature: onEachFeature
  
}).addTo(map);

function county_filter(feature) {
  if (feature.properties.merged_farmers_updated !== null) return true
}

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>No. farmers updated</h4>' +  (props ?
        '<b>' + props.R_SDIST + '</b><br />' + props.merged_farmers_updated + ' updated'
        : 'Hover over a sub registration district');
};

info.addTo(map);

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [1, 5, 20, 50, 100],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);

