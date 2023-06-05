import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import Home from "./components/Home/Home";
import Guitarras from "./components/Guitarras/Guitarras";
import Bajos from "./components/Bajos/Bajos";
import Amplificadores from "./components/Amplificadores/Amplificadores";

// import ItemDetailContainer from "./components/ItemDitailConteiner/ItemDitailContainer";
// import ItemCount from "./components/ItemCount/ItemCount";
// import Categorias from "./components/Categorias/Categorias";
// import Fetch from "./components/Fetch/Fetch";


function App() {
  return (
    <>
      
      <BrowserRouter>
      <NavBar />
      
      <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/guitarras" element ={<Guitarras/>}/>
      <Route path="/bajos" element ={<Bajos/>}/>
      <Route path="/amplificadores" element ={<Amplificadores/>}/>
      </Routes>
      </BrowserRouter>








      {/* <ItemDetailContainer /> */}
      {/* <Categorias />  */}
      {/* <Fetch /> */}
    </>
  );
}

export default App;
