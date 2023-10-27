
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
//import components
import OneStar from '../../components/OneStar/OneStar'
import HalfStar from '../../components/HalfStar/HalfStar'
import { getAllBusinesses } from '../../api/business'

import './DetailPage.css'

export default function DetailPage({ data }) {
    const { dataId } = useParams()
    const [heart,setHeart] = useState(false)
    console.log('dataId', dataId)
    console.log('datadetailpage:', data)

    const myChoice = data.filter((business) => business.id === dataId)
    console.log('HERE:', myChoice)

    useEffect(()=>{
        getAllBusinesses(dataId)
				.then(res =>{
                    console.log('res',res)
					if(res.data.businesses.length>0)setHeart(true)
                    else setHeart(false)
                    
						
				})
				.catch(err => {
                    console.log('the business is not a favorite')
                    setHeart(false)
                })
    },[])

    return (
        <>
            <div className="detailPageTop">
                <Link to='/'><svg id="goBackIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg></Link>
                <h1 className="detailTitle">{myChoice[0].name}</h1>
                {
                    heart ?
                    <svg 
                        
                        id='favIcon' 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className='w-14 h-14 fill-red'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>   
                :
                    <svg 
                        
                        id='favIcon' 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className='w-4 h-4 '>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                }
            </div>
            <div className="detailCard">
                < img src={myChoice[0].image_url} alt="image" />
                <h3>{myChoice[0].name}</h3>
                <div className='rating-priceDetailPage'>
                    <p>{myChoice[0].price}</p>
                    {(() => {
                        if (myChoice[0].rating === 1) {
                            return (
                                <span><OneStar /></span>
                            )
                        } else if (myChoice[0].rating === 1.5) {
                            return (
                                <span><OneStar /><HalfStar /></span>
                            )
                        } else if (myChoice[0].rating === 2) {
                            return (
                                <span><OneStar /><OneStar /></span>
                            )
                        } else if (myChoice[0].rating === 2.5) {
                            return (
                                <span><OneStar /><OneStar /><HalfStar /></span>
                            )
                        } else if (myChoice[0].rating === 3) {
                            return (
                                <span><OneStar /><OneStar /><OneStar /></span>
                            )
                        } else if (myChoice[0].rating === 3.5) {
                            return (
                                <span><OneStar /><OneStar /><OneStar /><HalfStar /></span>
                            )
                        } else if (myChoice[0].rating === 4) {
                            return (
                                <span><OneStar /><OneStar /><OneStar /><OneStar /></span>
                            )
                        } else if (myChoice[0].rating === 4.5) {
                            return (
                                <span><OneStar /><OneStar /><OneStar /><OneStar /><HalfStar /></span>
                            )
                        } else if (myChoice[0].rating === 5) {
                            return (
                                <span><OneStar /><OneStar /><OneStar /><OneStar /><OneStar /></span>
                            )
                        } else {
                            return (
                                <span> </span>
                            )
                        }
                    })()}
                </div>
                <p>Address: {myChoice[0].location.address1} {myChoice[0].location.address2}, {myChoice[0].location.city}, {myChoice[0].location.zip_code}</p>
                <p>Phone: {myChoice[0].phone}</p>
                <button id="categoriesDetail">{myChoice[0].categories[0].title}</button>
            </div>
            <a href={`${myChoice[0].url}`} id='yelpBtn' target='_blank'>OPEN IN YELP!</a>
        </>
    )
}