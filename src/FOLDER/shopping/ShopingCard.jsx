import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import { clearCart, removeItem, updateQuantity } from "./REDUX/slices/cart/cart";
import "./index.css";

const ShopingCart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };
  const handleEdit = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };
  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };
  const totalPrice = calculateTotalPrice(items);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onRemove={handleRemove}
            onEdit={handleEdit}
          />
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button class="button" onClick={() => dispatch(clearCart())}>
        <svg viewBox="0 0 448 512" class="svgIcon">
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
        </svg>
      </button>
    </div>
  );
};

export default ShopingCart;