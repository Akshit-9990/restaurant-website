import React from 'react'
import "./style.css";
import Menu from './menuApi';
const Restaurant = () => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className='card-body'>
                        <span className="card-number card-circle subtle ">1</span>
                        <span className="card-author subtle"> Breakfast</span>
                        <h2 className="card-title"> Maggie</h2>
                        <span className="card-description subtle">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Vel libero id porro magni error consequatur iste est
                            reprehenderit odit dignissimos voluptatum nesciunt,
                            quae vero praesentium nulla, earum, nobis eveniet laboriosam.
                        </span>
                        <div className="card-read">Read</div>
                    </div>
                    <img src={image} alt="image" className="card-media"/>
                    <span className="card-tag subtle">Order Now</span>
                </div>
            </div>
        </>
    )
}

export default Restaurant