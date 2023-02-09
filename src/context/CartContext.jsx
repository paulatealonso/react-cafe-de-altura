
import { createContext, useState } from "react";

const CartContext = createContext()

const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [shipping, setShipping] = useState(0)

    const [choose, setChoose] = useState(false)

    return (
        <CartContext.Provider value={{cart, setCart, shipping, setShipping, choose, setChoose}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, ContextProvider}