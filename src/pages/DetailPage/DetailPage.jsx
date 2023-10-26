import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getbusinesses } from '../../api/yelp_api'
import './DetailPage.css'

export default function DetailPage() {
    const { dataId } = useParams()
    console.log('dataId', dataId)
    const [data, setData] = useState([])
    const [location, setLocation] = useState('LA')
    const [price, setPrice] = useState(1)
    const [category, setCategory] = useState("Food")
    const [radius, setRadius] = useState(8000)
    useEffect(() => {
        getbusinesses(location, price, category, radius)
            .then(res => {
                console.log(res.data.businesses)
                setData(res.data.businesses)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])
    console.log('datadetailpage:', data)

    const myChoice = data.filter((business) => business.id === dataId)
    console.log('HERE:', myChoice)

    return (
        <>
            <h1 className="detailTitle">{myChoice[0].name}</h1>
            <div className="detailCard">
                < img src={myChoice[0].image_url} alt="image" />
                <h3>{myChoice[0].name}</h3>
                <p>rating: {myChoice[0].rating}</p>
                <p>{myChoice[0].price}</p>
                <p>{myChoice[0].location.address1}, {myChoice[0].location.address2}, {myChoice[0].location.city}, {myChoice[0].location.zip_code}</p>
                <p>{myChoice[0].phone}</p>
                <button id="categories">{myChoice[0].categories[0].title}</button>
            </div>
        </>
    )
}