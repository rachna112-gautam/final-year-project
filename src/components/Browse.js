import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import template1 from './../assets/template1.jpg';
import template2 from './../assets/template2.jpg';
import template3 from './../assets/template3.jpg';
import template4 from './../assets/template4.jpg';
import Item1 from './../assets/item1.jpg';
import Item2 from './../assets/item2.jpg';
import Item3 from './../assets/item3.jpg';
import Item4 from './../assets/item4.jpg';
import { useLocation } from "react-router-dom";
export default function Browse(props) {
    const location = useLocation();
    // console.log(location.state.search);
    const items = [{
        id: 1,
        img: template1,
        price: 9,
        title: 'Portfolio Website',
        liked: '',
        added: '',
        rating: 4,
        type: 'template'
    }, {
        id: 2,
        img: template2,
        price: 15.09,
        title: 'Space theme template',
        liked: '',
        added: 'added',
        rating: 4,
        type: 'template'
    }, {
        id: 3,
        img: template3,
        price: 12,
        title: 'Real  estate website',
        liked: '',
        added: '',
        rating: 4,
        type: 'template'
    },
    {
        id: 4,
        img: template4,
        price: 10,
        title: 'Business website',
        liked: 'liked',
        added: '',
        rating: 4,
        type: 'template'
    },
    {
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
    const [searchedValue, setSearchedValue] = useState('');
    const [filteredData, setFilteredData] = useState(items);

    useEffect(() => {
        let searchResult = [];
        if (location.state.search !== 'all') {
            searchResult = items.filter((data) => {
                console.log(data.type)
                return data.type === location.state.search.toLowerCase();
            });
            setFilteredData(searchResult);
        }
        // console.log("filteredData", filteredData);
    }, [])
    const searchHandle = (value) => {
        console.log('value-->', value.toLowerCase())
        let result = [];
        result = items.filter((data) => {

            return data.title.toLowerCase().search(value) !== -1;
        });
        setFilteredData(result);
    }
    return (
        <div>
            <Header buyerInfo={props.buyerInfo} />
            <hr />
            <div className="container p-5 ">
                <div className="row">
                    <div className="col-lg-2 col-md-12 col-sm-12">
                        <h4 className="cat text-center">Catergory</h4>
                    </div>
                    <div className="col-lg-10 col-md-12 col-sm-12 ">
                        <div class="input-group m-3  w-50">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon" value={searchedValue} onChange={(e) => {
                                    e.preventDefault();
                                    setSearchedValue(e.target.value);
                                    searchHandle(e.target.value);
                                }} />

                        </div>
                        <div className="filteredList d-flex justify-content-start align-items-center
                        flex-wrap">
                            {filteredData.map((el) => {
                                return <Card item={el} />
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
