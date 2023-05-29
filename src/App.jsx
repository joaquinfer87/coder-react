
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemCount from './components/ItemCount/ItemCount';
import Categorias from './components/Categorias/Categorias';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListConteiner greeting="Bienvenidos a Planet Rock"/>
    <ItemCount inicial={1} stock={12}/>
    <Categorias />
    </>
  
  );
}

export default App;
