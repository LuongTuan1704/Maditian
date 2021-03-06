import React from 'react'
import { useEffect } from "react"
import ar from './../images/Polygon_bt.svg'
import { CartPlus } from "react-bootstrap-icons";
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

    document.title = product.name + " " + (product.more ||= '');
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
                        <img className="p-6 bg-white rounded-3xl" src={`./../${product.imgURL}`} alt='img' />
                        <div className="btn flex ml-auto space-x-2">
                            <div className="flex items-center bg-white p-3 text-red-700 uppercase rounded-lg cursor-pointer transition-colors duration-300 hover:text-blue-700 ">
                                <span> Mua ngay</span>
                            </div>
                            <span className=" flex items-center bg-white p-3 rounded-lg cursor-pointer">
                                <CartPlus className="text-black transition-colors duration-300 hover:text-blue-700" size={32} />
                            </span>
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
                        ISO FURY l?? s???n ph???m ph??t tri???n c?? b???p cung c???p 100% Whey Isolate v??
                        Hydrolyzed h???p thu nhanh. Whey MAD TITAN protein l?? h??ng Vi???t Nam, cam k???t
                        ch???t l?????ng, gi?? r??? nh???t t???i H?? N???i & Tp.HCM.
                    </p>
                    <p>
                        Th????ng hi???u: MAD TITAN <br />
                        ?????nh l?????ng: 2.2kg <br />
                        SKU: 858925004050
                    </p>
                    <div className="mt-12 mb-6 relative  p-8 border-2 border-dotted border-white rounded-3xl ">
                        <div className=" absolute -top-6 left-12 py-2 px-6 bg-white font-bold text-base text-gray-800 rounded-lg">
                            % M?? Gi???m Gi??
                        </div>
                        <div className="flex ">
                            <img src={`./../${product.mggImgUrl[0]}`} alt='ma giam gia' className="w-1/2" />
                            <img src={`./../${product.mggImgUrl[1]}`} alt='ma giam gia' className="w-1/2" />
                        </div>
                    </div>
                    <h3 className="font-bold text-xl py-2">CH???N H????NG V??? </h3>
                    <div className="flex flex-wrap space-x-3 space-y-3  text-red-700 uppercase text-sm">
                        <div className="bg-white p-2 rounded-md mt-3">VANILLA</div>
                        <div className="bg-white p-2 rounded-md">MATCHA</div>
                        <div className="bg-white p-2 rounded-md">CHOCOLATE</div>
                        <div className="bg-white p-2 rounded-md">MASS ( T??ng c?? )</div>
                        <div className="bg-white p-2 rounded-md">H???P VANILLA</div>
                        <div className="bg-white p-2 rounded-md">H???P MATCHA</div>
                        <div className="bg-white p-2 rounded-md">H???P CHOCOLATE</div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg mx-auto">
                <h3 className="font-bold text-2xl py-6">
                    TH??NG TIN
                </h3>
                <h4 className="font-bold text-xl py-6">MAD TITAN ??? C??ng th???c t??ng c?? ??u vi???t nh???t c??ng Whey Protein Isolate v??
                    Whey Protein Hydrolysate</h4>
                <p>M???t qu?? tr??nh t???p luy???n ch??m ch??? ch???c ch???n ph???i ??i k??m v???i ngu???n dinh d?????ng quan tr???ng, c?? kh??? n??ng h???p thu nhanh v?????t tr???i
                    sau bu???i t???p nh?? Rule 1 Protein ????? gi??p b???n ph???c h???i v?? x??y d???ng c?? b???p hi???u qu???.
                    <br />
                    V???i c??ng th???c v?????t tr???i Whey Protein Isolate v?? Whey Protein Hydrolysate tinh khi???t, nhi???u BCAA h??n ( l??n t???i 6 gram ??? m???i l???n d??ng ) ,
                    gi??u Glutamine, kh??ng ch???a t???p ch???t ,??? t??? Rule 1 Protein ch???c ch???n s??? ?????m b???o ngu???n protein quan tr???ng ????? gi??p b???n ph??t tri???n c?? b???p hi???u t???i ??u nh???t.</p>
                <h4 className="font-bold text-xl py-6">T???i sao MAD TITAN l???i ???????c ng?????i t???p gym, t???p th??? h??nh ????nh gi?? cao</h4>
                <p>MAD TITAN v???i l???i th??? l?? m???t th????ng hi???u m???i th??nh l???p t??? n??m 2014 ???? kh??ng ti???c chi ph?? ???ng d???ng nh???ng c??ng ngh???
                    s???n xu???t ti??n ti???n, hi???n ?????i nh???t t???o n??n s???n ph???m t??ng c?? b???p h??ng ?????u th??? tr?????ng hi???n nay.
                    <br />
                    V???i c??ng ngh??? CFM t???o n??n ngu???n Whey ISOLATE h???p thu nhanh nh???t, tinh khi???t nh???t, kh??ng c??n ch???a ch???t b??o,
                    tinh b???t, cholesterol ho???c c??c t???p ch???t kh??c. </p>
                <h4 className="font-bold text-xl py-6">Th??nh ph???n ch??nh c???a ISO FURY</h4>
                <p>Kh???u ph???n 1 mu???ng ( 30, 1g), Calories 110, T???ng ch???t b??o 0,5, Ch???t b??o b??o h??a, Cholesterol 5mg
                    Natri 70mg, T???ng Carbohydrate 2g, Ch???t x?? ??n ki??ng 1G, ???????ng 0g, Ch???t ?????m 25g
                    Vitamin A 0%, Vitamin C 0%, Canxi 15%, S???t 4%</p>
                <h4 className="font-bold text-xl py-6">C??ch s??? d???ng ISO FURY hi???u qu??? nh???t</h4>
                <p>Th???i ??i???m s??? d???ng ISO FURY t???t nh???t l?? s??ng s???m ngay khi ng??? d???y 1 l???n v?? ngay sau khi t???p luy???n s??? d???ng 1 l???n.
                    <br />
                    M???i l???n d??ng 1 mu???ng pha v???i 250-300ml n?????c l???c ( th??m ???? l???nh s??? ngon h??n ) . L??u ?? kh??ng n??n pha ISO FURY v???i n?????c n??ng,
                    s??? d???ng li???n sau khi pha, kh??ng n??n ????? l??u kh??ng ?????m b???o dinh d?????ng.</p>
                <h5 className="font-bold text-xl py-6">Th??m ????nh Gi??</h5>
                <p>Email c???a b???n s??? kh??ng ???????c hi???n th??? c??ng khai. C??c tr?????ng b???t bu???c ???????c ????nh d???u *</p>
                <form action="" className="mt-5  flex flex-col">
                    <div className="flex items-center space-x-2"> <span>????nh gi?? c???a b???n: </span>
                        <StarRating value={2} />
                    </div>
                    <div className="flex">
                        <div className=" w-2/3">
                            <div className="flex mb-3 flex-col space-y-2">
                                <label htmlFor="name">T??n</label>
                                <input className="focus:outline-none focus:border-blue-700 bg-transparent border-2 border-white rounded-lg px-6 py-3 text-base" id="name" type="text" />
                            </div>
                            <div className="flex mb-3 flex-col space-y-2">
                                <label htmlFor="email">Email</label>
                                <input className="focus:outline-none focus:border-blue-700 bg-transparent  border-2 borderwhborder-white0 rounded-lg px-6 py-3 text-base" id="email" type="text" />
                            </div>
                            <div className=" flex  mb-3 flex-col space-y-2">
                                <label htmlFor="text">Nh???n x??t c???a b???n *</label>
                                <textarea className="max-h-80 focus:outline-none focus:border-blue-700 bg-transparent border-2 border-white rounded-lg px-6 py-3 text-base resize-none" name="text" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                    </div>


                    <div className="flex mb-3 space-x-2 items-center">
                        <input className="w-6 h-6" type="checkbox" name="" id="" />
                        <span>L??u t??n c???a t??i, email, v?? trang web trong tr??nh duy???t n??y cho l???n b??nh lu???n k??? ti???p c???a t??i.</span>
                    </div>
                    <button type="submit" className="mr-auto flex text-red-700 bg-white px-6 py-3 rounded-lg uppercase text-xl">G???I ??I</button>
                </form>
            </div>
        </div>
    )
}