import React from 'react';
import Card from './Card';


const Section = (props) => {

    return (
        <div className="container section">
            <div className="top">
                <h3>{props.title}</h3>
                <a href="/viewAll" className="viewAll">View All<i class="fas fa-chevron-right"></i></a>
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
