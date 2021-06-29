import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Item1 from './../assets/item1.jpg';
import Item2 from './../assets/item2.jpg';
import Item3 from './../assets/item3.jpg';
import Item4 from './../assets/item4.jpg';

export default function Profile() {

    const items = [{
        id: 1,
        img: Item1,
        price: 20.9,
        title: 'Purple Background',
        liked: '',
        added: '',
        rating: 4,
        type: 'background'
    }, {
        id: 2,
        img: Item2,
        price: 10.1,
        title: 'Texture & Pattern',
        liked: '',
        added: 'added',
        rating: 3,
        type: 'background'
    }, {
        id: 3,
        img: Item3,
        price: 20.01,
        title: 'Sunset Background',
        liked: '',
        added: '',
        rating: 5,
        type: 'background'
    },
    {
        id: 4,
        img: Item4,
        price: 17.020,
        title: 'Vintage Car',
        liked: 'liked',
        added: '',
        rating: 4,
        type: 'background'
    },

    ]
    return (
        <div className="signin">
            <Header />
            <div className="container text-center profile">
                <div class="d-flex align-items-start">

                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link active " id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                        <button class="nav-link" id="v-pills-products-tab" data-bs-toggle="pill" data-bs-target="#v-pills-products" type="button" role="tab" aria-controls="v-pills-products" aria-selected="false">Products</button>
                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
                    </div>
                    <div class="tab-content w-100 p-3" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <ul>
                                <li>Wallet address : <span>xxxx</span></li>
                                <li>Wallet balance : <span>100</span>&nbsp;ETH</li>
                                <li>Product owned : <span>1</span></li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="v-pills-products" role="tabpanel" aria-labelledby="v-pills-products-tab">
                            <ul>
                                {items.map(data => {
                                    return <li>
                                        <div className="profileImgCon">
                                            <img src={data.img} alt="" />
                                        </div>
                                        <div className="productDetail">
                                            {data.title}
                                            <span>{data.price}&nbsp;ETH</span>
                                        </div>

                                        <div>
                                            <button type="button" className="btn text-white">View</button>
                                            <button type="button" className="btn btn-primary">Download&nbsp;<i class="fas fa-download"></i></button>
                                        </div>
                                    </li>
                                })}

                            </ul>

                        </div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">d</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
