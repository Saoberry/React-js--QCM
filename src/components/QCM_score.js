import React, { useContext } from 'react';
import { QcmContext } from '../reducers/qcm';

export const Score = (props) => {
    const [state] = useContext(QcmContext);
    const { results, score } = state;

    return(
        <>
        <p><strong>Votre score est de {score} sur {results.length}</strong></p>
        {results.map((res, i) => <p key={i}>{res}</p>)}
        </>
    )

}