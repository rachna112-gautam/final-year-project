import React, { useState, useEffect } from 'react'
import Section from '../Section';
import Item1 from './../../assets/item1.jpg';
import Item2 from './../../assets/item2.jpg';
import Item3 from './../../assets/item3.jpg';
import Item4 from './../../assets/item4.jpg';

export default function Background(props) {
    const [items, setItems] = useState([])

    const getItems = async () => {

        let localItems = []
        if (props.items) {
            for (let i = 0; i < props.items.length; i++) {
                localItems.push(props.items[i])
            }
            setItems(localItems)
        }
    }

    useEffect(() => {
        getItems()
    }, [props.items, props.account])

    return (
        <Section items={items} buy={props.buy} title="Background" />
    )
}
