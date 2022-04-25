import Slider from 'react-slick'
import banner1 from './../images/bannner_h1.png'
import banner2 from './../images/bannner_h2.png'
import { Products as products } from './../datas/ProductsData'
import RenderProducts from './renderProducts'
export default function Home() {
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
    document.title = 'Trang chủ'
    return (
        <div className=' bg-red-700'>
            <div className="max-w-screen-2xl mx-auto" style={{ maxWidth: 1920 }}>
                <Slider {...settings}>
                    <img className="block cursor-pointer h-screen" src={banner1} alt='' />
                    <img className="block cursor-pointer h-screen" src={banner2} alt='' />
                </Slider>
            </div>
            <div className='px-10 py-28 '>
                <h1 className='relative max-w-2xl mx-auto text-center font-bold text-2xl text-white  border-b-2 border-gray-700' >
                    <span className='absolute font-bold bg-red-700 p-3 z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>SẢN PHẨM HÓT NHẤT </span>
                </h1>
                <RenderProducts datas={products} />
            </div>
        </div>
    )
}