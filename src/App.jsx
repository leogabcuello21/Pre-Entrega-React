import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Route,Routes } from "react-router-dom";
import { CartView } from "./components/Cart/CartView/CartView";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} /> 
          <Route path="/cart" element={<CartView />} /> 
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
