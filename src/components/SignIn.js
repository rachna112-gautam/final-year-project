import React from 'react';
import Footer from './Footer';
import Header from './Header';
export default function SignIn() {
    return (
        <div className="signin">
            <Header />
            <div className="container text-center">
                <h2>Get Started</h2>
                <div className="logo">
                    <i class="fas fa-wallet"></i>
                </div>
                <p>You can use the <a href="https://metamask.io/" className="metamask">MetaMask</a> extension</p>
                <button type="button" className="btn register">Register as Buyer</button>
            </div>
            <Footer />
        </div>
    )
}
