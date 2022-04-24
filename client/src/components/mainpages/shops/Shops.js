import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import ShopItem from '../utils/shopItem/shopItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import Filters from './Filters'
import LoadMore from './LoadMore'
import './shops.css'


function Shops() {
    const shops = [
        {
            title: 'ABC SHOP',
            description: 'lorem ipsum',
            image: 'https://retailinasia.com/wp-content/uploads/2016/11/FamilyMart-Japan-opening-Thailand-Retail-in-Asia.jpg'
        },

        {
            title: 'ABC SHOP',
            description: 'lorem ipsum',
            image: 'https://retailinasia.com/wp-content/uploads/2016/11/FamilyMart-Japan-opening-Thailand-Retail-in-Asia.jpg'
        },

        {
            title: 'ABC SHOP',
            description: 'lorem ipsum',
            image: 'https://retailinasia.com/wp-content/uploads/2016/11/FamilyMart-Japan-opening-Thailand-Retail-in-Asia.jpg'
        },
    ]
    const [loading, setLoading] = useState(false)


    if(loading) return <div><Loading /></div>
    return (
        <>
        <Filters />

        <div className="shops">
            {
                shops.map(shop => {
                    return <ShopItem shop={shop} />
                })
            } 
        </div>

        <LoadMore />
        {shops.length === 0 && <Loading />}
        </>
    )
}

export default Shops
