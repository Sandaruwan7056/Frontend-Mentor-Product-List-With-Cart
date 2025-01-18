import { useContext } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";
import OrderItems from "../components/OrderItems";

function Checkout() {
  const cart = useContext(CartContext);
  const totalPrice = cart.totalPriceOfTheCart();
  const navigate = useNavigate();

  function handleStartOver() {
    cart.clearCart();
    navigate("/");
  }

  return (
    <>
      <div className="fixed inset-0 bg-rose-900 bg-opacity-50 z-10">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-rose-50 w-full max-w-[450px] flex flex-col justify-between px-4 py-8 rounded-xl ">
            <div>
              <img
                className="pb-4"
                src="./public/assets/images/icon-order-confirmed.svg"
                alt="order confirm"
              />
              <h1 className="text-4xl font-bold pb-4">Order Confirmed</h1>
              <p className="pb-4 px-1 text-rose-500 font-semibold text-sm">
                We Hope You Enjoyed Our Food
              </p>
            </div>

            <div className="bg-rose-100 pt-4 px-4 rounded-lg max-h-[250px] overflow-y-auto">
              {cart.items.map((item, index) => (
                <OrderItems item={item} key={index} />
              ))}
              <div className="flex justify-between items-center py-4">
                <p className="text-rose-500 font-semibold text-sm">
                  Order Total
                </p>
                <strong className="text-2xl">${totalPrice}</strong>
              </div>
            </div>

            <button
              onClick={handleStartOver}
              className="w-full px-4 py-2 bg-red rounded-3xl text-rose-50 mt-8 hover:bg-rose-900 transition-colors duration-300"
            >
              Start New Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
