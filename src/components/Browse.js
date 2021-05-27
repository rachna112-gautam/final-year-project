import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import template1 from './../assets/template1.jpg';
import template2 from './../assets/template2.jpg';
import template3 from './../assets/template3.jpg';
import template4 from './../assets/template4.jpg';
export default function Browse() {
    const items = [{
        id: 1,
        img: template1,
        price: 9,
        title: 'Portfolio Website',
        liked: '',
        added: '',
        rating: 4
    }, {
        id: 2,
        img: template2,
        price: 15.09,
        title: 'Space theme template',
        liked: '',
        added: 'added',
        rating: 4
    }, {
        id: 3,
        img: template3,
        price: 12,
        title: 'Real  estate website',
        liked: '',
        added: '',
        rating: 4
    },
    {
        id: 4,
        img: template4,
        price: 10,
        title: 'Business website',
        liked: 'liked',
        added: '',
        rating: 4
    },]
    const [searchedValue, setSearchedValue] = useState('');
    const [filteredData, setFilteredData] = useState(items);
    const searchHandle = () => {
        let value = searchedValue.toLowerCase();
        let result = [];
        console.log(value);
        result = items.filter((data) => {
            return data.title.toLowerCase().search(value) !== -1;
        });
        setFilteredData(result);
    }
    return (
        <div>
            <Header />
            <hr />
            <div className="container p-5">
                <div class="input-group m-3">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" value={searchedValue} onChange={(e) => {
                            e.preventDefault();
                            setSearchedValue(e.target.value);
                        }} />
                    <button type="button" class="btn btn-outline-primary" onClick={() => searchHandle()}>search</button>
                </div>
                <div className="filteredList d-flex">
                    {filteredData.map((el) => {
                        return <Card item={el} />
                    })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
