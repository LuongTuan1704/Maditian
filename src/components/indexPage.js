import { useEffect, useState } from "react";
import CustomLink from "./CustomsLink";
import { Outlet, Link } from "react-router-dom";
import logo from './../images/LOGO_MAD_TITAN_New.svg'
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
                    <div className="flex max-w-screen-2xl mx-auto px-10 py-3  text-white text-md ">
                        <div className="flex space-x-5">
                            <a className="flex items-center" href="tel:+0398294534" Aria-about="contact phone number">
                                <Phone color="green" size={16} />
                                <span className="ml-2 transition-colors duration-500  hover:text-gray-700">Hotline: 0398294534</span> </a>
                            <a className="flex items-center" href="https://www.facebook.com/MAD-TITAN-100130209330524/?ref=pages_you_manage" target="_blank" rel="noreferrer">
                                <Facebook color="blue" size={16} />
                                <span className="ml-2 transition-colors duration-500  hover:text-gray-700">Ghé Fanpage</span>
                            </a>
                        </div>

                        <div className="ml-auto search-wrapper w-full max-w-sm p-1 bg-gray-800  border border-white rounded-2xl">
                            <form method="POST" action="#">
                                <div className="flex items-center px-3">
                                    <input className="bg-transparent text-white px-4 py-1 text-base flex-grow border-0 outline-none" type="text" placeholder="Tìm kiếm sản phẩm" />
                                    <Search color="white" size={16} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900"><div className="max-w-screen-2xl mx-auto  flex justify-around  py-10 items-center">
                    <div className="logo"><img src={logo} alt="logo" width={132} /></div>
                    <nav className="max-w-2xl">
                        <ul className=" px-10 py-5 space-x-10 flex justify-around uppercase font-bold  bg-red-500 rounded-2xl">
                            <li ><CustomLink to="/" >trang chủ</CustomLink></li>
                            <li ><CustomLink to="/san-pham">SẢN PHẨM</CustomLink></li>
                            <li ><CustomLink to="/flash-sale">FLASH SALE</CustomLink></li>
                            <li ><CustomLink to="/thuong-hieu">thương hiệu</CustomLink></li>
                        </ul>
                    </nav>
                    <div className="btn">
                        <Link className="gh-btn transition-colors duration-500 px-6 py-3 flex items-center  bg-red-600 border border-red-800 rounded-lg"
                            to="/gio-hang">
                            <Cart4 className="text-white transition-colors duration-300 hover:text-gray-700" size={32} />
                        </Link>
                    </div>
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