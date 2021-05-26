import React from 'react'
import Section from '../Section';
import Item1 from './../../assets/item1.jpg';
import Item2 from './../../assets/item2.jpg';
import Item3 from './../../assets/item3.jpg';
import Item4 from './../../assets/item4.jpg';
export default function Templates() {

    const items = [{
        img: Item1,
        price: 20,
        title: 'title',
        liked: '',
        added: '',
    }, {
        img: Item2,
        price: 20,
        title: 'title',
        liked: '',
        added: 'added',
    }, {
        img: Item3,
        price: 20,
        title: 'title',
        liked: '',
        added: '',
    },
    {
        img: Item4,
        price: 20,
        title: 'title',
        liked: 'liked',
        added: '',
    },

    ]
    return (
        <Section items={items} title="Templates" />
    )
}
