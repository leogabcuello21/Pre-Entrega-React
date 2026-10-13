import { useCart } from "../../../context/CartContext";
import "./CartSummary.css";

export const CartSummary = () => {
  const { getCartTotal, checkout } = useCart();

  const total = getCartTotal();

  return (
    <section className="cart-summary">
      <p className="cart-summary-total">
        TOTAL A PAGAR <span>${total}</span>
      </p>
      <button className="btn bg-success primary" onClick={checkout}>
        Finalizar compra
      </button>
    </section>
  );
};