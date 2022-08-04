import CartWidget from "../cartWidget/CartWidget";
import { Link } from 'react-router-dom'
const NavBar = () => {
    // console.log('es es es este');
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
                    <Link to="/cart" >
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