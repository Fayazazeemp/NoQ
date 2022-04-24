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
            image: 'https://res.cloudinary.com/domnbttis/image/upload/v1644283972/test/zi9lj5beisvfdvox9xal.jpg'
        },

        {
            title: 'ABC SHOP',
            description: 'lorem ipsum',
            image: 'https://res.cloudinary.com/domnbttis/image/upload/v1644283972/test/zi9lj5beisvfdvox9xal.jpg'
        },

        {
            title: 'ABC SHOP',
            description: 'lorem ipsum',
            image: 'https://res.cloudinary.com/domnbttis/image/upload/v1644283972/test/zi9lj5beisvfdvox9xal.jpg'
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
