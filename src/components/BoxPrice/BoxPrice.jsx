import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import Button from "../Button/Button"
import './BoxPrice.css'


const BoxPrice = ({ tipo, text, doblete , page}) => {

    const { cart } = useContext(CartContext)
    const { setShipping } = useContext(CartContext)




    const totalShop = () => {
        let price = 0
        let send = 0

        cart.forEach(coffe => {
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
            <div id="box-precio-total">
                <h5>Total del carrito</h5>
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

                    <p className="iva">Incluye {iva.toFixed(2)}€ de IVA</p>
                </div>

                <div id="buttons-total-price">
                    {page === 'Cesta' ? (
                        <>
                            <Link to={'/Form'}><Button className={'btn-price-check'} text={text} ></Button></Link>
                            <Link to={'/Shop'}><Button className={'btn-shop-go'} text={doblete}></Button></Link>
                        </>
                    ) : (
                        <Link to={'/Final'}><Button className={'btn-to-fin'} text={text} ></Button></Link>
                    )}



                </div>

            </div>)

    }








    return (
        <div>
            {totalShop()}


        </div>
    )
}


export default BoxPrice