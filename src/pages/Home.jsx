import { Outlet } from "react-router-dom";
import data from "../data/data.json";
import DessertCard from "../components/DessertCard";
import CartList from "../components/cartList";
function Home() {
  return (
    <>
      <section className="my-8 mx-auto max-w-7xl grid p-4 md:grid-cols-[2fr,1fr] lg:grid-cols-[2.5fr,1fr] gap-4">
        <section>
          <div className="mb-4 w-80 max-sm:mx-auto">
            <h1 className="text-rose-900 text-4xl font-bold ">Desserts</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4">
            {data.map((dessert, index) => (
              <DessertCard dessert={dessert} key={index} />
            ))}
          </div>
        </section>

        <div className="bg-rose-50 h-fit  p-4 rounded-lg">
          <CartList />
        </div>
      </section>
      <Outlet />
    </>
  );
}
export default Home;
