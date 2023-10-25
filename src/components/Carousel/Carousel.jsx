//import modules
import { useState, useEffect } from 'react'

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

    let test = ['red', 'blue', 'green', 'grey', 'pink', 'yellow', 'orange', 'silver', 'black', 'aliceblue', 'aqua', 'beige', 'brown', 'chocolate', 'cornflowerblue', 'cyan', 'crimson', 'cornsilk', 'darkgreen', 'darkmagenta', 'darkred', 'gold', 'ivory', 'khaki', 'indigo', 'olive']

    return (
        <>
            <div className='carousel'>
                <div className={spin ? 'flip-horizontal-fwd' : null} id='carousel-left' style={{ backgroundColor: `${test[randomNumber1]}` }}>LEFT</div>
                <div className={spin ? 'flip-horizontal-fwd' : null} id='carousel-center' style={{ backgroundColor: `${test[randomNumber2]}` }}>CENTER</div>
                <div className={spin ? 'flip-horizontal-fwd' : null} id='carousel-right' style={{ backgroundColor: `${test[randomNumber3]}` }}>RIGHT</div>
            </div>
            <button onClick={function (e) { generateRandomNumber1(); generateRandomNumber2(); generateRandomNumber3(); animate() }}>Spin</button>
        </>
    )
}