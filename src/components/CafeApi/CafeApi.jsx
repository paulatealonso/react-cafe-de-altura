import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import './CafeApi.css'
import highleft from '../assets/highleft.png'
import highright from '../assets/highright.png'


const apiURL = 'https://cafe-de-altura-api.vercel.app/api/products'

const CafeApi = () => {

    const [coffees, setCoffees] = useState([])
    const [fetching, setFetching] = useState(true)
    const [items, setItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { choose, setChoose } = useContext(CartContext)
    const { cart, setCart } = useContext(CartContext)

    useEffect(() => {
        axios
            .get(apiURL)
            .then((response) => {

                const cafeSort = response.data.products.sort((a, b) => {
                    return (a.price - b.price)
                })

                cafeSort.map((coffee) => {
                    if (!coffee.available) {
                      cafeSort.splice(cafeSort.indexOf(coffee), 1)
                      cafeSort.push(coffee)
                    }
                  })
          
          
          
                  setCoffees(cafeSort)
                  setFetching(false)
                  setItems([])
            })
            .catch(err => console.error(err))
    }, [])

    const prevProduct = () => {
        setCurrentIndex(
          currentIndex - 4 >= 0 ? currentIndex - 4 : coffees.length - 4
        );
      };
    
      const nextProduct = () => {
        setCurrentIndex(
          currentIndex + 4 <= coffees.length - 1 ? currentIndex + 4 : 0
        );
    
      };

    const addItem = (coffee) => {
        const cafeAlto = {
            name: coffee.brand,
            price: coffee.price,
            _id: coffee._id,
            quantity: 1,
            img: coffee.img_url
        }

        const noDuplicate = cart.some(e => e._id === coffee._id)



        if (noDuplicate) {

            cart.map((product) => {


                if (coffee._id === product._id) {
                    return product.quantity++
                }
            })
        } else if (!coffee.available) {
            return
        } else {
            setCart(prev => [...prev, cafeAlto])
        }
        setChoose(!choose)
    }

    return (
        <div>

        {fetching && <h1>LOADING...</h1>}
  
        <div>
          <button id="carousel-last" onMouseEnter={prevProduct}><img src={highleft} alt='flecha'/></button>
  
          <div id="news">
            {coffees
              .slice(currentIndex, currentIndex + 4)
              .map((product) => {
                const noAvailable = !product.available ? 'noStock' : ''
                return (
                  <div key={product._id} id='box-products' className={noAvailable}>
                    <img src={product.img_url} alt='product'/>
                    <h4>{product.brand}</h4>
                    <p>{product.price},00 €</p>
                    <button onClick={() => addItem(product)}> Añadir</button>
                  </div>
                )
              })}
          </div>

          <button id="carousel-next" onMouseEnter={nextProduct}><img src={highright} alt='flecha'/></button>
        </div>

      </div>
    )
}

export default CafeApi