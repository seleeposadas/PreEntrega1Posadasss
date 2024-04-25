import CartWidget from "./CartWidget"
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="nav-bar">
          <div className="nav-bar-content">
             <div className="nav-bar_logo">
                <img src="./src/assets/LOGO_TIENDA_b.png"/>
             </div>
             <ul className="nav-bar_categorias">
                <li>Consolas</li>
                <li>Componentes</li>
                <li>PC's</li>
             </ul>
             <CartWidget/>
        </div>
    </div>
    )
}

export default NavBar