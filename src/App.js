import './App.css';
// import {google} from 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAnzlq9yYSHWTqiw3BHC_utiL60Adf5MCI&callback=initMap'
import { useEffect } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { useRef } from 'react';
import { MarkerClusterer } from '@googlemaps/markerclusterer';

function WrapperComponent () {
  const ref = useRef()

  const locations = [
    { lat: -31.56391, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.75, lng: 145.116667 },
    { lat: -37.759859, lng: 145.128708 },
    { lat: -37.765015, lng: 145.133858 },
    { lat: -37.770104, lng: 145.143299 },
    { lat: -37.7737, lng: 145.145187 },
    { lat: -37.774785, lng: 145.137978 },
    { lat: -37.819616, lng: 144.968119 },
    { lat: -38.330766, lng: 144.695692 },
    { lat: -39.927193, lng: 175.053218 },
    { lat: -41.330162, lng: 174.865694 },
    { lat: -42.734358, lng: 147.439506 },
    { lat: -42.734358, lng: 147.501315 },
    { lat: -42.735258, lng: 147.438 },
    { lat: -43.999792, lng: 170.463352 },
  ];

  

  
  

  useEffect(() => {
    const handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
      infoWindow.setPosition(pos)
      infoWindow.setContent(
        browserHasGeolocation
          ? "Error: The Geolocation service failed"
          : "Error: Your browser doesn't support geolocation"
      )
      infoWindow.open(map)
    }

    const locationButton = document.createElement("button")

  locationButton.textContent = "Pan to Current Location"
  locationButton.classList.add("custom-map-control-button")
    const uluru = { lat: -25.344, lng: 131.031 }
    const map = new window.google.maps.Map(ref.current, {
      center: uluru,
      zoom: 4
    })
    const infoWindow = new window.google.maps.InfoWindow({
      content: "",
      disableAutoPan: true
    })
    map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(locationButton)
    locationButton.addEventListener("click", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }

            infoWindow.setPosition(pos)
            infoWindow.setContent("Location found")
            infoWindow.open(map)
            map.setCenter(pos)
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter())
          }
        )
      } else {
        handleLocationError(false, infoWindow, map.getCenter())
      }
    })
    // new window.google.maps.Marker({
    //   position: uluru,
    //   map: map
    // })
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const markers = locations.map((position, i) => {
      const label = labels[i % labels.length]
      const marker = new window.google.maps.Marker({
        position,
        label
      })

      marker.addListener("click", () => {
        infoWindow.setContent(label)
        infoWindow.open(map, marker)
      })
      return marker
    })

    // new MarkerClusterer({ markers, map })
  })
  return (
    <div ref={ref} id="map"></div>
  )
}

function App() {
 
  // const ref2 = useRef()

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

  // useEffect(() => {
  //   // window.initMap = initMap
  //   console.log(window.google.maps.Map)
  //   const uluru = { lat: -25.344, lng: 131.031 }
  //   console.log(ref2.current)
  //   new window.google.maps.Map(document.getElementById("map"), {
  //     center: uluru,
  //     zoom: 4
  //   })
  // }, [])
  return (
    <Wrapper apiKey={'AIzaSyAnzlq9yYSHWTqiw3BHC_utiL60Adf5MCI'}>
      <WrapperComponent />
    {/* <div className="App">
      <div ref={ref} id='map'></div>
      <div ref={ref2}></div>
      <header className="App-header">
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
      </header> 
    </div> */}
    </Wrapper>
  );
}

export default App;
