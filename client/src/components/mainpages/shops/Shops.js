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
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fstreet-shop&psig=AOvVaw3uj_USd6bbxq1_8iFTVKXi&ust=1650874141113000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMiMusefrPcCFQAAAAAdAAAAABAD'
        },

        {
            title: 'ABC SHOP',
            description: 'lorem ipsum',
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fstreet-shop&psig=AOvVaw3uj_USd6bbxq1_8iFTVKXi&ust=1650874141113000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMiMusefrPcCFQAAAAAdAAAAABAD'
        },

        {
            title: 'ABC SHOP',
            description: 'lorem ipsum',
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fstreet-shop&psig=AOvVaw3uj_USd6bbxq1_8iFTVKXi&ust=1650874141113000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMiMusefrPcCFQAAAAAdAAAAABAD'
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
