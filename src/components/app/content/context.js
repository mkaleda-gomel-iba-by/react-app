import React from "react";

const CardTempStateContext = React.createContext()

function useCardTempState() {
    const context = React.useContext(CardTempStateContext)
    if (!context) {
        throw new Error(`useCardTempState must be used within a useCardTempStateProvider`)
    }

    const [cardTempState, setCardTempState] = context

    const fillHeader = (event) => setCardTempState({...cardTempState, header: event.target.value});
    const fillBody = (event) => setCardTempState({...cardTempState, body: event.target.value});
    const restoreCardTempState = (state) => setCardTempState(state)

    return {
        cardTempState,
        fillHeader,
        fillBody,
        restoreCardTempState
    }
}

function CardTempStateProvider(props) {
    const [cardTempState, setCardTempState] = React.useState(props.initialState)
    const value = React.useMemo(() => [cardTempState, setCardTempState], [cardTempState])
    return <CardTempStateContext.Provider value={value} {...props} />
}

export {CardTempStateProvider, useCardTempState}