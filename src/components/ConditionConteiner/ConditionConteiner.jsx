import InfoItem from '../InfoItem/InfoItem'
import './ConditionConteiner.css'
import iconList from '../assets/iconList.png'
import iconTransporter from '../assets/iconTransporter.svg'
import presentIcon from '../assets/presentIcon.png'


const ConditionConteiner = () => {


    return (
        <div id='section2'>
            <h3>Café con las mejores condiciones</h3>
            <div id='inf-item'>
                <InfoItem
                    src={iconList}
                    title={'Recibe tu pedido sin preocuparte'}
                    text={'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.'}>

                </InfoItem>

                <InfoItem
                    src={iconTransporter}
                    title={'Envío en 24/48h'}
                    text={'Pide tu café antes de las 12h y lo recibirás al día siguiente.'}>

                </InfoItem>

                <InfoItem
                    src={presentIcon}
                    title={'Descuentos y beneficios'}
                    text={'Cada dos meses, te regalamos ina bolsa de nuevo origen sorpresa, para que lo descubras junto a nosotros.'}>

                </InfoItem>
            </div>

        </div>
    )
}

export default ConditionConteiner