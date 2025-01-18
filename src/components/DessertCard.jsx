import { CartContext } from "../CartContext";
import { useContext } from "react";

function DessertCard({ dessert, item }) {
  const cart = useContext(CartContext);
  const productquantity = cart.getQuantity(dessert.id);

  return (
    <div className="max-w-80 relative mx-auto ">
      <div className="relative">
        <picture className="">
          <source media="(min-width: 640px )" srcSet={dessert.image.desktop} />
          <source media="(min-width:1100px )" srcSet={dessert.image.tablet} />
          <img
            className={`"rounded-lg" ${
              productquantity && "rounded-lg border-2 border-red"
            }  `}
            src={dessert.image.mobile}
            alt={dessert.name}
          />
        </picture>
        {productquantity > 0 ? (
          <div
            className="bg-red px-4 py-2 rounded-3xl flex gap-4  justify-between items-center
         absolute left-1/2 transform -translate-x-1/2 bottom-[-1rem] w-[170px]  "
          >
            <button
              onClick={() => cart.decrementQuantity(dessert.id)}
              className="border-rose-50 border rounded-full w-4 h-4 flex justify-center items-center"
            >
              <img
                src="./public/assets/images/icon-decrement-quantity.svg"
                alt="decrement button"
              />
            </button>
            <p className="text-rose-50">{productquantity}</p>
            <button
              onClick={() => cart.addToCart(dessert.id)}
              className="border-rose-50 border rounded-full w-4 h-4 flex justify-center items-center "
            >
              <img
                src="./public/assets/images/icon-increment-quantity.svg"
                alt="increment button"
              />
            </button>
          </div>
        ) : (
          <button
            onClick={() => cart.addToCart(dessert.id, dessert)}
            className="bg-rose-50 border border-rose-900 px-4 py-2 rounded-3xl flex gap-4  justify-center items-center
            absolute left-1/2 transform -translate-x-1/2 bottom-[-1rem] w-[170px] 
            hover:text-red 
            hover:border-red transition-all"
          >
            <img
              src="./public/assets/images/icon-add-to-cart.svg"
              alt="add to cart"
            />
            Add to cart
          </button>
        )}
      </div>

      <article className="mt-8">
        <h2 className="text-sm text-rose-500 font-semibold">
          {dessert.category}
        </h2>
        <h3 className="text-rose-900 font-semibold">{dessert.name}</h3>
        <h4 className="text-red font-semibold">${dessert.price}</h4>
      </article>
    </div>
  );
}
export default DessertCard;
