import React from 'react'
import Section from '../Section';
import Item1 from './../../assets/item1.jpg';
import Item2 from './../../assets/item2.jpg';
import Item3 from './../../assets/item3.jpg';
import Item4 from './../../assets/item4.jpg';
export default function Background() {

    const items = [{
        id: 1,
        img: Item1,
        price: 20.9,
        title: 'Purple Background',
        liked: '',
        added: '',
        rating: 4
    }, {
        Id: 2,
        img: Item2,
        price: 10.1,
        title: 'Texture & Pattern',
        liked: '',
        added: 'added',
        rating: 3
    }, {
        Id: 3,
        img: Item3,
        price: 20.01,
        title: 'Sunset Background',
        liked: '',
        added: '',
        rating: 5
    },
    {
        Id: 4,
        img: Item4,
        price: 17.020,
        title: 'Vintage Car',
        liked: 'liked',
        added: '',
        rating: 4
    },

    ]
    return (
        <Section items={items} title="Wallpaper" />
    )
}
