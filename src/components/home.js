import Slider from 'react-slick'
import banner1 from './../images/bannner_h1.png'
import banner2 from './../images/bannner_h2.png'
import { Products as products } from './../datas/ProductsData'
import { CartPlus } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
export default function Home() {
    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        speed: 3500,
        autoplaySpeed: 3500,

    };
    return (
        <div className=' bg-red-700'>
            <div className="max-w-screen-2xl mx-auto" style={{ maxWidth: 1920 }}>
                <Slider {...settings}>
                    <img className="block cursor-pointer" src={banner1} alt='' />
                    <img className="block cursor-pointer " src={banner2} alt='' />
                </Slider>
            </div>
            <div className='px-10 py-28 '>
                <h1 className='relative max-w-2xl mx-auto text-center font-bold text-2xl text-white  border-b-2 border-gray-700' >
                    <span className='absolute font-bold bg-red-700 p-3 z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>SẢN PHẨM HÓT NHẤT </span>
                </h1>
                <div className="product-wrapper max-w-screen-xl mx-auto  pt-28 px-6 grid grid-cols-4 gap-10 select-none">

                    {
                        products.map((product, i) => {
                            return (
                                <Link key={product.id} to={`/Maditian/san-pham/id=${product.id}`}
                                    className="product-item block transition-transform bg-gray-400 hover:scale-105 p-3 hover:border rounded-lg ">
                                    <div className="flex flex-col h-full">
                                        <div className='h-1/2 flex flex-col justify-center'>
                                            {
                                                product.imgURL ?
                                                    <img className='block mx-auto rounded-md' width={150} src={`${product.imgURL}`} alt='product item' /> :
                                                    <div className="h-80 bg-blue-400 mb-2 rounded-sm">

                                                    </div>
                                            }
                                        </div>
                                        <div className='mt-auto py-6 px-3 flex flex-col items-center space-y-4'>
                                            <div className='flex-grow text-center'>
                                                <h3 className="prd-prdName font-bold text-xl text-gray-800">{product.name}</h3>
                                                <p className="prd-moretext text-sm text-white">{product.more}</p>
                                            </div>
                                            <div onClick={function (e) { e.preventDefault() }} className="prd-wrrapper cursor-default flex items-center space-x-4 px-4 py-2 bg-white rounded-xl">
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
            </div>
        </div>
    )
}