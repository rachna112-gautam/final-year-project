import React from 'react'

export default function Header(props) {
    return (
        <header className="container p-3">
            <div className="site-title">
                <a href="/">  <h1>DecMark</h1></a>


                <ul className="list">
                    <li>
                        <a href="/docs">Docs</a>
                    </li>
                    <li>
                        <a href="/events">Events</a>
                    </li>
                </ul>
            </div>
            <div className="signin-btn d-flex align-items-center">

                {!props.buyerInfo ? <div className="user-avatar">
                    <a href="/profile"><i class="far fa-user"></i></a>
                </div> : <a href="/signin">Sign in</a>}
                <a className="ml-3 d-block" href="#">Seller?</a>
            </div>
        </header>
    )
}
