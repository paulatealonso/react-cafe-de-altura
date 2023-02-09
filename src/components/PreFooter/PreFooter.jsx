import IconLogin from '../IconLogin/IconLogin'
import LogoCafe from '../LogoCafe/LogoCafe'
import NavList from '../NavList/NavList'
import './PreFooter.css'
import iconImageNumber from '../assets/Icon.png'
import iconImageMail from '../assets/mailIcon.svg'



const PreFooter = () => {


    return (
        <div id='pre-footer'>

            <div id='logos-footer'>

                <LogoCafe />


                <h5>Te ayudamos en</h5>

                <div id='remake-icon-number'>
                    <IconLogin
                        src={iconImageNumber}
                        text={'+34 919 49 05 18'}
                    />
                </div>

                <div id='remake-icon-mail'>
                    <IconLogin
                        src={iconImageMail}
                        text={'hola@cafedealtura.com'}
                    />
                </div>
            </div>

            <NavList className={'list-footer'} />

            <div id='listTerms'>
                <ul>
                    <li>Política de privacidad</li>
                    <li>Política de cookies</li>
                    <li>Términos y condiciones</li>
                </ul>
            </div>

        </div>
    )
}

export default PreFooter