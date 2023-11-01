//import modules
import { useState } from 'react'
import { Link } from 'react-router-dom'

//import components
import OneStar from '../OneStar/OneStar'
import HalfStar from '../HalfStar/HalfStar'

//import stylesheet
import './Carousel.css'
import FavoriteBusiness from '../business/FavoriteBusiness'

export default function Carousel({ data, location, price, user }) {

    // to select random number for each eard when button is clicked
    const [randomNumber1, setRandomNumber1] = useState(0)
    const [randomNumber2, setRandomNumber2] = useState(1)
    const [randomNumber3, setRandomNumber3] = useState(2)
    // to show card flip animation when clicked
    const [spin, setSpin] = useState(false)

    // functions for generating random number, conditional that the numbers don't repeat
    const generateRandomNumber = () => {
        let randomNumber1 = Math.floor(Math.random() * data.length)
        let randomNumber2 = Math.floor(Math.random() * data.length)
        let randomNumber3 = Math.floor(Math.random() * data.length)
        if (randomNumber1 != randomNumber2 && randomNumber1 != randomNumber3 && randomNumber2 != randomNumber3) {
            setRandomNumber1(randomNumber1)
            setRandomNumber2(randomNumber2)
            setRandomNumber3(randomNumber3)
        } else {
            generateRandomNumber()
        }
    }

    // conditional to turn rating number from API call into star shaped svgs
    // if (data[`${randomNumber2}`].rating == 1) {
    //     let rating = <OneStar />
    // } else if 

    // function for animation on click
    const animate = () => {
        setSpin(true)
        setTimeout(() => setSpin(false), 300)
    }

    // buffering message while data loads from API fetch
    if (data.length === 0) {
        return <h1>Loading...</h1>
    }


    return (
        <>
            <div className='carousel'>
                <div className={spin ? 'rotate-vert-center' : null} id='carousel-left'>
                    <img src={data[`${randomNumber1}`].image_url} alt="image" />
                    <p>{data[`${randomNumber1}`].name}</p>
                    <p>rating: {data[`${randomNumber1}`].rating}</p>
                    <p>{data[`${randomNumber1}`].price}</p>
                    <p>{Math.round((data[`${randomNumber1}`].distance / 1609) * 10) / 10} mi away</p>
                </div>
                <div className={spin ? 'rotate-vert-center' : null} id='carousel-center'>
                    < img src={data[`${randomNumber2}`].image_url} alt="image" />
                    <div className='businessInfo'>
                        <h3>{data[`${randomNumber2}`].name}</h3>
                        <div className='rating-price'>
                            <p>{data[`${randomNumber2}`].price}</p>
                            {(() => {
                                if (data[`${randomNumber2}`].rating == 1) {
                                    return (
                                        <span><OneStar /></span>
                                    )
                                } else if (data[`${randomNumber2}`].rating == 1.5) {
                                    return (
                                        <span><OneStar /><HalfStar /></span>
                                    )
                                } else if (data[`${randomNumber2}`].rating == 2) {
                                    return (
                                        <span><OneStar /><OneStar /></span>
                                    )
                                } else if (data[`${randomNumber2}`].rating == 2.5) {
                                    return (
                                        <span><OneStar /><OneStar /><HalfStar /></span>
                                    )
                                } else if (data[`${randomNumber2}`].rating == 3) {
                                    return (
                                        <span><OneStar /><OneStar /><OneStar /></span>
                                    )
                                } else if (data[`${randomNumber2}`].rating == 3.5) {
                                    return (
                                        <span><OneStar /><OneStar /><OneStar /><HalfStar /></span>
                                    )
                                } else if (data[`${randomNumber2}`].rating == 4) {
                                    return (
                                        <span><OneStar /><OneStar /><OneStar /><OneStar /></span>
                                    )
                                } else if (data[`${randomNumber2}`].rating == 4.5) {
                                    return (
                                        <span><OneStar /><OneStar /><OneStar /><OneStar /><HalfStar /></span>
                                    )
                                } else if (data[`${randomNumber2}`].rating == 5) {
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
                        <p>{Math.round((data[`${randomNumber2}`].distance / 1609) * 10) / 10} mi away</p>
                        {(() => {
                            if (!data[`${randomNumber2}`].is_closed) {
                                return (
                                    <p>Open now</p>
                                )
                            } else {
                                return (
                                    <p>Closed now</p>
                                )
                            }
                        })()}
                        <button id="categoriesHome">{data[`${randomNumber2}`].categories[0].title}</button>
                    </div>
                    <div className='cardBtns'>
                        <Link to={`/${data[`${randomNumber2}`].id}`} key={`/${data[`${randomNumber2}`].id}`} id='moreBtn'>More</Link>
                        {
                            user?

                            <div className="heartMargin"> 
                                <FavoriteBusiness 
                                data={data[`${randomNumber2}`]}
                                user={user}
                                spin={spin} />
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
                <div className={spin ? 'rotate-vert-center' : null} id='carousel-right'>
                    <img src={data[`${randomNumber3}`].image_url} alt="image" />
                    <p>{data[`${randomNumber3}`].name}</p>
                    <p>rating: {data[`${randomNumber3}`].rating}</p>
                    <p>{data[`${randomNumber3}`].price}</p>
                    <p>{Math.round((data[`${randomNumber3}`].distance / 1609) * 10) / 10} mi away</p>
                </div>
            </div >
            <div className='buttonDiv'>
                <button id='spinBtn' onClick={function (e) { generateRandomNumber(); animate() }}>Spin</button>
            </div>
        </>
    )
}