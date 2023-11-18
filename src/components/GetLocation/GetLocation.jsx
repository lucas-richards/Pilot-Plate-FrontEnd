import {useState} from 'react'


export default function GetLocation({setLocationValue}){
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)


const handleClick=() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    console.log("Geolocation is not supported by this browser.")
  }
}

function showPosition(position) {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
    console.log("Latitude: " + position.coords.latitude)
    console.log("Longitude: " + position.coords.longitude)
    if(latitude !== 0)getCity()
}


const getCity = async function(){
    try{
        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const city = data.locality
            setLocationValue(city)
            
        } else {
            console.log('Failed to fetch city data');
        }

    }
    catch{
        console.log('error fetching city')
    } 

}




    return (
        <button onClick={handleClick}>Use my location</button>

    )
}