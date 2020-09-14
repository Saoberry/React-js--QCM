import React, { useContext, useEffect } from 'react';
import { QcmContext } from '../reducers/qcm';
import { ScoreContent } from '../styled/styled';

const Score = (props) => {
    const [state, dispatch] = useContext(QcmContext);
    const { results, score } = state;

    useEffect(() => {
        dispatch({ type : "INIT_REDIRECT"});
    }, [dispatch])

    return(
        <ScoreContent>
            <p><strong>Votre score est de {score} sur {results.length}</strong></p>
            {results.map((res, i) => <p key={i}>{res}</p>)}
        </ScoreContent>
    )

}

export default Score;