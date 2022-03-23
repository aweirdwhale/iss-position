import './App.css';
import issIcon from './iss.svg';
import Axios from 'axios';
import { useState } from 'react';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';


function App() {
  const [iss, setIss, setImage] = useState("");

  const getISS = () => {
      Axios.get('http://api.open-notify.org/iss-now.json')
          .then((response) => {
              setIss( "{" + response.data.iss_position.longitude + " ; " + response.data.iss_position.latitude + "}");
              
          })
  }

  function image() {
    Axios.get('http://api.open-notify.org/iss-now.json')
        .then((response) => {
          var lon = response.data.iss_position.longitude;
          var lat = response.data.iss_position.latitude;
          var link = 'https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:' + lon + ',' + lat + '&zoom=14&apiKey=8a0224c37cc043b9a81efb6b23adb8df';
          return link;
        })
  }

  return (
    <div className="App">
      <div className='bg-gray-900 min-h-screen flex flex-col items-center justify-center text-3xl text-white'>
        <img src={issIcon} alt="iss icon" className='max-w-xs'></img>
        <p>The actual position of the ISS is:</p>
        {iss.setIss}
        <button onClick={getISS} className="text-blue-600 text-4xl">refresh</button>
        <br></br>
        <img src={/*HELP!*/} alt="iss map"></img>
      </div>
    </div>
  );
}

export default App;
