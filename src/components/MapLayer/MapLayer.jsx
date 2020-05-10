import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";
import styles  from './MapLayer.module.css';

export const icon = new Icon({
  iconUrl: '/skateboarding.svg',
  iconSize: [25, 25]
});
 
class MapLayer extends React.Component {
  
  state = {
      lat: 27.72,
      lng: 85.32,
      zoom: 13,
  }
  render() {
    console.log(this.props.data.coord);
    // console.log(icon);
      return (
        this.props.data ? 
        <div className={styles.container}>
        <Map 
            center={[this.state.lat, this.state.lng]} 
            zoom={this.state.zoom} 
            style={{ width: '90%', height: '900px'}}
        >
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={this.state} icon={icon}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
    
        </Map>
        </div>
        : 'Data is loading...'
       )
   }
}

export default MapLayer;