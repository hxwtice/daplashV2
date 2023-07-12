import { useState } from "react"
import { useEffect } from "react"
import one from "/1.png"
import two from "/2.png"
import three from "/3.png"
import a from "/a.png"
import b from "/b.png"
import c from "/c.png"

import "./slider.css"

const images = [one, two, three];
const imagesPhone = [a, b, c];

export default function Slider(){
    const [currentIndex, setCurrentIndex] = useState(0)
    const length = 3

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 3000)
        
        return () => clearInterval(intervalId);
    }, [currentIndex])

    return(
        <>
        <div className="images">
            <div id="offerings" className="padding">
            <img src={images[currentIndex]} className="images-1"/>
            <img src={imagesPhone[currentIndex]} className="images-2"/>

            </div>
        </div>
        </>
    )
}

