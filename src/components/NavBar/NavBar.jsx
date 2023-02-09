import Bag from "../Bag/Bag"
import Button from "../Button/Button"
import IconLogin from "../IconLogin/IconLogin"
import LogoCafe from "../LogoCafe/LogoCafe"
import NavList from "../NavList/NavList"
import "./NavBar.css"
import iconImageNumber from '../assets/Icon.png'



const NavBar = () => {

    return (
        <div id= "header">
            <LogoCafe/>
            <NavList className={'nav-bar'}/>
            <IconLogin 
            src={iconImageNumber}
            text={'+34 919 49 05 18'}
            />
            <Button className={'btn-navbar'} text={'Iniciar sesión'} />
            <Bag/>
        </div>
    )
}

export default NavBar