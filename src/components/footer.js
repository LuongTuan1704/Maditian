import ptLogo from './../images/LOGO_MAD_TITAN_2.svg'
import Qrimg from './../images/QRcode.svg'
export default function Footer({ children }) {
    return (

        <div className='App-footer mt-auto  bg-gray-900 px-10'>
            <div className='relative max-w-screen-2xl mx-auto'>
                {children}
            <div className="mb-6 pt-10">
                <div className="ft-left flex-grow grid grid-cols-3 gap-15">
                    <div className='space-y-4'>
                        <h3 className='font-bold text-3xl text-white'>Hệ Thống Cửa Hàng</h3>
                        <p className='text-red-600 text-lg'>CHI NHÁNH TP.HCM</p>
                        <p className='text-white'>Địa chỉ: 924 Trường sa, quận 3, Tp. HCM</p>
                        <p className='text-white'>08 3931 5568</p>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='font-bold text-3xl text-white'>Thông Tin Liên Hệ</h3>
                        <p ><span className='text-red-600 text-lg'>FACEBOOK : </span><a className='text-white' href="http://www.facebook.com/" target="_blank" rel="noopener noreferrer">Mad Titan ISO FURY</a> </p>
                        <p ><span className='text-red-600 text-lg'>YOUTOBE : </span><a className='text-white' href="http://www.youtube.com/" target="_blank" rel="noopener noreferrer">MADTITAN CHANNEL</a></p>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='font-bold text-3xl text-white'>Thông Tin Hỗ Trợ</h3>
                        <p className='text-red-600 text-lg'> <a href='/'> GIỚI THIỆU</a> </p>
                        <p className='text-red-600 text-lg'><a href="/">CHÍNH SÁCH BẢO MẬT</a></p>
                        <p className='text-red-600 text-lg'> <a href="/">HÌNH THỨC THANH TOÁN VÀ GIAO HÀNG</a></p>
                    </div>
                </div>
            </div>
            <div className='flex pb-10'>
                <div>
                    <img src={ptLogo} width={127} alt="ftlogo" />
                </div>
                <div className='text-white ml-10'>
                    <h3 className='text-lg'>CÔNG TY TNHH MADTITAN</h3>
                    <p>
                        Địa chỉ: 924 Trường sa, quận 3, Tp. HCM <br />
                        ĐT: 08 3931 5568 - Fax: 04 39821189 <br />
                        Email: <a href="mailto:Tpbs@madtitan.vn">Tpbs@madtitan.vn</a> <br />
                        <a href="http:// www.madtitan.com" target="_blank" rel="noopener noreferrer"> www.madtitan.com</a>
                    </p>
                </div>
                <div className="ml-auto ft-Qrcode flex items-center justify-center">
                    <img src={Qrimg} width={100} height={100} />
                </div>
            </div>
            </div>

        </div>
    )
}