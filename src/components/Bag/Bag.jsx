import "./Bag.css"
import bagImage from '../assets/bag.svg'
import ShopCart from "../ShopCart/ShopCart"
import {  useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"



const Bag = () => {

    const { cart, setCart } = useContext(CartContext)
    const [showCart, setShowCart] = useState(true)

    const toggleShowCart = () => {
        setShowCart(!showCart)
    }

    const calculateTotal = () => {
        let totalQuantity = 0;

        cart.map((item) => {
            totalQuantity += item.quantity;
        })

        return { totalQuantity }
    };


    return (
        <>
        <div id="bagLogo">
            <img src={bagImage} alt="Bag" className="bag" onClick={() => toggleShowCart()}/>
            <span id="count"> {calculateTotal().totalQuantity}</span>
            
        </div>
        {showCart && <ShopCart/>}
        
        </>
    )
}

export default Bag