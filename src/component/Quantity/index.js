import { memo } from "react";
import "./style.scss";

const Quantity = ({ quantity, onQuantityChange, hasAddToCart = true }) => {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return; 
    onQuantityChange(newQuantity);
  };

  return (
    <div className="quantity-container">
      <div className="quantity">
        <span className="qtybtn" onClick={() => handleQuantityChange(quantity - 1)}>-</span>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => handleQuantityChange(Number(e.target.value))} 
          min="1"
        />
        <span className="qtybtn" onClick={() => handleQuantityChange(quantity + 1)}>+</span>
      </div>
      {hasAddToCart && (
        <button type="submit" className="button-submit">
          Thêm giỏ hàng
        </button>
      )}
    </div>
  );
};

export default memo(Quantity);
