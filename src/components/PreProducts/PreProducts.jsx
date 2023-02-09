import { Link } from 'react-router-dom'
import CafeApi from '../CafeApi/CafeApi'
import './PreProducts.css'
import flechahigh from "../assets/flechita.png"

const PreProducts = () => {


    return (
        <div  id="section-products">
            <h3 id='title-section'>Novedades</h3>
        <CafeApi/>

        <div id='link-to-all'>
            <Link to={'/Shop'}>Ver todos</Link>
            <img src={flechahigh} alt='flecha'/>
        </div>

        </div>
    )
}

export default PreProducts