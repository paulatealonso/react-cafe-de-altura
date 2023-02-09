import { useContext, useEffect, useState } from "react"
import BoxPrice from "../../components/BoxPrice/BoxPrice"
import Checkout from "../../components/Checkout/Checkout"
import Footer from "../../components/Footer/Footer"
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod"
import { CartContext } from "../../context/CartContext"


const FormPay = () => {

    const [nueve, setNueve] = useState('')
    const {cart, setCart} = useContext(CartContext)
    const { shipping, setShipping } = useContext(CartContext)


    useEffect(() => {
        let price = 0
        cart.map((coffee) =>{
            price += (coffee.price * coffee.quantity)
        })
        if (price === shipping) {
            setNueve('GRATIS')
        } else {
            setNueve('9,00 €')
        }


    }, [])


    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <PaymentMethod/>
            <Checkout/>
            <BoxPrice tipo={nueve} text='Pagar y realizar pedido' page={'Form'}/>
            <Footer/>
        </div>
    )
}

export default FormPay