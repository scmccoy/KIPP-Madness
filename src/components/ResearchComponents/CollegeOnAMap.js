import React from 'react';
// import axios from 'axios';
import GoogleMapReact from 'google-map-react';
// import Marker from 'google-map-react';

const BballComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'transparent', background: 'transparent',
    height: 30, width: 30, top: -10, left: -75,
  }}>
    <img src={require('../../styles/images/bball-placeholder.png')} alt={"basketball"}/>
    {text}
  </div>
);


class CollegeOnAMap extends React.Component {


      render() {
        const props = {
        center: {lat:this.props.lat, lng:this.props.lng},
        zoom: 5
      }


        return (
          <GoogleMapReact center={props.center} defaultZoom={props.zoom} >
            <BballComponent
               lat={this.props.lat}
               lng={this.props.lng}
               text={''}
             />
         </GoogleMapReact>
          );
        }
    }


export default CollegeOnAMap;
