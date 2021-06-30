import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Profile(props) {
    const [modalData, setModalData] = useState({})
    const [items, setItems] = useState([])
    const getItems = async () => {
        let localItem = []
        if (props.purchasedItems) {
            for (let i = 0; i < props.purchasedItems.length; i++) {
                let item = await props.getItemsDetails(props.purchasedItems[i]);
                localItem.push(item)
            }
            setItems(localItem)
        }
    }

    useEffect(() => {
        getItems()
    }, [props.account, props.purchasedItems, props.getItemsDetails])

    return (
        <div className="signin">

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{modalData.name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col-6 modalImgCon">
                                    <img src={modalData.imageUrl} alt="" />
                                </div>
                                <div className="col-6">
                                    <div className="details">
                                        <div>Product ID : {modalData.pid}</div>
                                        <div>Price : {modalData.price} ETH</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="modal-footer">

                            <button type="button" class="btn btn-primary">Download&nbsp;<i class="fas fa-download"></i></button>
                        </div> */}
                    </div>
                </div>
            </div>
            <Header buyerInfo={props.buyerInfo} />
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
                                <li>Wallet address : <span>{props.account ? props.account.slice(0, 6) + "...." : "0x"}</span></li>
                                <li>Wallet balance : <span>{props.balance ? (props.balance / 10 ** 18).toFixed(2) : "0.0"}</span>&nbsp;ETH</li>
                                {console.log("items purchased", props.purchasedItems?.length)}
                                <li>Product owned : <span>{props.purchasedItems?.length}</span></li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="v-pills-products" role="tabpanel" aria-labelledby="v-pills-products-tab">
                            <ul>
                                {items.map(data => {
                                    return <li>
                                        <div className="profileImgCon">
                                            <img src={data.imageUrl} alt="" />
                                        </div>
                                        <div className="productDetail">
                                            {data.name}
                                            <span>{data.price}&nbsp;ETH</span>
                                        </div>

                                        <div>
                                            <button type="button" className="btn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                                                setModalData(data);
                                            }}>View</button>
                                            {/* <button type="button" className="btn btn-primary">Download&nbsp;<i class="fas fa-download"></i></button> */}
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
