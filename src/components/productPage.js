import { Products as products } from './../datas/ProductsData'
import { CartPlus } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
export default function ProductPage({ children }) {
    return (
        children ? { children } :
            <div className='pt-10 bg-red-700'>
                <h1 className='relative max-w-xl mx-auto text-center font-bold text-2xl text-white  border-b-2 border-gray-700' >
                    <span className='absolute  font-bold bg-red-700 p-3 z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase'>sản phẩm</span>
                </h1>
                <div className="product-wrapper  py-28 px-6 grid grid-cols-5 gap-6 select-none">

                    {
                        products.map((product, i) => {
                            return (
                                <Link key={product.id} to={`/san-pham/id=${product.id}`}
                                    className="product-item block  transition-transform bg-gray-400 hover:scale-105 p-3 hover:border rounded-lg ">
                                    <div className="flex flex-col h-full">
                                        <div className='h-1/2 flex flex-col justify-center'>
                                            {
                                                product.imgURL ?
                                                    <img className='block mx-auto rounded-md' src={`${product.imgURL}`} width={150} alt='product item' /> :
                                                    <div className="h-80 bg-blue-400 mb-2 rounded-sm">

                                                    </div>
                                            }</div>
                                        <div className='mt-auto py-6 px-3 flex flex-col items-center space-y-4'>
                                            <div className='flex-grow text-center'>
                                                <h3 className="prd-prdName font-bold text-xl text-gray-800">{product.name}</h3>
                                                <p className="prd-moretext text-sm text-white">{product.more}</p>
                                            </div>
                                            <div onClick={function (e) { e.preventDefault() }} className="prd-wrrapper cursor-default flex items-center space-x-4 px-4 py-2 bg-white rounded-xl">
                                                <div className="text-red-700 text-xl">{product.newPrice}</div>
                                                <a onClick={function (e) { e.stopPropagation() }} className='block' href={`/them-san-pham-vao-gio-hang/?id-san-pham=${product.id}`}>
                                                    <CartPlus size={32} className="transition-colors duration-300 hover:text-blue-700" />
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
    )
}