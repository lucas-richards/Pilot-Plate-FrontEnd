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

    let test = ['red', 'blue', 'green', 'grey', 'pink', 'yellow', 'orange', 'silver', 'black', 'aliceblue', 'aqua', 'beige', 'brown', 'chocolate', 'cornflowerblue', 'cyan', 'crimson', 'cornsilk', 'darkgreen', 'darkmagenta', 'darkred', 'gold', 'ivory', 'khaki', 'indigo', 'olive', 'blueviolet', 'chartreuse', 'darkkhaki', 'darktuiquoise', 'limegreen', 'lightskyblue', 'tan']

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