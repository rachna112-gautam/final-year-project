import React from 'react';
import { useHistory } from "react-router-dom";
export default function main() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();

    const browseHandle = () => {
        history.push('/browse');
    }
    return (
        <div className="">
            <div className="container main">
                <h2>Decentralised Marketplace</h2>
                <p className="tag-line">
                    Welcome to the virtual world’s one-stop-shop for the very best digital assets.
            </p>
                <button type="button" className="btn browsing" onClick={browseHandle}>Start Browsing</button>

            </div>
        </div>
    )
}
