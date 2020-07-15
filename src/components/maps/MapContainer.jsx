import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// export const MapContainer = () => {
//   const mapStyles = {
//     height: "80vh",
//     width: "150vh",
//   };

//   const defaultCenter = {
//     lat: 24.8607,
//     lng: 67.0011,
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyC3sd_lXxoh3ElacZ80qd5LwhOJGQYU0n8">
//       <GoogleMap
//         mapContainerStyle={mapStyles}
//         zoom={13}
//         center={defaultCenter}
//       />
//     </LoadScript>

//   );
// };
// ​
export const MapContainer = () => {

  const mapStyles = {
    height: "80vh",
    width: "150vh",
  };

  const defaultCenter = {
    lat: 34.0479,
    lng: 100.6197,
  };

  
  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 41.3954,
        lng: 2.162 
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 41.3917,
        lng: 2.1649
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 41.3773,
        lng: 2.1585
      },
    },
    {
      name: "Location 4",
      location: { 
        lat: 41.3797,
        lng: 2.1682
      },
    },
    {
      name: "Location 5",
      location: { 
        lat: 41.4055,
        lng: 2.1915
      },
    }
  ];
  
  return (
    <LoadScript googleMapsApiKey="AIzaSyC3sd_lXxoh3ElacZ80qd5LwhOJGQYU0n8">

        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
     </GoogleMap>
     </LoadScript>
  )
}
