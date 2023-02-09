import "./LogoCafe.css"
import textCafe from '../assets/cafedealtura.com.png'
import imgCafe from '../assets/Vector.png'
import { Link } from "react-router-dom"

const LogoCafe = () => {


    return (
        <div id="headerImg"><Link to={'/'}>
            <img src={textCafe} alt="Logo Cafe de Altura"/>
            <img src={imgCafe} alt="Taza de Café" /></Link>
        </div>
    )
}

export default LogoCafe