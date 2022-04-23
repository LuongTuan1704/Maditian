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
import _404nf from "./images/404-error_img.jpg"
function App() {
  return (
    <div className="App-container overflow-hidden min-h-screen flex flex-col">
      <BrowserRouter basename={process.env.PUBLIC_URL}>

        <Routes>
          <Route path="/" element={<IndexPage />}>
            <Route index element={<Home />} />
            <Route path="thuong-hieu" element={<BrandPage />} />
            <Route path="san-pham" element={<ProductPage />} />
            <Route path="flash-sale" element={<FlSalePage />} />
            <Route path="gio-hang" element={<CartPage />} />
            {
              products.map((product, i) => {
                return <Route key={i} path={`san-pham/id=${product.id}`} element={<ProductViewer productId={`${product.id}`} />} />
              })
            }     <Route path="*"
              element={
                <main >
                  <img className="block w-screen h-screen" src={_404nf} alt="404 page not found!" />
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
