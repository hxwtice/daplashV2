import { useState } from "react"
import { useEffect } from "react"
import one from "/1.png"
import two from "/2.png"
import three from "/3.png"
import four from "/4.png"
import "./slider.css"

const images = [one, two, three, four];

export default function Slider(){
    const [currentIndex, setCurrentIndex] = useState(0)
    const length = 4

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
            <img src={images[currentIndex]} className="images-1" id="offerings"/>
        </div>
        </>
    )
}

