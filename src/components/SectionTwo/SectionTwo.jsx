import { Link } from "react-router-dom"
import './SectionTwo.css'

const SectionTwo = ({ subtitle, icon, src, parr}) => {

    return (
        <div className="section">
            <div className="childSection">
                <h4>{subtitle}</h4>
                <p>{parr}</p>
                
                <div id="como-llegar">
                    <Link>Como llegar</Link>
                    <img src={icon} alt='Icon direction' />
                </div>
            </div>

            <div className="section-two">
                <img src={src} alt='Icon direction' />
            </div>
        </div>
    )
}

export default SectionTwo