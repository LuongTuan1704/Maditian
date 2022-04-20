import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import IndexPage from "./components/indexPage";
import Home from './components/home';
import BrandPage from "./components/brandPage";
import ProductPage from "./components/productPage";
import FlSalePage from "./components/flashSalePage";
import { Products as products } from './datas/ProductsData'
import ProductViewer from "./components/productViewer";
import CartPage from "./components/cartPage"
function App() {
  return (
    <div className="App-container overflow-hidden min-h-screen flex flex-col">
      <BrowserRouter>
        <Routes>

          <Route path="Maditian/" element={<IndexPage />}>

            <Route index element={<Home />} />
            <Route path="thuong-hieu" element={<BrandPage />} />
            <Route path="san-pham" element={<ProductPage />} />
            <Route path="flash-sale" element={<FlSalePage />} />
            <Route path="gio-hang" element={<CartPage />} />
            {
              products.map((product, i) => {
                return <Route key={i} path={`san-pham/id=${product.id}`} element={<ProductViewer productId={`${product.id}`} />} />
              })
            }
            <Route path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
