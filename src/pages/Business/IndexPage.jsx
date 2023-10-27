import { getAllBusinesses } from "../../api/business"
import { useState,useEffect } from "react"
import OneStar from '../../components/OneStar/OneStar'
import HalfStar from '../../components/HalfStar/HalfStar'
import './IndexPage.css'



export default function IndexPage({ msgAlert, user }) {
    
    const [businesses,setBusinesses] = useState([])

    useEffect(()=>{
        getAllBusinesses()
            .then(res => {
                console.log('All businesses',res.data.businesses)
                
                setBusinesses(res.data.businesses)
            })
            .catch(err => {
                msgAlert({
                    heading: 'Error getting Businesses',
                    variant: 'danger'
                })
                
            })
    },[])

    if(!user){
        return <p>Sign in to see your favorites restaurants</p>
    }

    if(businesses.length === 0){
        return <p>No businesses yet</p>
    }

    const businessCards = businesses.map(bus => (
        
        
        <div key={ bus._id } className="detailCard1">
                < img src={bus.image_url} alt="image" className="imgb" />
                <h3>{bus.name}</h3>
                <p>Address: {bus.display_address[0]} {bus.display_address[1]}</p>
                <p>Phone: {bus.display_phone}</p>
                <button id="yelpBtnIndex"><a href={bus.url} target="_blank">Go To Yelp</a></button>
                <button id="categoriesDetailIndex">{bus.categories[0].title}</button>
                
            </div>
            
    ))


    return(
        <>
        <br/>
        <br/>
        <div className="container-md">
            { businessCards }
        </div>
        <br/>
        <br/>
        </>
    )
}