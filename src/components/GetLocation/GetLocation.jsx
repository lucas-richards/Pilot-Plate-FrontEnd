import {useState, useEffect} from 'react'
import "./GetLocation.css"

export default function GetLocation({setLocationValue}){
    const [loadToggle, setLoadToggle] = useState(false)
    const [runtime, setRuntime] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)

useEffect(() => {
    if(runtime === 0) {
        //do nothing
        //console.log("first render")
    } else {
        //console.log("useEffect in Effect")
        getCity()
    }
},[latitude && longitude])

const handleClick=() => {
  if(latitude === 0) {
        setLoadToggle(!loadToggle)
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    console.log("Geolocation is not supported by this browser.")
  }
}

function showPosition(position) {
    setRuntime(1)
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
    //console.log("Latitude: " + position.coords.latitude)
    //console.log("Longitude: " + position.coords.longitude)
    //if(latitude !== 0)getCity()
}


const getCity = async function(){
    try{
        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const city = data.locality
            //console.log(city)
            //console.log(data)
            setLocationValue(city)
            setLoadToggle(!loadToggle)
        } else {
            console.log('Failed to fetch city data');
        }
    }
    catch{
        console.log('error fetching city')
    } 
}

    return (
        <>
            <button className="useLocationBtn" onClick={handleClick}>Use my location</button>
            {loadToggle ? "Loading..":  ""}
        </>

    )
}
