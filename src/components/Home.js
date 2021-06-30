import React from 'react'
import Header from './../components/Header';
import Main from './../components/Main';
import Background from './../components/Products/Background';
import Templates from './../components/Products/Templates';
import Estates from './../components/Products/Estates';
import Footer from './../components/Footer';
import { useState, useEffect } from 'react'

export default function Home(props) {
    const [buyerInfo, setBuyerInfo] = useState()
    const [items, setItems] = useState()

    useEffect(() => {
        setBuyerInfo(props.buyerInfo)
        setItems(props.items)
    }, [props.buyerInfo, props.items, props.account])

    return (
        <div>
            <Header buyerInfo={buyerInfo} />
            <Main />
            <Background account={props.account} items={items} buy={props.buy} />
            <Templates />
            <Estates />
            <Footer />
        </div>
    )
}
