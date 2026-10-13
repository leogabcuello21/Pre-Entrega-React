import { useCart } from "../../../context/CartContext";
import "./CartView.css";
import { CartList } from "../CartList/CartList";
import { CartSummary } from "../CartSummary/CartSummary";
import { Link } from "react-router-dom";

export const CartView = () => {
  const { cart } = useCart();

  return (
    <section className="cart-container">
      <h1>Tu carrito de compras</h1>

      {cart.length ? (
        <>
          <CartList />
          <CartSummary />
        </>
      ) : (
        <>
          <p className="empty-cart">El carrito esta vacío 😕</p>
          <Link className="btn primary bg-primary" to={"/"}>
            Volver
          </Link>
        </>
      )}
    </section>
  );
};