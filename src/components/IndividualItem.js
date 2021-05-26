import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export default function IndividualItem() {
    const location = useLocation();
    const [itemDetail, setItemDetail] = useState({});
    useEffect(() => {
        setItemDetail(location.state.detail); // result: 'some_value'
    }, [location]);


    const ratingHandle = () => {

        var elements = [];
        for (let i = 0; i < itemDetail.rating; i++) {
            elements.push(<i class="fas fa-star"></i>);
        }
        return elements;
    }
    return (

        <div className="ii">
            <Header />
            <div >
                <div className="imgCon">
                    <img src={itemDetail.img} alt={itemDetail.title} />
                </div>
                <div className="container p-5">
                    <div className="content-title">
                        <h2>{itemDetail.title}</h2>
                        <div className="Owner">
                            <a href="/userDetail"> Owner <i class="fas fa-user-circle"></i></a>

                        </div>
                    </div>
                    <div className="productDetail">
                        <div>
                            <span>Price</span>
                            <span><i className="fab fa-ethereum"></i>{itemDetail.price}</span>
                        </div>
                        <button type="button" className="btn browsing">BUY</button>
                    </div>
                    <div className="highlights">
                        <span>HIGHLIGHT</span>
                        <br />
                        <span className="stars">{ratingHandle()}</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
