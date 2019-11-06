import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"Map"
         }
    }
    
    render() { 
        return ( 
        <div>
            <Map google={this.props.google} zoom={14}>
              <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
                <InfoWindow onClose={this.onInfoWindowClose}>
                </InfoWindow>
             </Map>
        </div>
         );
    }
}
 
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBU8aEIdHyhme4WZZ4cqbY1jGAjcTQZ0OY')
  })(App1)