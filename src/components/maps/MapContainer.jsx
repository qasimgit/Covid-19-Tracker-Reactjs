import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


export const MapContainer = () => {

  const mapStyles = {
    height: "80vh",
    width: "150vh",
  };

  const defaultCenter = {
    lat: 30.3753,
    lng: 69.3451,
  };

  
  const locations = [
    {
      name: "PAKISTAN",
      location: { 
        lat: 30.3753,
        lng: 69.3451, 
      },
    },
    {  
      name: "INDIA",
      location: { 
        lat: 20.5937,
        lng: 78.9629
      },
    },
    {
      name: "CHINA",
      location: { 
        lat: 35.8617,
        lng: 104.1954
      },
    },
    {
      name: "RUSSIA",
      location: { 
        lat: 61.5240,
        lng: 105.3188
      },
    },
    {
      name: "SRILANKA",
      location: { 
        lat: 7.8731,
        lng: 80.7718
      },
    },
    {
      name: "IRAN",
      location: { 
        lat: 32.4279,
        lng: 53.6880
      },
    },
    {
      name: "NEPAL",
      location: { 
        lat: 28.3949,
        lng: 84.1240
      },
    },
    {
      name: "AFGHANISTAN",
      location: { 
        lat: 33.9391,
        lng: 67.7100
      },
    },
    {
      name: "TAJIKISTAN",
      location: { 
        lat: 38.8610,
        lng: 71.2761
      },
    }
  ];
  
  return (
    <LoadScript googleMapsApiKey="AIzaSyC3sd_lXxoh3ElacZ80qd5LwhOJGQYU0n8">

        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={5}
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
