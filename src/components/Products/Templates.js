import React from 'react'
import Section from '../Section';
import template1 from './../../assets/template1.jpg';
import template2 from './../../assets/template2.jpg';
import template3 from './../../assets/template3.jpg';
import template4 from './../../assets/template4.jpg';
export default function Templates() {

    const items = [{
        id: 1,
        imageUrl: template1,
        price: 9,
        name: 'Portfolio Website',
        liked: '',
        added: '',
        rating: 4,
        type: 'template'
    }, {
        id: 2,
        imageUrl: template2,
        price: 15.09,
        name: 'Space theme template',
        liked: '',
        added: 'added',
        rating: 4,
        type: 'template'
    }, {
        id: 3,
        imageUrl: template3,
        price: 12,
        name: 'Real  estate website',
        liked: '',
        added: '',
        rating: 4,
        type: 'template'
    },
    {
        id: 4,
        imageUrl: template4,
        price: 10,
        name: 'Business website',
        liked: 'liked',
        added: '',
        rating: 4,
        type: 'template'
    },

    ]
    return (
        <Section items={items} title="Template" />
    )
}
