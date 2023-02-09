import ConditionConteiner from "../../components/ConditionConteiner/ConditionConteiner"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"
import MainConteiner from "../../components/MainConteiner/MainConteiner"
import PreFooter from "../../components/PreFooter/PreFooter"
import PreProducts from "../../components/PreProducts/PreProducts"
import QuestionBox from "../../components/QuestionsBox/QuestionBox"
import mainPicture from '../../components/assets/mainpicture.png'
import coffeePicture from '../../components/assets/coffeeshop.png'
import { CartContext } from "../../context/CartContext"
import SectionTwo from "../../components/SectionTwo/SectionTwo"
import flechahigh from "../../components/assets/flechita.png"






const HomePage = () => {



    return (
        <div>
            <div>

               <br/>
               <br/>
               <br/>
               

                
                <MainConteiner
                    title={'El mejor café del mundo, ahora en tu casa.'}
                    src={mainPicture}
                    subtitle='De la planta a tu casa'
                    parr={'Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.'}>
                </MainConteiner>

                <ConditionConteiner />

                <PreProducts />

                <QuestionBox />

                <SectionTwo
                    subtitle='Pruébalo en nuestro coffee shop'
                    src={coffeePicture}
                    icon={flechahigh}
                    parr={'Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento'}>
                </SectionTwo>

                <Contact />
                <PreFooter />
                <Footer />

            </div>

        </div>
    )
}

export default HomePage