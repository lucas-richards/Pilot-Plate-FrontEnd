//import modules
import { useState } from 'react'

//import stylesheet
import './Carousel.css'

export default function Carousel() {

    // to select random number for each eard when button is clicked
    const [randomNumber1, setRandomNumber1] = useState(0)
    const [randomNumber2, setRandomNumber2] = useState(0)
    const [randomNumber3, setRandomNumber3] = useState(0)
    // to show card flip animation when clicked
    const [spin, setSpin] = useState(false)

    // functions for generating random number
    const generateRandomNumber1 = () => {
        let randomNumber1 = Math.floor(Math.random() * test.length)
        setRandomNumber1(randomNumber1)
    }
    const generateRandomNumber2 = () => {
        let randomNumber2 = Math.floor(Math.random() * test.length)
        setRandomNumber2(randomNumber2)
    }
    const generateRandomNumber3 = () => {
        let randomNumber3 = Math.floor(Math.random() * test.length)
        setRandomNumber3(randomNumber3)
    }

    // function for animation on click
    const animate = () => {
        setSpin(true)
        setTimeout(() => setSpin(false), 300)
    }

    let test = ['#FFFFFF', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']

    return (
        <>
            <div className='carousel'>
                <div className={spin ? 'rotate-vert-center' : null} id='carousel-left' style={{ backgroundColor: `${test[randomNumber1]}` }}></div>
                <div className={spin ? 'rotate-vert-center' : null} id='carousel-center' style={{ backgroundColor: `${test[randomNumber2]}` }}></div>
                <div className={spin ? 'rotate-vert-center' : null} id='carousel-right' style={{ backgroundColor: `${test[randomNumber3]}` }}></div>
            </div>
            <div className='buttonDiv'>
                <button id='dislikeBtn' onClick={generateRandomNumber2}>X</button>
                <button id='spinBtn' onClick={function (e) { generateRandomNumber1(); generateRandomNumber2(); generateRandomNumber3(); animate() }}>Spin</button>
            </div>
        </>
    )
}