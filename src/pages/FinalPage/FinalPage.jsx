import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import iconList from '../../components/assets/iconList.png'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import { CartContext } from '../../context/CartContext'
import './FinalPage.css'


const FinalPage = ({ tipo }) => {
    const { cart, setCart } = useContext(CartContext)
    const { choose, setChoose } = useContext(CartContext)
    const [carrito, setCarrito] = useState([])
    const { shipping, setShipping } = useContext(CartContext)
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100000));

    useEffect(() => {
        const cartBox = cart.map((coffee) => {
            return (
                <div id="section-payed" key={coffee._id}>
                    <div id="col">

                        <div id="chil2">
                            <img src={coffee.img} alt={coffee.name} />
                        </div>

                        <div id="chil3">
                            <h5>{coffee.name}</h5>
                            <p>Paquete de café, 250 gr</p>
                        </div>

                    </div>
                    <div id="chil4">
                        <p className="bolder">{coffee.quantity * coffee.price},00 €</p>
                    </div>
                </div>
            )
        })
        setCarrito(cartBox)
    }, [choose])


    const handleClick = () => {
        setCart([])
      };




    const totalShop = () => {
        let price = 0
        let send = 0

        cart.map(coffe => {
            price += (coffe.price * coffe.quantity)
            send += (coffe.price * coffe.quantity)
        })


        let iva = send - (send / 1.21)

        if (tipo !== 'GRATIS') {
            send += 9
            setShipping(send)
        } else {
            setShipping(price)
        }


        return (

            <div id="caja-subtotal">

                <div className="caja-envio">
                    <p>SUBTOTAL </p>
                    <span>{price.toFixed(2)} €</span>
                </div>

                <div className="caja-envio">
                    <p>ENVIO </p>
                    <span>{tipo} </span>
                </div>

                <div id='total-id'>
                    <h6>TOTAL </h6>
                    <span>{send.toFixed(2)} €</span>
                </div>

                <p className="iva2">Incluye {iva.toFixed(2)}€ de IVA</p>
            </div>



        )

    }




    return (
        <div id='conte'>
            <div id='page-fin'>
                <br />
                <br />
                <br />
                <br />

                <div className='picFin'>
                    <img src={iconList} alt="List Icon" />
                </div>

                <div id='fin-text'>
                    <h3>El pedido se ha realizado con éxito</h3>
                    <p>El pedido #{randomNumber} se encuentra en preparación.<br />
                        Lo recibirás dentro de las fechas acordadas en tu envío.<br />
                        Hemos enviado un ticket a tu correo electrónico.</p>
                </div>

                <div id='section-fin'>
                    <h5>Tu pedido</h5>
                    {carrito}
                    {totalShop()}

                </div>




            </div >
            <Link to={'/'} onClick={handleClick}><Button text={'Volver a la tienda'} className='last-btn-fin' /></Link>
            <Footer/>
        </div>
    )
}

export default FinalPage