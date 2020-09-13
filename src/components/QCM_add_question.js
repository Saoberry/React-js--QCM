import React, { useContext } from 'react';
import { QcmContext } from '../reducers/qcm';
import { Redirect } from "react-router-dom";

const AddQuestion = (props) => {
    const [state, dispatch] = useContext(QcmContext);
    const { newQcmQuestion, newQcmAnswer, redirect, newQcmResult } = state;

    const handleChange = e => {
        const { value, name } = e.target;
        
        if(name === 'newQcmQuestion'){
            dispatch({ type : "NEW_QCM_QUESTION", newQcmQuestion : value });
        }
        else{
            dispatch({ type : "NEW_QCM_RESULT", newQcmResult : value });
        }

    }

    const handleAnswer = (e) => {
        const { value, name } = e.target;
        dispatch({ type : "NEW_QCM_ANSWER", newQcmAnswer : value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type : "SUBMIT_QUESTION" });
    }
    if(redirect === false){
        return( 
            <Redirect to={{ pathname: "/" }}/>
        )
    }
    return(
        <form className="Add_Question_Form" onSubmit={handleSubmit}>
            <p>Ajouter une nouvelle question</p>
            <div className="form-group">
                <label>La question à ajouter (seules réponses possibles oui ou non) :</label>
                <textarea name="newQcmQuestion" value={newQcmQuestion} onChange={handleChange} />
                <label>La réponse :</label>
                <div className="form-check">
                    <input type="radio" name="newQcmAnswer" value="1" onClick={handleAnswer} className="form-check-input" />
                    <label className="form-check-label">Oui</label>
                </div>
                <div className="form-check">
                    <input type="radio" name="newQcmAnswer" value="2" onChange={handleAnswer} className="form-check-input" />
                    <label className="form-check-label">Non</label>
                </div>
                <div className="form-group">
                <label>Réponse de la page résultat : </label>
                <input type="text" name="newQcmResult" value={newQcmResult} onChange={handleChange} />
            </div>
            </div>
            <button className="btn btn-primary">Valider</button>
        </form>
    )
}

export default AddQuestion;