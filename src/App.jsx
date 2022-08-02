import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import Card from './components/card/Card';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes >
          
          <Route path='/' element={<ItemListContainer />} />        
          
          <Route index path='/category/:categoryId' element={<ItemListContainer />} />
          {/* <Route path='/card' element={<Card />} /> */}
          <Route path='/detail' element={<ItemDetail />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />

          <Route path='*' element={ <Navigate to='/' /> } />
          

        </Routes>  

      </BrowserRouter>

  
    </div>
  )
}

export default App
