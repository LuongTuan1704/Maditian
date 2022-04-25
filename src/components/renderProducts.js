import { CartPlus } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

export default function RenderProducts({ datas }) {
    return (
        <div className="product-wrapper max-w-screen-xl mx-auto  py-28 px-6 grid grid-cols-4 gap-6 select-none">

            {
                datas.map((product, i) => {
                    return (
                        <Link key={product.id} to={`./../san-pham/id=${product.id}`}
                            className="product-item block  transition-transform bg-white hover:scale-105 p-3 hover:border rounded-lg ">
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
                                        <h3 className="prd-prdName font-bold text-xl text-gray-900">{product.name}</h3>
                                        <p className="prd-moretext text-sm text-gray-800">{product.more}</p>
                                    </div>
                                    <div onClick={function (e) { e.preventDefault() }} className="prd-wrrapper cursor-default flex items-center space-x-4 px-4 py-2 bg-gray-300 rounded-xl">
                                        <div className="text-red-700 text-xl">{product.price}</div>
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
    )
}