import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import CartProvider from "./CartContext";
import Checkout from "./pages/checkout";

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="checkout" element={<Checkout />} />
    </Route>
  ),
);

function App() {
  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;
