
import "./IconLogin.css"


const IconLogin = ({src, text}) => {

    return (
            <div id="iconPhone">
                <img src={src} alt="Icon Telephone" id="phone" />
                <p>{text}</p>
            </div>
    )
}

export default IconLogin