import React, { memo } from "react";
import "./style.scss";

interface QuantityProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  hasAddToCart?: boolean;
  onAddToCart?: () => void;
}

const Quantity: React.FC<QuantityProps> = ({ quantity, onQuantityChange, hasAddToCart = true, onAddToCart }) => {
  const handleQuantityChange = (newQuantity: number) => {
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
        <button type="submit" className="button-submit" onClick={onAddToCart}>
          Thêm giỏ hàng
        </button>
      )}
    </div>
  );
};

export default memo(Quantity);
