import React from 'react';
import "./index.css"
import ClipLoader from "react-spinners/ClipLoader"

export default function WithLoadingDelay(Component) {
    return ({isLoading, ...props}) => {
        return isLoading ?
            (<div className="card card-layout lds-container" key={props.key}>
                <ClipLoader color={"#96d3ef"} loading={isLoading} size={150}/>
            </div>) :
            <Component {...props}/>
    }
}
