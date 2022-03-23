import './App.css';
import issIcon from './iss.svg';
import Axios from 'axios';
import { useState } from 'react';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';


function App() {
  const [iss, setIss] = useState("");

  const getISS = () => {
      Axios.get('http://api.open-notify.org/iss-now.json')
          .then((response) => {
              setIss(response.data.iss_position.longitude + "," + response.data.iss_position.latitude);
              
          })
  }

  return (
    <div className="App">
      <div className='bg-gray-900 min-h-screen flex flex-col items-center justify-center text-3xl text-white'>
        <img src={issIcon} alt="iss icon" className='max-w-xs'></img>
        <p>The current position of the ISS is:</p>
        {iss}
        <button onClick={getISS} className="text-blue-600 text-4xl">refresh</button>
        <br></br>
        <img src={'https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:' + iss + '&zoom=10&apiKey=8a0224c37cc043b9a81efb6b23adb8df'} alt="Please, hit the button `refresh` to show the map. (and wait almost 0.5s)" ></img>
      </div>
    </div>
  );
}

export default App;
