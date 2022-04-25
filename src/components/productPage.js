import Slider from 'react-slick'
import banner1 from './../images/banner_0.png'
import banner2 from './../images/banner_1.png'
import { Products as products } from './../datas/ProductsData'
import { CartPlus } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import RenderProducts from './renderProducts'
export default function ProductPage({ children }) {
    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        speed: 2000,
        autoplaySpeed: 5000,

    };
    document.title = 'Sản phẩm'
    return (
        children ? { children } :
            <div className='bg-red-700'>
                <Slider {...settings}>
                    <img className="block cursor-pointer h-screen" src={banner1} alt='banner0' />
                    <img className="block cursor-pointer h-screen" src={banner2} alt='banner1' />
                </Slider>
                <h1 className='relative mt-32 max-w-2xl mx-auto text-center font-bold text-2xl text-white  border-b-2 border-gray-700' >
                    <span className='absolute max-w-2xl mx-auto font-bold bg-red-700 p-3 z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 uppercase'>sản phẩm</span>
                </h1>
                <RenderProducts datas={products} />
            </div>
    )
}