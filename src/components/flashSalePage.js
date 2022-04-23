// Import css files
// Import css files

import Slider from "react-slick";
import bn1 from './../images/bannner_fls_new1.png'
import bn2 from './../images/bannner_fls_new2.png'
import flt from './../images/bannner_fls_pt_cd_new.png'
import pd1 from './../images/matcha_img_pd.png'
import pd2 from './../images/vanilla_img_pd.png'
import { Products as ProductSales } from './../datas/ProductsData'
import { Link } from "react-router-dom"

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
export default function FlSalePage() {
    document.title = 'flash Sale'
    return (
        <div className="">
            <div style={{ maxWidth: 1920 }}>
                <Slider {...settings}>
                <img className="block cursor-pointer" src={bn1} alt='' />
                <img className="block cursor-pointer" src={bn2} alt='' />
                </Slider>
            </div>

            <div className="px-10 py-28 bg-red-700">

                <h1 className='relative  max-w-2xl mx-auto text-center font-bold text-2xl text-white  border-b-2 border-gray-700' >
                    <span className='absolute font-bold bg-red-700 p-3 z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase'>Sản phẩm giảm giá</span>
                </h1>
                <div className="product-wrapper pt-28 max-w-screen-lg mx-auto grid grid-cols-3  gap-12 py-6 select-none">

                    {
                        ProductSales.filter(product => product.saleOff).map((product, i) => {
                            return (
                                <Link key={product.id} to={`./../san-pham/id=${product.id}`} className="product-item block relative transition-transform  bg-gray-400   hover:scale-105  hover:border rounded-lg ">
                                    <div className="absolute -top-5 -right-5 flex justify-center items-center w-10 h-10 p-2 bg-white text-base text-red-700 font-bold border border-gray-500 rounded-md">
                                        {product.saleOff}
                                    </div>
                                    <div className="flex flex-col h-full">
                                        <div className="h-1/2 flex flex-col justify-center">
                                            {
                                                product.imgURL ?
                                                    <img className='block mx-auto w-2/3 h-full text-center rounded-md' src={`${product.imgURL}`} alt='product item' /> :
                                                    <div className="h-80 bg-blue-400 mb-2 rounded-sm">
                                                    </div>
                                            }
                                        </div>
                                        <div className='mt-auto py-6 px-3 flex flex-col items-center space-y-4'>
                                            <div className='flex-grow text-center'>
                                                <h3 className="prd-prdName font-bold text-xl text-gray-800">{product.name}</h3>
                                                <p className="prd-moretext text-sm text-white">{product.more}</p>
                                            </div>
                                            <div className="prd-wrrapper flex items-center space-x-4 px-4 py-2 bg-white rounded-xl">
                                                <div className="line-through text-gray-900 text-sm">{product.oldPrice}</div>
                                                <div className="text-red-700 text-xl">{product.newPrice}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className="relative" style={{ maxWidth: 1920 }}>
                <img src={flt} alt="f" />
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-10 left-3/4 flex space-x-10 z-20">
                    <div>
                        <img src={pd1} alt='pd1' className="scale-125" width={225} />
                    </div>
                    <div>
                        <img src={pd2} alt='pd1' className="scale-125" width={225} />
                    </div>
                </div>
            </div>
        </div>
    )
}