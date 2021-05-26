import React from 'react';
import { useHistory } from "react-router-dom";


const Section = (props) => {
    const history = useHistory();
    const itemOnClickHandle = (item) => {
        history.push({
            pathname: '/item',
            search: `?id:${item.id}`,
            state: { detail: item }
        })
    }
    return (
        <div className="container section">
            <div className="top">
                <h3>{props.title}</h3>
                <a href="/viewAll" className="viewAll">View All<i class="fas fa-chevron-right"></i></a>
            </div>
            <div className="itemLists table-responsive">
                {props.items.map((item) => {

                    return (

                        <div className="card" key={item.id} style={{ "width": "16rem", }} >
                            <div className="imgContainer">
                                <img src={item.img} className="card-img-top" alt={item.title} />
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <p className="col-6 mb-0 text-truncate">{item.title}</p>
                                    <div className="col-6 price"><i className="fab fa-ethereum"></i>{item.price}</div>
                                </div>
                                <div className="card-btm">
                                    <button type="button" className="btn">Buy</button>
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
                })
                }
            </div>
        </div>
    )
}

export default Section;
