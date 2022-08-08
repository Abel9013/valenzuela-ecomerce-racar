import CartWidget from "../cartWidget/CartWidget";
import { Link } from 'react-router-dom'
// import { useCartContext } from "../CartContext/CartContext";
import NumberCart from "./NumberCart";
const NavBar = () => {
    console.log(NumberCart);
  return (
    <>
      <header className="header">
            <div className="header__barra">
                <div className="header__navegacion">
                        <a href="##" className="header__link">
                    <Link to='/' >
                            Inicio
                    </Link>
                        </a>
                    <a href="##" className="header__link">
                    <Link to="/category/analogical" >
                        Analogicos   
                    </Link>
                    </a>
                    <a href="##" className="header__link">
                        <Link to="/category/digital" className="header__link">
                        Digitales
                        </Link>
                    </a>
                    <a href="##" className="header__link">
                        Contancto
                    </a>
                    <Link to="/cart" > {NumberCart}
                    <a href="##" className="header__link carrito">
                     <CartWidget /> 
                    </a>
                    </Link>
                </div>

            </div> 
      </header>
    </>
  );
};

export default NavBar;


// <header className="header">
// <div className="header__barra">
//     <div className="header__navegacion">
//             <a href="##" className="header__link">
//         <Link to='/' >
//                 Inicio
//         </Link>
//             </a>
//         <a href="##" className="header__link">
//         <Link to="/category/analogical" >
//             Analogicos   
//         </Link>
//         </a>
//         <a href="##" className="header__link">
//             <Link to="/category/digital" >
//             Digitales
//             </Link>
//         </a>
//         <a href="##" className="header__link">
//             Contancto
//         </a>
//         <a href="##" className="header__link carrito">
//             <CartWidget />
//         </a>
//     </div>

// </div> 
// </header>