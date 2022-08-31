import CartWidget from "../cartWidget/CartWidget";
import { Link } from 'react-router-dom'
import { useCartContext } from "../CartContext/CartContext";
const NavBar = () => {
    const { qtyTotal } = useCartContext();
  return (
    <>
      <header className="header">
            <div className="header__barra">
                <div className="header__navegacion">   
                    <Link className="header__link" to='/' >
                            Inicio
                    </Link>
            
                    <Link className="header__link" to="/category/analogical" >
                        Analogicos   
                    </Link>
                    
                    <Link className="header__link" to="/category/digital" >
                         Digitales
                    </Link>
                    <Link className="header__link" to="/category/analogical" >
                        Contancto   
                    </Link>
                    <Link className="header__link carrito" to="/cart" > 
                        { qtyTotal () !== 0 && qtyTotal ()}
                        <CartWidget /> 
            
                    </Link>
                </div>

            </div> 
      </header>
    </>
  );
};

export default NavBar;

