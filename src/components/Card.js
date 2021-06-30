import React from 'react';
import { useHistory } from "react-router-dom";

export default function Card(props) {
    const history = useHistory();
    const item = props.item;
    const itemOnClickHandle = (item) => {
        history.push({
            pathname: '/item',
            search: `?id:${item.id}`,
            state: { detail: item }
        })
    }
    return (

        <div className="card" key={item.id} style={{ "width": "16rem", }} >
            <div className="imgContainer">
                <img src={item.imageUrl} className="card-img-top" alt={item.name} />
            </div>
            <div className="card-body">
                <div className="row">
                    <p className="col-6 mb-0 text-truncate">{item.name}</p>
                    <div className="col-6 price"><i className="fab fa-ethereum"></i>{item.price}</div>
                </div>
                <div className="card-btm">
                    <button type="button" className="btn" onClick={() => {
                        props.buy(item.pid, item.price)
                    }}>Buy</button>
                    <button type="button" className="btn view-btn" onClick={() => {
                        itemOnClickHandle(item)
                    }}>View</button>
                    {/*<div className="some-btn">
                        <i className={`fas fa-heart ${item.liked}`} onClick={() => {
                            return item.liked = item.liked === "" ? "liked" : ""
                        }}></i>
                        <i className={`fas fa-cart-plus ${item.added}`}></i>
                    </div>*/}
                </div>
            </div>
        </div>
    )
}
