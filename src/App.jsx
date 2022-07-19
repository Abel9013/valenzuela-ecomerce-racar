import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  return (
    <div className="App">
     <NavBar />
     <ItemCount stock={5} initial={1} />

     <h3>Desde app h4</h3>
     <h2>h2 desde app</h2>
  
    </div>
  )
}

export default App
