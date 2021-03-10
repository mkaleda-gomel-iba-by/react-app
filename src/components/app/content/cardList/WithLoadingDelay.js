import React, {useEffect, useState} from 'react';
import "./index.css"
import ClipLoader from "react-spinners/ClipLoader"

export default function WithLoadingDelay(Component) {
    function HOC(props) {
        const [isLoading, setIsLoading] = useState(true)

        useEffect(() => {
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        }, [])

        return isLoading ?
            (<div className="card card-layout lds-container" key={props.key}>
                <ClipLoader color={"#96d3ef"} loading={isLoading} size={150}/>
            </div>) :
            <Component {...props}/>
    }
    return HOC;
}
