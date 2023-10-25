//import modules
import { useState } from 'react'

//import stylesheet
import './Carousel.css'

export default function Carousel({ data, location, price }) {

    console.log('HERE',data)
    // to select random number for each eard when button is clicked
    const [randomNumber1, setRandomNumber1] = useState(0)
    const [randomNumber2, setRandomNumber2] = useState(0)
    const [randomNumber3, setRandomNumber3] = useState(0)
    // to show card flip animation when clicked
    const [spin, setSpin] = useState(false)

    // functions for generating random number
    const generateRandomNumber1 = () => {
        let randomNumber1 = Math.floor(Math.random() * data.length)
        setRandomNumber1(randomNumber1)
    }
    const generateRandomNumber2 = () => {
        let randomNumber2 = Math.floor(Math.random() * data.length)
        setRandomNumber2(randomNumber2)
    }
    const generateRandomNumber3 = () => {
        let randomNumber3 = Math.floor(Math.random() * data.length)
        setRandomNumber3(randomNumber3)
    }

    // function for animation on click
    const animate = () => {
        setSpin(true)
        setTimeout(() => setSpin(false), 300)
    }

    let testData = [
        {
            "id": "veq1Bl1DW3UWMekZJUsG1Q",
            "alias": "gramercy-tavern-new-york",
            "name": "Gramercy Tavern",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/f14WAmWETi0cu2f6rUBj-Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/gramercy-tavern-new-york?adjust_creative=b3N-zNbQp78cgDTeOLeU1w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=b3N-zNbQp78cgDTeOLeU1w",
            "review_count": 3403,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.73844,
                "longitude": -73.98825
            },
            "transactions": [
                "delivery"
            ],
            "price": "$$$$",
            "location": {
                "address1": "42 E 20th St",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10003",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "42 E 20th St",
                    "New York, NY 10003"
                ]
            },
            "phone": "+12124770777",
            "display_phone": "(212) 477-0777",
            "distance": 3695.6399277648
        },
        {
            "id": "ysqgdbSrezXgVwER2kQWKA",
            "alias": "julianas-brooklyn-3",
            "name": "Juliana's",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/od36nFW220aMFAnNP00ocw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/julianas-brooklyn-3?adjust_creative=b3N-zNbQp78cgDTeOLeU1w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=b3N-zNbQp78cgDTeOLeU1w",
            "review_count": 2701,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.70274718768062,
                "longitude": -73.99343490196397
            },
            "transactions": [
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "19 Old Fulton St",
                "address2": "",
                "address3": "",
                "city": "Brooklyn",
                "zip_code": "11201",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "19 Old Fulton St",
                    "Brooklyn, NY 11201"
                ]
            },
            "phone": "+17185966700",
            "display_phone": "(718) 596-6700",
            "distance": 318.8762608116642
        },
        {
            "id": "16ZnHpuaaBt92XWeJHCC5A",
            "alias": "olio-e-più-new-york-7",
            "name": "Olio e Più",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/CUpPgz_Q4QBHxxxxDJJTTA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/olio-e-pi%C3%B9-new-york-7?adjust_creative=b3N-zNbQp78cgDTeOLeU1w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=b3N-zNbQp78cgDTeOLeU1w",
            "review_count": 4864,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "italian",
                    "title": "Italian"
                },
                {
                    "alias": "cocktailbars",
                    "title": "Cocktail Bars"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.733798036104304,
                "longitude": -73.99977392649927
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "3 Greenwich Ave",
                "address2": null,
                "address3": "",
                "city": "New York",
                "zip_code": "10014",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "3 Greenwich Ave",
                    "New York, NY 10014"
                ]
            },
            "phone": "+12122436546",
            "display_phone": "(212) 243-6546",
            "distance": 3175.6979398693993
        },
        {
            "id": "h37t9rA06Sr4EetJjKrfzw",
            "alias": "don-angie-new-york",
            "name": "Don Angie",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/onJX6_vaMPHXUqIbMrq79A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/don-angie-new-york?adjust_creative=b3N-zNbQp78cgDTeOLeU1w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=b3N-zNbQp78cgDTeOLeU1w",
            "review_count": 785,
            "categories": [
                {
                    "alias": "italian",
                    "title": "Italian"
                },
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.73778,
                "longitude": -74.00197
            },
            "transactions": [
                "delivery"
            ],
            "price": "$$$",
            "location": {
                "address1": "103 Greenwich Ave",
                "address2": "",
                "address3": null,
                "city": "New York",
                "zip_code": "10014",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "103 Greenwich Ave",
                    "New York, NY 10014"
                ]
            },
            "phone": "+12128898884",
            "display_phone": "(212) 889-8884",
            "distance": 3646.541688095945
        },
        {
            "id": "WJS06XxRdc6DD1s4LWE9HA",
            "alias": "fish-cheeks-new-york",
            "name": "Fish Cheeks",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/pqupe3fe52869QQ23KkiBg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/fish-cheeks-new-york?adjust_creative=b3N-zNbQp78cgDTeOLeU1w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=b3N-zNbQp78cgDTeOLeU1w",
            "review_count": 1416,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                },
                {
                    "alias": "thai",
                    "title": "Thai"
                },
                {
                    "alias": "raw_food",
                    "title": "Live/Raw Food"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.7258,
                "longitude": -73.9927
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "55 Bond St",
                "address2": "",
                "address3": null,
                "city": "New York",
                "zip_code": "10012",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "55 Bond St",
                    "New York, NY 10012"
                ]
            },
            "phone": "+12126772223",
            "display_phone": "(212) 677-2223",
            "distance": 2242.4252176048417
        },
        {
            "id": "nRO136GRieGtxz18uD61DA",
            "alias": "eleven-madison-park-new-york",
            "name": "Eleven Madison Park",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/s_H7gm_Hwmz--O6bo1iU-A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/eleven-madison-park-new-york?adjust_creative=b3N-zNbQp78cgDTeOLeU1w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=b3N-zNbQp78cgDTeOLeU1w",
            "review_count": 2451,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                },
                {
                    "alias": "french",
                    "title": "French"
                },
                {
                    "alias": "cocktailbars",
                    "title": "Cocktail Bars"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.7416907417333,
                "longitude": -73.9872074872255
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "11 Madison Ave",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10010",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "11 Madison Ave",
                    "New York, NY 10010"
                ]
            },
            "phone": "+12128890905",
            "display_phone": "(212) 889-0905",
            "distance": 4062.929570044286
        },
        {
            "id": "ypqK8DWM8Bcs43YveSJnNw",
            "alias": "manhatta-new-york",
            "name": "Manhatta",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/uHQHaX-Q6_Z0ptEGNFenIw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/manhatta-new-york?adjust_creative=b3N-zNbQp78cgDTeOLeU1w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=b3N-zNbQp78cgDTeOLeU1w",
            "review_count": 664,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.70800627689857,
                "longitude": -74.00888226517013
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "28 Liberty St",
                "address2": "Fl 60",
                "address3": null,
                "city": "New York",
                "zip_code": "10005",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "28 Liberty St",
                    "Fl 60",
                    "New York, NY 10005"
                ]
            },
            "phone": "+12122305788",
            "display_phone": "(212) 230-5788",
            "distance": 1262.2789968123395
        },
        {
            "id": "vRrVSB-LegwUwIxpkeRVtQ",
            "alias": "le-bernardin-new-york",
            "name": "Le Bernardin",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/v8jkoS1InpNIbs66nYSMlA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/le-bernardin-new-york?adjust_creative=b3N-zNbQp78cgDTeOLeU1w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=b3N-zNbQp78cgDTeOLeU1w",
            "review_count": 2938,
            "categories":
            {
                "alias": "french",
                "title": "French"
            },
        },
    ]

    return (
        <>
            <div className='carousel'>
                <div className={spin ? 'rotate-vert-center' : null} id='carousel-left'>
                    <img src={data[`${randomNumber1}`].image_url} alt="image" />
                    <h5>{data[`${randomNumber1}`].name}</h5>
                    <p>rating: {data[`${randomNumber1}`].rating}</p>
                    <p>{data[`${randomNumber1}`].price}</p>
                    <p>{Math.round((data[`${randomNumber1}`].distance / 1609) * 10) / 10} mi away</p>

                </div>
                <div className={spin ? 'rotate-vert-center' : null} id='carousel-center'>
                    <img src={data[`${randomNumber2}`].image_url} alt="image" />
                    <h3>{data[`${randomNumber2}`].name}</h3>
                    <p>rating: {data[`${randomNumber2}`].rating}</p>
                    <p>{data[`${randomNumber2}`].price}</p>
                    <p>{Math.round((data[`${randomNumber2}`].distance / 1609) * 10) / 10} mi away</p>
                </div>
                <div className={spin ? 'rotate-vert-center' : null} id='carousel-right'>
                    <img src={data[`${randomNumber3}`].image_url} alt="image" />
                    <h5>{data[`${randomNumber3}`].name}</h5>
                    <p>rating: {data[`${randomNumber3}`].rating}</p>
                    <p>{data[`${randomNumber3}`].price}</p>
                    <p>{Math.round((data[`${randomNumber3}`].distance / 1609) * 10) / 10} mi away</p>
                </div>
            </div>
            <div className='buttonDiv'>
                <button id='dislikeBtn' onClick={generateRandomNumber2}>X</button>
                <button id='spinBtn' onClick={function (e) { generateRandomNumber1(); generateRandomNumber2(); generateRandomNumber3(); animate() }}>Spin</button>
            </div>
        </>
    )
}