import React, { useContext } from 'react';
import { QcmContext } from '../reducers/qcm';
import { Redirect } from "react-router-dom";
import { BtnSubmit } from '../styled/styled';

const AddQuestion = (props) => {
    const [state, dispatch] = useContext(QcmContext);
    const { newQcmQuestion, newQcmAnswer, redirect_add, newQcmResult } = state;

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

    if(redirect_add === false){
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
                <BtnSubmit>Valider</BtnSubmit>
            </form>
        )
    } 
    else {
        return (
            <Redirect
            to={{ pathname: "/"}}
            />
        )
    }
}

export default AddQuestion;