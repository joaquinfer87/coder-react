import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import ItemDetailContainer from "./components/ItemDitailConteiner/ItemDitailContainer";
// import ItemCount from "./components/ItemCount/ItemCount";
// import Categorias from "./components/Categorias/Categorias";
// import Fetch from "./components/Fetch/Fetch";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListConteiner/>} />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListConteiner />}
          />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
