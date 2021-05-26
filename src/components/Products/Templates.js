import React from 'react'
import Section from '../Section';
import template1 from './../../assets/template1.jpg';
import template2 from './../../assets/template2.jpg';
import template3 from './../../assets/template3.jpg';
import template4 from './../../assets/template4.jpg';
export default function Templates() {

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
    },

    ]
    return (
        <Section items={items} title="Templates" />
    )
}
