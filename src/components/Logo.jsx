//import styles from './Logo.css'
import logo from '../assets/img/logo.png'

export default function Logo() {
    return(
        <aside className='logo'>
            <img src={logo} alt="logo" />
        </aside>
    )
}