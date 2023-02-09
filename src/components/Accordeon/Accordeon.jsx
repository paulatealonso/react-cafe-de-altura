import { useState } from "react"
import './Accordeon.css'
import flechahigh from '../assets/flechahigh.png'



const Accordeon = ({ title, text }) => {

    const [vueltaImage, setVueltaImage] = useState(false);
    const [showText, setShowText] = useState(true)

    // const handleClick = () => {
    //     setShowText(!showText)
    // }

    return (
        <div id="accordeon" style={{ height: !showText ? '100px' : '146px' }}>
            <div id="contenedor-flecha">
                <h1 id='title-accordeon'>{title}</h1>
                <img src={flechahigh} onClick={() => {
                    setVueltaImage(!vueltaImage);
                    setShowText(!showText);
                }}
                    className={vueltaImage ? 'flipped' : ''}  alt='Flecha' />
                    {/* {showText && <p id="text-accordeon">T{text}</p>} */}
            </div>

            <div>
                {showText && <p id="text-accordeon">{text}</p>}
            </div>
        </div>
    )
}

export default Accordeon