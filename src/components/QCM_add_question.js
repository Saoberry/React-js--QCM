import React, { useContext } from 'react';
import { QcmContext } from '../reducers/qcm';

export const AddQuestion = (props) => {
    const [state, dispatch] = useContext(QcmContext);
    const { newQuestion, newAnswer } = state;

    React.useEffect(() => {
        dispatch({ type : "SCORE"});
    }, []);

    const handleChange = e => {
        const { value, name } = e.target;
        dispatch({ type : "NEW_QUESTION", newQuestion : value });

    }

    const handleAnswer = (e) => {
        const { value, name } = e.target;
        dispatch({ type : "NEW_ANSWER", newAnswer : value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Question :', newQuestion, 'REPONSE :', newAnswer);

        dispatch({ type : "SUBMIT_QUESTION" });
    }

    console.log(state);

    return(
        <>
            <p>Ajouter une nouvelle question</p>
            <form className="new-question" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>La question à ajouter (seules réponses possibles oui ou non) :</label>
                    <input type="text" name="newQuestion" value={newQuestion} onChange={handleChange} />
                    <label>La réponse :</label>
                    <div className="form-check">
                        <input type="radio" name="newAnswer" value="1" onClick={handleAnswer} className="form-check-input" />
                        <label className="form-check-label">Oui</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="newAnswer" value="2" onChange={handleAnswer} className="form-check-input" />
                        <label className="form-check-label">Non</label>
                    </div>
                </div>
                <button className="btn btn-primary">Valider</button>
            </form>
        </>
    )
}