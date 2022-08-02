import { Link } from 'react-router-dom'
const AfterBuy = () => {
  return (
    <>
            <Link to="/cart">
                <button >Carrito
                </button>
            </Link>
            <Link to="/">
                <button >Home
                </button>
            </Link>
    </>
  )
}

export default AfterBuy