const Item = ({ id, name, price, quantity, onRemove, onEdit }) => {
    const handleIncreaseQuantity = () => {
      onEdit(id, quantity + 1);
    };
  
    const handleDecreaseQuantity = () => {
      if (quantity > 1) {
        onEdit(id, quantity - 1);
      } else {
        onRemove(id);
      }
    };
    return (
      <div>
        <p>
          {name} - ${price} x {quantity}
        </p>
        <button onClick={handleIncreaseQuantity}>+</button>
        <button onClick={handleDecreaseQuantity}>-</button>
        <button onClick={() => onRemove(id)}>Remove</button>
      </div>
    );
  };
  
  export default Item;