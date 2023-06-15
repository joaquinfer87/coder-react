import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import ItemDetailContainer from "./components/ItemDitailConteiner/ItemDitailContainer";

import FormData from "./components/Formdata/FormData";
// import ItemCount from "./components/ItemCount/ItemCount";
// import Categorias from "./components/Categorias/Categorias";
// import Fetch from "./components/Fetch/Fetch";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <FormData />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListConteiner />}
          />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/*" element={<h2>troll</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
