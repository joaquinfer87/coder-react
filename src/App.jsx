import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import ItemDetailContainer from "./components/ItemDitailConteiner/ItemDitailContainer";
// import ItemCount from "./components/ItemCount/ItemCount";
// import Categorias from "./components/Categorias/Categorias";
// import Fetch from "./components/Fetch/Fetch";


function App() {
  return (
    <>
      <NavBar />
      <ItemListConteiner greeting="Bienvenidos a Planet Rock" />
      <ItemDetailContainer />
      {/* <ItemCount inicial={1} stock={12} />
      <Categorias /> */}
      {/* <Fetch /> */}
    </>
  );
}

export default App;
