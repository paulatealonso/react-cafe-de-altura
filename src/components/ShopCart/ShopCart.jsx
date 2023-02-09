import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import './ShopCart.css'


const ShopCart = () => {
    const { cart, setCart } = useContext(CartContext)
    const { choose, setChoose } = useContext(CartContext)
    const [carrito, setCarrito] = useState([])

    const addCoffee = (id) => {
        cart.map((coffee) => {
            if (coffee._id === id) {
                coffee.quantity--
            }
            if (coffee.quantity === 0) {
                cart.splice(cart.indexOf(coffee), 1)
            }
        })
        setChoose(!choose)
    }

    const calculateTotal = () => {
        let totalQuantity = 0;
        let totalPrecio = 0;

        cart.map((item) => {
            totalQuantity += item.quantity;
            totalPrecio += item.price * item.quantity;
        })

        return { totalQuantity, totalPrecio }
    };

    const lessCoffee = (id) => {
        cart.map((coffee) => {
            if (coffee._id === id) {
                coffee.quantity++
            }
        })
        setChoose(!choose)
    }

    const deleteCoffee = (id) => {
        cart.map((coffee) => {
            if (coffee._id === id) {
                cart.splice(cart.indexOf(coffee), 1)
            }
        })
        setChoose(!choose)
    }

    const deleteCart = () => {
        setCart([])
        setChoose(!choose)
    }




    useEffect(() => {
        const cartBox = cart.map((coffee) => {
            return (
                <div id='style-cesta' key={coffee._id}>
                    <div id="do-columns">
                        <div id="shop-central">
                            <img src={coffee.img} alt={coffee.name} />
                            <h4>{coffee.name}</h4>
                            <p>{coffee.price},00€</p>
                        </div>
                        <div id="shop-buttons">
                            <button onClick={() => addCoffee(coffee._id)}>-</button>
                            <span>{coffee.quantity}</span>
                            <button onClick={() => lessCoffee(coffee._id)}>+</button>
                            <div id="qua">
                                <p>Precio del producto: {coffee.quantity * coffee.price},00 €</p>
                            </div>
                        </div>

                        <button id="btn-remove-all" onClick={() => deleteCoffee(coffee._id)}>X</button>
                    </div>
                </div>
            )
        })
        setCarrito(cartBox)
    }, [choose])


    return (
        <div id="conteiner-cesta" style={{ height: calculateTotal().totalQuantity > 0 ? '275px' : '30px' }}>

            {carrito}

            {calculateTotal().totalQuantity === 0 ? (
                <p>La cesta está vacía!</p>
            ) : (
                <>
                    <button id='btn-vaciar' onClick={() => deleteCart()}>Vaciar</button>
                    <button id="btn-go-cesta"><Link to={'/Cesta'}> Ir a la cesta</Link></button>
                    <br />
                    <br />
                    <p>
                        {calculateTotal().totalQuantity} productos, en total {calculateTotal().totalPrecio},00 €</p>
                </>)}

        </div >
    )
}

export default ShopCart