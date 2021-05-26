import React from 'react'
import Header from './../components/Header';
import Main from './../components/Main';
import Background from './../components/Products/Background';
import Templates from './../components/Products/Templates';
import Estates from './../components/Products/Estates';
import Footer from './../components/Footer';
export default function Home() {
    return (
        <div>
            <Header />
            <Main />
            <Background />
            <Templates />
            <Estates />
            <Footer />
        </div>
    )
}
