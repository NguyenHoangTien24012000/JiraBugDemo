import React, { Fragment } from 'react'
import {useSelector} from "react-redux"
export default function Loading() {
 
    const {loading} = useSelector(state => state.LoadingReducer)

    return (
        <Fragment>
            {loading ? <div style={{position:'fixed', top:"0", left: "0", width : "100%", height : "100vh" ,backgroundColor: "rgba(0,0,0,0.5)", display: 'flex', justifyContent: 'center',
                alignItems: 'center', zIndex : 10}}>
                    <img src={require('../../assets/imgLoading/LoadingImg.gif').default} />

            </div> : '' }

        </Fragment>
    )
}
