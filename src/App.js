import './App.css';
import issIcon from './iss.svg';
import Axios from 'axios';
import { useState } from 'react';


function App() {
  const [iss, setIss] = useState("");

  const getISS = () => {
      Axios.get('http://api.open-notify.org/iss-now.json')
          .then((response) => {
              setIss( "{" + response.data.iss_position.longitude + " ; " + response.data.iss_position.latitude + "}" );
          })
  }

  return (
    <div className="App">
      <div className='bg-gray-900 min-h-screen flex flex-col items-center justify-center text-3xl text-white'>
        <img src={issIcon} alt="iss icon" className='max-w-xs'></img>
        <p>The actual position of the ISS is:</p>
        {iss}
        <button onClick={getISS} className="text-blue-600 text-4xl">refresh</button>
          

      </div>
    </div>
  );
}

export default App;
