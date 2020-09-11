import React, { useReducer } from 'react';
import { initialState, reducer, QcmContext } from './reducers/qcm';


const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <QcmContext.Provider value={[state, dispatch]}>
            {children}
        </QcmContext.Provider>
    );
}

export default Provider;