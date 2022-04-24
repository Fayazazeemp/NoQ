import React from 'react'
import BtnRender from './BtnRender'
import './shopItem.css'

function ShopItem({shop}) {

    return (
        <div className="shop_card">
            <img src={shop.image} alt="" />

            <div className="shop_box">
                <h2 title={shop.title}>{shop.title}</h2>
                <p>{shop.description}</p>
            </div>
            <BtnRender shop={shop} />
        </div>
    )
}

export default ShopItem
