import Accordeon from "../Accordeon/Accordeon"
import './QuestionBox.css'



const QuestionBox = () => {


    return (
        <div id="section-question">
            <h3 id="titAcor">Preguntas frecuentes</h3>
            <div id="made-column">
                <Accordeon
                    title={'¿Cómo hago el pedido?'}
                    text={'Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.'}
                    
                />

                <Accordeon
                    title={'¿Por qué los precios son tan bajos?'}
                    text={'Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.'}
                    
                />

                <Accordeon
                    title={'¿Es posible enviar café a mi oficina?'}
                    
                />
            </div>
        </div>
    )
}

export default QuestionBox
