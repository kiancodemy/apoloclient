import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import { Hadle } from "./middleware/LoginAgain";
import Loading from "./components/loading/Loading";

const Home = lazy(() => import("./components/Home"));

const Newproduct = lazy(() => import("./components/NewProduct/Newproduct"));
const Signup = lazy(() => import("./components/Signup"));
const Signin = lazy(() => import("./components/Signin"));
const Products = lazy(() => import("./components/All"));
const ProductId = lazy(() => import("./components/ProductId"));
import Notfound from "./components/Notfound/Notfound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Checkauth } from "./middleware/CheckAuth";
export default function App() {
  return (
    <div className="flex justify-between overflow-hidden p-4 flex-col min-h-screen items-center">
      <Header></Header>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="" element={<Hadle />}>
              <Route path="signup" element={<Signup />} />
              <Route path="signin" element={<Signin />} />
            </Route>

            <Route path="" element={<Checkauth />}>
              <Route path="newproduct" element={<Newproduct />} />
            </Route>
            <Route path="products" element={<Products />} />

            <Route path="productid/:id" element={<ProductId />} />
          </Route>

          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
      <Footer></Footer>
    </div>
  );
}
