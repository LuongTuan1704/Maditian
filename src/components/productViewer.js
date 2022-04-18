import React from 'react'
import { useEffect } from "react"
import ar from './../images/Polygon_bt.svg'
import { ArrowUpSquare, ArrowDownSquare, CartPlus } from "react-bootstrap-icons";
import { Products as products } from './../datas/ProductsData';
const Star = ({ marked, starId }) => {
    return (
        <span data-star-id={starId} className="star" role="button">
            {marked ? '\u2605' : '\u2606'}
        </span>
    );
};

const StarRating = ({ value }) => {
    const [rating, setRating] = React.useState(parseInt(value) || 0);
    const [selection, setSelection] = React.useState(0);

    const hoverOver = event => {
        let val = 0;
        if (event && event.target && event.target.getAttribute('data-star-id'))
            val = event.target.getAttribute('data-star-id');
        setSelection(val);
    };
    return (
        <div
            onMouseOut={() => hoverOver(null)}
            onClick={e => setRating(e.target.getAttribute('data-star-id') || rating)}
            onMouseOver={hoverOver}
        >
            {Array.from({ length: 5 }, (v, i) => (
                <Star
                    starId={i + 1}
                    key={`star_${i + 1}`}
                    marked={selection ? selection >= i + 1 : rating >= i + 1}
                />
            ))}
        </div>
    );
};
export default function ProductViewer({ productId }) {
    let product = products.filter(product => product.id.toString() === productId)[0]
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    return (
        <div className=" bg-red-700 text-white py-10">
            <div className="max-w-screen-lg mx-auto flex space-x-16 py-10">

                <div className="flex w-1/2  flex-shrink-0 space-x-6">
                    <div className="flex flex-col space-y-3 items-center">
                        <button className="bnt pre"><img width={25} src={ar} alt='ic' /></button>
                        <div className="flex flex-col space-y-3">
                            <div className="bg-slate-400 w-16 h-16 rounded-xl cursor-pointer border-2 border-transparent hover:border-blue-600 transition-colors duration-300"></div>
                            <div className="bg-slate-400 w-16 h-16 rounded-xl cursor-pointer border-2 border-transparent hover:border-blue-600 transition-colors duration-300"></div>
                            <div className="bg-slate-400 w-16 h-16 rounded-xl cursor-pointer border-2 border-transparent hover:border-blue-600 transition-colors duration-300"></div>
                        </div>
                        <button className="bnt next"><img className='rotate-180' width={25} src={ar} alt='ic' /></button>
                    </div>
                    <div className="bigImg flex flex-col flex-grow space-y-3 items-center">
                        <img className="p-6 bg-gray-400 rounded-3xl" src={`${product.imgURL}`} alt='img' />
                        <div className="btn flex ml-auto space-x-2">
                            <div className="flex items-center bg-white p-3 text-red-700 uppercase rounded-lg cursor-pointer "><span> Mua ngay</span></div>
                            <span className=" flex items-center bg-white p-3 rounded-lg cursor-pointer"> <CartPlus color="black" size={32} /></span>
                        </div>
                    </div>


                </div>
                <div className="right-half ">
                    <h1 className="font-bold text-2xl py-2">
                        {product.name}

                        <span className="text-sm pl-2">{product.more}</span>
                    </h1>
                    <h2 className="font-bold text-2xl py-2">
                        {product.price}
                    </h2>
                    <p className="py-5">
                        ISO FURY là sản phẩm phát triển cơ bắp cung cấp 100% Whey Isolate và
                        Hydrolyzed hấp thu nhanh. Whey MAD TITAN protein là hàng Việt Nam, cam kết
                        chất lượng, giá rẻ nhất tại Hà Nội & Tp.HCM.
                    </p>
                    <p>
                        Thương hiệu: MAD TITAN <br />
                        Định lượng: 2.2kg <br />
                        SKU: 858925004050
                    </p>
                    <div className="mt-12 mb-6 relative  p-8 border-2 border-dotted border-white rounded-3xl ">
                        <div className=" absolute -top-6 left-12 py-2 px-6 bg-white font-bold text-base text-gray-800 rounded-lg">
                            % Mã Giảm Giá
                        </div>
                        <div className="flex ">
                            <img src={`${product.mggImgUrl[0]}`} alt='mgg1' className="w-1/2" />
                            <img src={`${product.mggImgUrl[1]}`} alt='mgg2' className="w-1/2" />
                        </div>
                    </div>
                    <h3 className="font-bold text-xl py-2">CHỌN HƯƠNG VỊ </h3>
                    <div className="flex flex-wrap space-x-3 space-y-3  text-red-700 uppercase text-sm">
                        <div className="bg-white p-2 rounded-md mt-3">VANILLA</div>
                        <div className="bg-white p-2 rounded-md">MATCHA</div>
                        <div className="bg-white p-2 rounded-md">CHOCOLATE</div>
                        <div className="bg-white p-2 rounded-md">MASS ( Tăng cơ )</div>
                        <div className="bg-white p-2 rounded-md">HỘP VANILLA</div>
                        <div className="bg-white p-2 rounded-md">HỘP MATCHA</div>
                        <div className="bg-white p-2 rounded-md">HỘP CHOCOLATE</div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg mx-auto">
                <h3 className="font-bold text-2xl py-6">
                    THÔNG TIN
                </h3>
                <h4 className="font-bold text-xl py-6">MAD TITAN – Công thức tăng cơ ưu việt nhất cùng Whey Protein Isolate và
                    Whey Protein Hydrolysate</h4>
                <p>Một quá trình tập luyện chăm chỉ chắc chắn phải đi kèm với nguồn dinh dưỡng quan trọng, có khả năng hấp thu nhanh vượt trội
                    sau buổi tập như Rule 1 Protein để giúp bạn phục hồi và xây dựng cơ bắp hiệu quả.
                    <br />
                    Với công thức vượt trội Whey Protein Isolate và Whey Protein Hydrolysate tinh khiết, nhiều BCAA hơn ( lên tới 6 gram – mỗi lần dùng ) ,
                    giàu Glutamine, không chứa tạp chất ,… từ Rule 1 Protein chắc chắn sẽ đảm bảo nguồn protein quan trọng để giúp bạn phát triển cơ bắp hiệu tối ưu nhất.</p>
                <h4 className="font-bold text-xl py-6">Tại sao MAD TITAN lại được người tập gym, tập thể hình đánh giá cao</h4>
                <p>MAD TITAN với lợi thế là một thương hiệu mới thành lập từ năm 2014 đã không tiếc chi phí ứng dụng những công nghệ
                    sản xuất tiên tiến, hiện đại nhất tạo nên sản phẩm tăng cơ bắp hàng đầu thị trường hiện nay.
                    <br />
                    Với công nghệ CFM tạo nên nguồn Whey ISOLATE hấp thu nhanh nhất, tinh khiết nhất, không còn chứa chất béo,
                    tinh bột, cholesterol hoặc các tạp chất khác. </p>
                <h4 className="font-bold text-xl py-6">Thành phần chính của ISO FURY</h4>
                <p>Khẩu phần 1 muỗng ( 30, 1g), Calories 110, Tổng chất béo 0,5, Chất béo bão hòa, Cholesterol 5mg
                    Natri 70mg, Tổng Carbohydrate 2g, Chất xơ ăn kiêng 1G, Đường 0g, Chất đạm 25g
                    Vitamin A 0%, Vitamin C 0%, Canxi 15%, Sắt 4%</p>
                <h4 className="font-bold text-xl py-6">Cách sử dụng ISO FURY hiệu quả nhất</h4>
                <p>Thời điểm sử dụng ISO FURY tốt nhất là sáng sớm ngay khi ngủ dậy 1 lần và ngay sau khi tập luyện sử dụng 1 lần.
                    <br />
                    Mỗi lần dùng 1 muỗng pha với 250-300ml nước lọc ( thêm đá lạnh sẽ ngon hơn ) . Lưu ý không nên pha ISO FURY với nước nóng,
                    sử dụng liền sau khi pha, không nên để lâu không đảm bảo dinh dưỡng.</p>
                <h5 className="font-bold text-xl py-6">Thêm Đánh Giá</h5>
                <p>Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</p>
                <form action="" className="mt-5  flex flex-col">
                    <div className="flex items-center space-x-2"> <span>Đánh giá của bạn: </span>
                        <StarRating value={2} />
                    </div>
                    <div className="flex">
                        <div className=" w-2/3">
                            <div className="flex mb-3 flex-col space-y-2">
                                <label htmlFor="name">Tên</label>
                                <input className="focus:outline-none focus:border-blue-700 bg-transparent border-2 border-white rounded-lg px-6 py-3 text-base" id="name" type="text" />
                            </div>
                            <div className="flex mb-3 flex-col space-y-2">
                                <label htmlFor="email">Email</label>
                                <input className="focus:outline-none focus:border-blue-700 bg-transparent  border-2 borderwhborder-white0 rounded-lg px-6 py-3 text-base" id="email" type="text" />
                            </div>
                            <div className=" flex  mb-3 flex-col space-y-2">
                                <label htmlFor="text">Nhận xét của bạn *</label>
                                <textarea className="focus:outline-none focus:border-blue-700 bg-transparent border-2 border-white rounded-lg px-6 py-3 text-base resize-none" name="text" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                    </div>


                    <div className="flex mb-3 space-x-2 items-center">
                        <input className="w-6 h-6" type="checkbox" name="" id="" />
                        <span>Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi.</span>
                    </div>
                    <button type="submit" className="mr-auto flex text-red-700 bg-white px-6 py-3 rounded-lg uppercase text-xl">GỬI ĐI</button>
                </form>
            </div>
        </div>
    )
}