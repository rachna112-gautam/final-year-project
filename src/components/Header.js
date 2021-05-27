import React from 'react'

export default function Header() {
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
            <div className="signin-btn">

                <a href="/signin">Sign in</a>
                <a className="ml-3 d-block" href="#">Are You a Seller?</a>
            </div>
        </header>
    )
}
