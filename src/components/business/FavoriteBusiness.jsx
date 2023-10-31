import { useEffect, useState } from "react"
import { getAllBusinesses, removeBusiness, createBusiness } from "../../api/business"
import './FavoriteBusiness.css'

export default function FavoriteBusiness({ data, msgAlert, user, spin }) {
    const [heart,setHeart] = useState(false)
    console.log('data',data)
    
    const [newBusiness,setNewBusiness] = useState({
        name: '',
		yelp_id: '',
		image_url: '',
		price: 0,
		categories: '',
		favorite: true,
		distance:0,
		url: '',
		display_address:'',
		display_phone:''
    })

    useEffect(()=>{
        getAllBusinesses(data.id)
				.then(res =>{
                    console.log('res',res)
                    const businesses = res.data.businesses.filter(business => business.owner._id === user._id)
					console.log('this is the owner business',businesses)
                    if(businesses.length>0)setHeart(true)
                    else setHeart(false)
                    
                    setNewBusiness({
                        name: data.name,
                        yelp_id: data.id,
                        image_url: data.image_url,
                        price: data.price.length,
                        categories: data.categories[0],
                        favorite: true,
                        distance:data.distance,
                        url: data.url,
                        display_address:data.location.display_address,
                        display_phone:data.display_phone
                    })
                   console.log('this is the new business',newBusiness)
						
				})
				.catch(err => {
                    console.log('the business is not a favorite')
                    setHeart(false)
                })
    },[spin])
    console.log('heart',heart)
    const handleClick = (e) => {
        if(!user) {
            console.log("NO USER")
        }
        else if(heart){
            removeBusiness(user,data.id)
            .then(res=>{
                setHeart(false)
            })
        }
        else {
            
            createBusiness(user, newBusiness)
                .then(res=>{
                    console.log('the business was added')
                    setHeart(true)
                })
                .catch(err => {
                    console.log('issues adding business',err)
                })


        }
    }

        return(
            <>
            
                {
                    heart ?
                    <svg 
                        onClick={handleClick}
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
                        onClick={handleClick}
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
            </>
        )
}