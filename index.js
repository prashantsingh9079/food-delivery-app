import React from "react";
import ReactDOM from 'react-dom/client';

const HeaderComponent = () =>{
    return(
        <div className="header">
            <img className="header-logo" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"/>
            <ul className="header-menu">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

const BodyComponent = () =>{
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" placeholder="Search for Dishes, Restaurent" />
            </div>
            <div className="restaurent-container">
                <div className="restaurent-card">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/d08dc977-5e85-46df-8142-feb32cd9873b_411450.JPG" alt="res-logo" />
                    <h3>KFC</h3>
                    <p>3.8 star 30-35 mins to deliver</p>
                    <p>Burger, Biryani</p>
                </div>
            </div>
        </div>
    )
}


const AppLayout = () =>{
    return(
        <div className="app-layout">
            <HeaderComponent/>
            <BodyComponent/>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)