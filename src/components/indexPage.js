import { useEffect, useState } from "react";
import CustomLink from "./CustomsLink";
import { Outlet, NavLink } from "react-router-dom";
import logo from './../images/LOGO_MAD_TITAN_1.svg'
import Footer from "./footer";
import { Phone, Facebook, Search, Cart4 } from "react-bootstrap-icons";
export default function IndexPage() {
    const [gotoTop, setGototop] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setGototop(window.scrollY >= 250)
        }
        // thêm lắng nghe sự kiện scroll sau khi component mounted.
        window.addEventListener('scroll', handleScroll)
        // xóa event sau khi component unmounted , để tránh bị rò rỉ bộ nhớ (cái event sẽ ko bao giờ sử dụng lại được)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <>
            <div className=" bg-red-700">
                <div className="bg-red-500">
                    <div className=" max-w-screen-xl mx-auto flex py-3  text-white text-md ">
                        <div className="flex space-x-5">
                            <a className="flex transition-colors duration-500 items-center hover:text-blue-500" href="tel:+0398294534" Aria-about="contact phone number">
                                <Phone size={32} />
                                <span className="ml-2">Hotline: 0398294534</span> </a>
                            <a className="flex transition-colors duration-500 items-center hover:text-blue-500" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                <Facebook size={32} />
                                <span className="ml-2">Ghé Fanpage</span>
                            </a>
                        </div>

                        <div className="ml-auto search-wrapper w-full max-w-sm p-1 bg-white border border-gray-700 rounded-2xl">
                            <form method="POST" action="#">
                                <div className="flex items-center px-3">
                                    <input className="bg-transparent text-gray-800 px-4 py-1 text-base flex-grow border-0 outline-none" type="text" placeholder="Tìm kiếm sản phẩm" />
                                    <Search color="black" size={16} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-2xl mx-auto bg-gray-900 flex justify-around  py-10 items-center">
                    <div className="logo"><img src={logo} alt="logo" width={132} /></div>
                    <nav className="max-w-2xl">
                        <ul className=" px-10 py-5 space-x-10 flex justify-around uppercase font-bold  bg-red-500 rounded-2xl">
                            <li ><CustomLink to="/trang-chu" >trang chủ</CustomLink></li>
                            <li ><CustomLink to="/san-pham">SẢN PHẨM</CustomLink></li>
                            <li ><CustomLink to="/san-pham-khuyen-mai">FLASH SALE</CustomLink></li>
                            <li ><CustomLink to="/thuong-hieu">thương hiệu</CustomLink></li>
                        </ul>
                    </nav>
                    <div className="btn">
                        <a className="gh-btn transition-colors duration-500 px-6 py-3 flex items-center text-gray-900 hover:text-white bg-red-600 border border-red-800 rounded-lg" href="/gio-hang">
                            <Cart4 color="white" size={32} />
                        </a>
                    </div>
                </div>

            </div>

            <Outlet />

            <Footer>
                {
                    gotoTop ? (<button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        style={{ position: 'absolute', top: -25, right: 50 }}
                        className='w-10 h-10 p-6 bg-white rounded-full flex justify-center items-center'
                    >
                        <span className="block border-red-600 -translate-y-1 border-8 border-l-transparent border-r-transparent border-t-transparent"></span>
                    </button>) : null
                }
            </Footer>

        </>
    )
}