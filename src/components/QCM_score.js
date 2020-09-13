import React, { useContext, useEffect } from 'react';
import { QcmContext } from '../reducers/qcm';

const Score = (props) => {
    const [state, dispatch] = useContext(QcmContext);
    const { results, score } = state;

    useEffect(() => {
        dispatch({ type : "INIT_REDIRECT"});
    }, [dispatch])

    return(
        <div className="score_content">
            <p><strong>Votre score est de {score} sur {results.length}</strong></p>
            {results.map((res, i) => <p key={i}>{res}</p>)}
        </div>
    )

}

export default Score;