import React, { useState, useEffect } from 'react'
import Card from './Card';
import { useHistory } from "react-router-dom";

const Section = (props) => {
    const history = useHistory();
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(props.items)
    }, [props.items])

    const viewAllHandle = () => {
        history.push({
            pathname: '/browse',
            search: `?search:${items ? items.name : "--".toLowerCase()}`,
            state: { search: items ? items.name : "--" }
        })
    }

    return (
        <div className="container section">
            <div className="top">
                {console.log("items in sectiom", props)}
                <h3>{props.title}</h3>
                <button className="btn viewAll" onClick={() => viewAllHandle()}>View All<i class="fas fa-chevron-right"></i></button>
            </div>
            <div className="itemLists table-responsive">
                {props.items.map((item) => {

                    return (
                        <Card item={item} buy={props.buy} />

                    )
                })
                }
            </div>
        </div>
    )
}

export default Section;
