import React from 'react';
import Card from './Card';
import { useHistory } from "react-router-dom";

const Section = (props) => {
    const history = useHistory();
    const viewAllHandle = () => {
        history.push({
            pathname: '/browse',
            search: `?search:${props.title.toLowerCase()}`,
            state: { search: props.title }
        })
    }
    return (
        <div className="container section">
            <div className="top">
                <h3>{props.title}</h3>
                <button className="btn viewAll" onClick={() => viewAllHandle()}>View All<i class="fas fa-chevron-right"></i></button>
            </div>
            <div className="itemLists table-responsive">
                {props.items.map((item) => {

                    return (
                        <Card item={item} />

                    )
                })
                }
            </div>
        </div>
    )
}

export default Section;
