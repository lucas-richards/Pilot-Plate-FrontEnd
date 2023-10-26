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
                <Link to={`/${data[`${randomNumber2}`].id}`} key={`/${data[`${randomNumber2}`].id}`} className={spin ? 'rotate-vert-center' : null} id='carousel-center'>
                    < img src={data[`${randomNumber2}`].image_url} alt="image" />
                    <h3>{data[`${randomNumber2}`].name}</h3>
                    <p>rating: {data[`${randomNumber2}`].rating}</p>
                    <p>{data[`${randomNumber2}`].price}</p>
                    <p>{Math.round((data[`${randomNumber2}`].distance / 1609) * 10) / 10} mi away</p>
                    <button id="categories">{data[`${randomNumber2}`].categories[0].title}</button>
                </Link>
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