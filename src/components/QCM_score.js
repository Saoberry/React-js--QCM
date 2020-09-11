import React, { useContext } from 'react';
import { QcmContext } from '../reducers/qcm';

export const Score = (props) => {
    const [state] = useContext(QcmContext);
    const { answers_user, results } = state;

    return(
        <>
        <p><strong>Votre score est de {answers_user.length} sur 3</strong></p>
        {results.map((res, i) => <p key={i}>{res}</p>)}
        </>
    )
}