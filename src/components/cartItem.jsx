import { useContext } from "react";
import { CartContext } from "../CartContext";

function CartItem({ item }) {
  const cart = useContext(CartContext);
  return (
    <div className="flex justify-between items-center border-b-rose-300 border-b border-opacity-50 ">
      <div className="py-4">
        <h1 className="text-sm font-semibold">{item.name}</h1>
        <div className="flex gap-4">
          <p className="text-red text-sm font-bold">x{item.quantity}</p>
          <p className="text-sm text-rose-500">@ ${item.price}</p>
          <p className="text-sm text-rose-900 font-semibold">
            ${item.quantity * item.price}
          </p>
        </div>
      </div>
      <button
        onClick={() => cart.removeItemFromCart(item.id)}
        className="border-2 border-rose-300 w-4 h-4 flex rounded-full justify-center items-center"
      >
        <img
          src="./public/assets/images/icon-remove-item.svg"
          alt="remove item button"
        />
      </button>
    </div>
  );
}
export default CartItem;
