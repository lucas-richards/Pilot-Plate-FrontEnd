//import modules
import { useState } from 'react'
import { Link } from 'react-router-dom'

//import stylesheet
import './Carousel.css'

export default function Carousel({ data, location, price }) {

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

    // let array = []
    // const handleCenterCard = () => {
    //     array.push(data[`${randomNumber2}`])
    // }
    // console.log('array', array)

    // function for animation on click
    const animate = () => {
        setSpin(true)
        setTimeout(() => setSpin(false), 300)
    }

    // buffering message while data loads from API fetch
    if (data.length === 0) {
        return <h1>waiting for data</h1>
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
                        <p>rating: {data[`${randomNumber2}`].rating}</p>
                        <p>{data[`${randomNumber2}`].price}</p>
                        <p>{Math.round((data[`${randomNumber2}`].distance / 1609) * 10) / 10} mi away</p>
                        <button id="categoriesHome">{data[`${randomNumber2}`].categories[0].title}</button>
                    </div>
                    <div className='cardBtns'>
                        <Link to={`/${data[`${randomNumber2}`].id}`} key={`/${data[`${randomNumber2}`].id}`} id='moreBtn'>More</Link>
                        <svg id='favIcon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
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