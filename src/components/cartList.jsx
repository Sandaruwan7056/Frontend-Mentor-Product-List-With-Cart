import CartItem from "../components/cartItem";
import { CartContext } from "../cartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function CartList() {
  const cart = useContext(CartContext);
  const totalPrice = cart.totalPriceOfTheCart();
  const totalNumOfItems = cart.totalNumOfItems();
  const navigate = useNavigate();

  function handleShowCheckout() {
    navigate("checkout");
  }

  return (
    <>
      <h1 className="text-red text-2xl font-bold ">
        Your Cart <span>({totalNumOfItems})</span>
      </h1>
      {cart.items <= 0 ? (
        <div className="py-8 ">
          <img
            src="./assets/images/illustration-empty-cart.svg"
            alt="Empty Cart"
            width={128}
            height={128}
            className="mx-auto"
          />
          <p className="text-center mt-4 text-rose-400 font-semibold">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div>
          {cart.items.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
          <div className="flex justify-between items-center py-4">
            <p className="text-rose-500 font-semibold text-sm">Order Total</p>
            <strong className="text-2xl text-rose-900">${totalPrice}</strong>
          </div>
          <div className="flex gap-4 justify-center items-center py-4 bg-rose-100 rounded-md mb-4">
            <img
              src="public/assets/images/icon-carbon-neutral.svg"
              alt="carbon neutral"
            />
            <p className="text-sm">
              This is a <strong>Carbon Neutral</strong> delivery
            </p>
          </div>

          <button
            onClick={handleShowCheckout}
            className="w-full px-4 py-2 bg-red rounded-3xl text-rose-50 
            hover:bg-rose-900 transition-colors duration-300"
          >
            Confirm Order
          </button>
        </div>
      )}
    </>
  );
}

export default CartList;
