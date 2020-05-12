import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";
import styles  from './MapLayer.module.css';

export const icon = new Icon({
  iconUrl: '/signs.svg',
  iconSize: [25, 25]
});


const MapLayer = ({data: {lat, lon}}) => {


      return (
        (lat && lon) ? (
        <div className={styles.container}>
        <Map 
            center={[lat, lon]} 
            zoom='13' 
            style={{ width: '50%', height: '400px'}}
        >
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lon]}  icon={icon}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
    
        </Map>
        </div> ) : null
      )
   
}

export default MapLayer;