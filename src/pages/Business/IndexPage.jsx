import { getAllBusinesses } from "../../api/business"
import { useState,useEffect } from "react"
import OneStar from '../../components/OneStar/OneStar'
import HalfStar from '../../components/HalfStar/HalfStar'
import './IndexPage.css'
import FavoriteBusiness from "../../components/business/FavoriteBusiness"
import {removeBusiness} from "../../api/business"



export default function IndexPage({ msgAlert, user }) {
    
    const [businesses,setBusinesses] = useState([])

    useEffect(()=>{
        getAllBusinesses()
            .then(res => {
                console.log('All businesses',res.data.businesses)
                console.log('this is user',user)
                setBusinesses(res.data.businesses.filter(business => business.owner._id === user._id))
            })
            .catch(err => {
                console.log('error',err)
                
            })
    },[])

    const handleClick = (id) => {
        //delete from database
        removeBusiness(user, id)
        //set state with out the business with the id that was just removed and re-render without it
        setBusinesses(businesses.filter(bus => bus.yelp_id !== id))
     }

    if(!user){
        return <p className="addMargin">Sign in to see your favorites restaurants</p>
    }

    console.log('owner businesses',businesses)

    if(businesses.length === 0){
        return <p className="addMargin">No businesses yet</p>
    }

   

    const businessCards = businesses.map(bus => (
        
        
        <div key={ bus._id } className="detailCard1">
                < img src={bus.image_url} alt="image" className="imgb" />
                <h3>{bus.name}</h3>
                <p>Address: {bus.display_address[0]} {bus.display_address[1]}</p>
                <p>Phone: {bus.display_phone}</p>
                <button id="yelpBtnIndex"><a href={bus.url} target="_blank">Go To Yelp</a></button>
                <button id="categoriesDetailIndex">{bus.categories[0].title}</button>
                <svg 
                        onClick={() => handleClick(bus.yelp_id)}
                        id='favIcon' 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className='w-14 h-14 fill-red'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>  
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