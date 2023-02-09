
import Button from '../Button/Button'
import './MainConteiner.css'


const MainConteiner = ({ subtitle, title, src, parr}) => {

    return (
        <div className="section">
            <div className="childSection">
                <h4>{subtitle}</h4>
                <h1>{title}</h1>
                <p>{parr}</p>
                
                <div>
                <Button className={'btn-main'} text='Descubrir origenes' />
                <Button className={'btn-main2'} text='Comprar café' />

                </div>
            </div>

            <div className="section-two">
                <img src={src} alt='Hands taking fruits' />
            </div>
        </div>
    )
}

export default MainConteiner