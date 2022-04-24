import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'
import QRCode from 'qrcode';

function BtnRender({shop}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    
    return (
        
        <div className="row_btn">
            {
             <>
                    <Link id="btn_view" to={`/`}>
                        Select
                    </Link>
                </>
            }
                
        </div>
    )
}

export default BtnRender
