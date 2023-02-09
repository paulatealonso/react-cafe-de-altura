import { useContext, useEffect, useState } from "react"
import BoxPrice from "../../components/BoxPrice/BoxPrice"
import Footer from "../../components/Footer/Footer"
import { CartContext } from "../../context/CartContext"
import './Cesta.css'


const Cesta = () => {

    const { cart, setCart } = useContext(CartContext)
    const { choose, setChoose } = useContext(CartContext)
    const [carrito, setCarrito] = useState([])
    const [radio, setRadio] = useState('GRATIS')

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

    const radioControl = (price) => {
        setRadio(price.target.value)

    }

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

    useEffect(() => {
        const cartBox = cart.map((coffee) => {
            return (
                <div id="ca1" key={coffee._id}>
                    <div id="col">

                        <div id="chil1">
                            <button onClick={() => addCoffee(coffee._id)}>-</button> <p>{coffee.quantity}</p><button onClick={() => lessCoffee(coffee._id)}>+</button>
                        </div>

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

    return (

        <div id="cesta-sect">
            <br />
            <br />
            <br />
            <br />



            <h3>Cesta</h3>

            <h4>Productos</h4>
            {carrito}

            <div id="radioBox" onChange={radioControl}>
                <h4>Seleccionar envío</h4>

                <div className="contRadio">
                    <div className="tog">
                        <input type="radio" value='GRATIS' name="shipping" defaultChecked />
                        <label>Envío 5-7 días <br /> Opción estándar sin seguimiento </label>

                    </div>
                    <span className="bolder">GRATIS</span>
                </div>

                <div className="contRadio">
                    <div className="tog">
                        <input type="radio" value='9,00€' name="shipping" />
                        <label>Envío urgente 24h <br /> Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).</label>
                    </div>
                    <span className="bolder">9,00 €</span>
                </div>

                <BoxPrice tipo={radio} text='Ir al checkout' doblete='Seguir comprando' page={'Cesta'}/>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default Cesta