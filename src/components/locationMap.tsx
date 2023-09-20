// Copyright 2023 Josilyn McGuinness
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import { useEffect, useState } from "react";

interface Geometry {
  location: { lat: number, lng: number },
  location_type: string,
  viewport?: { 
    northeast: { lat: number, lng: number },
    southwest: { lat: number, lng: number }
  }
}

const Map = ({ location }: { location: string }) => {
  const [mapInfo, setMapInfo] = useState<Geometry | undefined>(undefined);
  const key = import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY
  const formatAddress = location.replace(/,\s|,|\s/g, "%20")
  console.log(formatAddress)
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${formatAddress}&key=${key}`
  
  useEffect(() => {
    axios.get(url)
    .then(resp => resp.data)
    .then(data => {
      const loc = data.results[0]
      const geo = loc["geometry"];
      geo.lat = mapInfo?.location.lat
      geo.lng = mapInfo?.location.lng
      setMapInfo(geo)
    })
    .catch(error => console.log(error))
  }, [url,setMapInfo, mapInfo?.location.lat, mapInfo?.location.lng])
  
  useEffect(() => {
    console.log("Object: " + JSON.stringify(mapInfo?.location))
  },[mapInfo])

  const { isLoaded } = useLoadScript({ googleMapsApiKey: key });
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <GoogleMap zoom={17} center={mapInfo?.location} mapContainerClassName="map-container">
      {mapInfo ? <Marker position={mapInfo.location}/> : null}
    </GoogleMap>
  );
}

export default Map;