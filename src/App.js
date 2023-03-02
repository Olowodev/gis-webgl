import './App.css';
// import {google} from 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAnzlq9yYSHWTqiw3BHC_utiL60Adf5MCI&callback=initMap'
import { useEffect } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { useRef } from 'react';

function App() {
  const ref = useRef()

  // const initMap = () => {
  //   const uluru = { lat: -25.344, lng: 131.031 }
  //   const map = new google.maps.Map(document.getElementById("map"), {
  //     zoom: 4,
  //     center: uluru
  //   })
  //   new google.maps.Marker({
  //     position: uluru,
  //     map: map
  //   })
  // }

  useEffect(() => {
    // window.initMap = initMap
    console.log(window.google)
    const uluru = { lat: -25.344, lng: 131.031 }
    console.log(ref.current)
    new window.google.maps.Map(document.getElementById("map"), {
      center: uluru,
      zoom: 4
    })
  }, [])
  return (
    <Wrapper apiKey={'AIzaSyAnzlq9yYSHWTqiw3BHC_utiL60Adf5MCI'}>
    <div className="App">
      <div ref={ref} id='map'></div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </Wrapper>
  );
}

export default App;
