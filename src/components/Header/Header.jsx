import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import cart from "../../assets/cart.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="logo reactiva" />
        </Link>
      </div>
      <h1>Mi Tienda Electrónica</h1>
      <div className="header-cart-container">
        <Link to={"/cart"}>
          <img src={cart} alt="" />
          <span className="incart">Ver carrito</span>
        </Link>
      </div>
    </header>
  );
};
