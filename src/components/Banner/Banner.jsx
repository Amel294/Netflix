import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="content">
                <h1 className="title">Movie Name</h1>
                <div className="banner-button">
                    <button className="button">Play</button>
                    <button className="button">My List`</button>
                </div>
                <h1 className="description">This is just a dummy paragraph This is just a dummy paragraph This is just a dummy paragraph</h1>
            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner;