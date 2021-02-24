import React from 'react';
import "./index.css"

export default function WithLoadingDelay(Card) {
    return ({isLoading, ...props}) => {
        if (isLoading) {
            return (<div className="card card-layout lds-container" key={props.key}>
                <div className="lds-default">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>)
        }
        return (<Card cardData={props.cardData}
                      saveCardData={props.saveCardData}
                      readOnly={props.readOnly}
                      checkedControl={props.checkedControl}
                      checked={props.checkedCardIds.includes(props.cardData.id)}
                      key={props.key}/>);
    }
}
