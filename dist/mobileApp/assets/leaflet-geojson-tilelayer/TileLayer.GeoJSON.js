L.GridLayer.GeoJSON = L.GridLayer.extend({
    options: {
      minZoom: 0,
      maxZoom: 18,
      subdomains: 'abc',
      zoomReverse: false,
      zoomOffset: 0,
      tileSize : 256
    },
    // _map: {},
    _application_options: {},
    initialize: function (url, options, application_options) {
      L.GridLayer.prototype.initialize.apply(this, arguments);
      this._url = url;
      this._application_options = application_options;
      options = L.Util.setOptions(this, options);
  
      if (typeof options.subdomains === 'string') {
        options.subdomains = options.subdomains.split('');
      }
  
      this.on('tileunload', function (event) {
        event.tile.layer && event.tile.layer.remove();
        event.tile.req.abort();
      });
    },
    getTileUrl: L.TileLayer.prototype.getTileUrl,
    _getSubdomain: L.TileLayer.prototype._getSubdomain,
    _getZoomForUrl: L.TileLayer.prototype._getZoomForUrl,
    //_requests: [],
    // XMLHttpRequest handler; closure over the XHR object, the layer, and the tile
    _xhrHandler: function (req, layer, tile, tilePoint, done, map, application_options) {
      return function () {
        if (req.readyState !== 4) {
          return;
        }
        var s = req.status;
        if ((s >= 200 && s < 300 && s != 204) || s === 304) {
          tile.datum = JSON.parse(req.responseText);
          
          tile.layer = L.geoJSON(tile.datum, {
            pane: 'popUpGeoJson',
              pointToLayer: (feature, latlng) => {
              latlng = new L.LatLng(feature.properties.latitude, feature.properties.longitude);
              let label = String('<a ng-click="def()" class="maptooltip" style="' + application_options.color +'!important">' + feature.properties.display_name +
                  '</a>');
              if(feature.properties.business_data[application_options.time_stamp]!= undefined && feature.properties.business_data[application_options.time_stamp][application_options.component_type] != undefined){

                label = label + String('<p style="' + application_options.color +' !important;text-align:center">' + (feature.properties.business_data[application_options.time_stamp][application_options.component_type]).toFixed(1) + application_options.component_measure_unit + '</p>');
              }
              var marker = new L.CircleMarker(latlng, { radius: 0, color: 'transparent' ,pane:"popUp"}).addTo(map);
              var t = L.tooltip({permanent: true, interactive:true, direction : 'center'}, marker).setLatLng(latlng)
                                                                .setContent(label)
                                                                .addTo(map);
              marker.bindTooltip(t);
              marker.on('click', function(e){
                  if(application_options.gis.clickedLocationMarker!=null && application_options.gis.clickedLocationMarker!=undefined){
                    application_options.gis.clickedLocationMarker.unbindTooltip()
                    application_options.gis.clickedLocationMarker.bindTooltip(application_options.gis.clickedLocationTooltip)
                    application_options.gis.clickedLocationMarker = null
                  }
                  application_options.gis.clickedLocationMarker = marker;
                  application_options.gis.clickedLocationTooltip = marker.getTooltip(); 
                  marker.unbindTooltip()
                  var labelAfterClick = String('<a ng-click="def()" class="maptooltip" style="' + application_options.color +'!important">' + feature.properties.display_name +
                  '</a>');
                  var tAfterClick = L.tooltip({permanent: true, interactive:true, direction : 'center', offset : new L.Point(0, 15)}, marker).setLatLng(latlng)
                                                                .setContent(labelAfterClick)
                                                                .addTo(map);
                  marker.bindTooltip(tAfterClick);
                  application_options.gis.bottomBarColumns = ['Component'];
                  if (application_options.gis.marker) {
                    // Highcharts.chart('container1', application_options.gis.chartOptions).destroy();
                  }
                  application_options.gis.selectedLocation = feature.properties.display_name;
                  let postData = {}
                  postData['source'] = 'IMD_SHORT_RANGE';
                  postData['location_uuid'] = feature.properties.location_uuid;
                  postData['location_type'] = "CITY";
                  if (application_options.gis.adminSelected) {
                    postData['view'] = 'Admin';
                  } else {
                    postData['view'] = 'Basin';
                  }
                  postData['forecastLength'] = application_options.gis.forecastLength;
                  apiParams = {};
                  apiParams['url'] = 'CITIESDATA';
                  apiParams['postData'] = postData;
                  application_options.gis.openBottomBar(apiParams,'forecast');
                  var myIcon = L.divIcon({ className: 'icon-dot', html: '<div class="pulsating-icon repeat"></div>' });
                  var markerOptions = {
                    icon: myIcon,
                    pane: 'popUp'
                  }
                  if(application_options.gis.map.hasLayer(application_options.gis.marker)){
                    application_options.gis.map.removeLayer(application_options.gis.marker);
                  }
                  application_options.gis.marker = L.marker([latlng.lat, latlng.lng], markerOptions).addTo(application_options.gis.map)
              });
              return marker;
            }
            // }
          }).addTo(map);
          done();
        } else {
          // layer._tileLoaded(tile, tilePoint);
        }
      };
    },
    createTile: function (coords, done) {
      var tile = document.createElement('div');
      var layer = this;
      var req = new XMLHttpRequest();
      // this._requests.push(req);
      tile.req = req;
      req.onreadystatechange = this._xhrHandler(req, layer, tile, coords, done, this._map, this._application_options);
      req.open('GET', this.getTileUrl(coords), true);
      req.send();
      return tile;
    }
  });