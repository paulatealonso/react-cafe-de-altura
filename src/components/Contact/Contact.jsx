import ContactForm from "../ContactForm/ContactForm"
import IconLogin from "../IconLogin/IconLogin"
import iconImageNumber from '../assets/Icon.png'
import iconImageMail from '../assets/mailIcon.svg'
import './Contact.css'
import { Link } from "react-router-dom"

const Contact = () => {


    return (
        <div id="contact">

            <div id="finalConteiner">
                <h5>Entra en contacto con nosotros</h5>
                <p>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo <br /> antes posible.</p>

                <br />
                <br/>

                <p>También puedes ponerte en contacto con nosotros en nuestra dirección o a través del teléfono <br/> de la tienda.</p>
                <br />
                <br/>
                <p>742 Evergreen Terrace <br /> Springfield, OR 12345</p>
                <br />

                <div id="imgFormLogo">
                    <IconLogin
                        src={iconImageNumber}
                        text={'+1 (555) 123-4567'}
                    />
                </div>

                <div id="loguito">
                    <IconLogin
                        src={iconImageMail}
                        text={'support@example.com'}
                    />
                </div>

                <br />
                <br />
                <div id="ofertas">
                    <p>¿Buscas un trabajo? <Link >Ver nuestras ofertas</Link></p>
                </div>
            </div>

            <ContactForm />



        </div>
    )
}

export default Contact