import React, { Component } from 'react';
import { loadGoogleMap, googlePlace } from './lib/loadGoogleMap';
import breadData from './data';
import axios from 'axios';
import Search from './components/search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: breadData.results,
    };
  }

  getSearchData = (event) => {
    const targetValue = event.target.value;
    console.log(targetValue);
    axios.get( `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${targetValue}&location=37.502196,127.033027&radius=2000&key=AIzaSyADM2ER7rHDGJs7drMA78l3aXxik3QRDGc`)
      .then(res => {
        console.log(res)
      })
    // googlePlace.then(() => {
    //   const center = {lat: 37.502196, lng: 127.033027};
    //   let map = new window.google.maps
    // })

  }

  componentDidMount() {
    loadGoogleMap().then(() => {
      const center = {lat: 37.502196, lng: 127.033027};
      var map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center,
      });

      var marker = new window.google.maps.Marker({
          position: center,
          map: map
        });
    });
    // body에 script를 넣어놓은 상태
  }

  render() {
    return (
      <div className="App">
        <Search getValue={this.getSearchData} />
        {console.log(this.state.data)}
        <div id="map" />
      </div>
    );
  }
}

export default App;
