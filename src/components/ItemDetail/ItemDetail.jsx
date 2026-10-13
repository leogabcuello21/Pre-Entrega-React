import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  return (
    <div className="detail-wrapper">
      <Item {...item}>
        <button
          className="btn bg-primary primary"
          onClick={() => addItem(item)}
        >
          Agregar al carrito
        </button>
        <button
          className="btn bg-primary primary">
          <Link to={"/"}>Volver a la tienda</Link>  
{/*          onClick={() => addItem(item)} */}
        </button>
      </Item>
    </div>
  );
};