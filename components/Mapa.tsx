import * as React from 'react';

import * as ol from 'openlayers';

import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";


export default function Mapa(){

  var iconFeature = new ol.Feature(new ol.geom.Point([0, 0]));
  var source = new ol.source.Vector({features: [iconFeature]});
  var marker = new custom.style.MarkerStyle(
    'https://openlayers.org/en/v4.0.1/examples/data/icon.png'
  );


  return(

    <div>
      <Map view={{center: [0, 0], zoom: 4}}>
          <Layers>
              <layer.Tile/>
              <layer.Vector source={source} style={marker.style} zIndex="1"/>
          </Layers>
          <Controls>
            <control.FullScreen />
          </Controls>
      </Map>
    </div>
  );
}