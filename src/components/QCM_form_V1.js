import React, { useContext } from 'react';
import { QcmContext } from '../reducers/qcm';
import {
    Redirect
  } from "react-router-dom";
  

export const QcmForm = (props) => {
    const [state, dispatch] = useContext(QcmContext);
    const { email, redirect, message } = state;

    const handleChange = e => {
        const { value, name } = e.target;
        dispatch({ type : "EMAIL", email : value });
    }

    const handleAnswer = e => {
        const { value, name } = e.target;

        if(name === 'reponse1'){
            dispatch({ type : "ANSWER_1", reponse1 : value });
        }
        else if(name === 'reponse2') {
            dispatch({ type : "ANSWER_2", reponse2 : value });
            
        } else if(name === 'reponse3') {
            dispatch({ type : "ANSWER_3", reponse3 : value });
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type : "SUBMIT" });
    }

    if(redirect === false){

        return (
            <>
                <form className="QCM_Form" onSubmit={handleSubmit}>
                    <h1>QCM React</h1>

                    <p>Voici un QCM sur React répondez aux questions ci-dessous, pensez à laisser votre email, champ obligatoire (*) :</p>

                    <div className="form-group">
                        <label>Email* : </label>
                        <input type="email" size="1" name="email" value={email} onChange={handleChange} className="form-control" required />
                    </div>

                    {message ? <p className="alert alert-danger">{message}</p> : null}
                    <div className="form-group">
                        <h2>Question 1 : React est-il un framework ?</h2>
                        <p>Répondez en choisissant une seule et bonne réponse ci-dessous :</p>
                        <div className="form-check">
                            <input type="radio" name="reponse1" value="1" onClick={handleAnswer} className="form-check-input" />
                            <label className="form-check-label">Oui</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="reponse1" value="2" onChange={handleAnswer} className="form-check-input" />
                            <label className="form-check-label">Non</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <h2>Question 2 : JSX c'est quoi ?</h2>
                        <div className="form-check">
                            <input type="radio" name="reponse2" value="1" onClick={handleAnswer} className="form-check-input" />
                            <label className="form-check-label">JSX est un langage compilé </label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="reponse2" value="2" onClick={handleAnswer} className="form-check-input" />
                            <label className="form-check-label">JSX est un sur-ensemble développé par Facebook</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <h2>Question 3 : React est-il un framework ?</h2>
                        <div className="form-check">
                            <input type="radio" name="reponse3" value="1" onClick={handleAnswer} className="form-check-input" />
                            <label className="form-check-label">MMV</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="reponse3" value="2" onClick={handleAnswer} className="form-check-input" />
                            <label className="form-check-label">MVC</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="reponse3" value="3" onClick={handleAnswer} className="form-check-input" />
                            <label className="form-check-label">MMVV</label>
                        </div>
                    </div>
    
                    <button className="btn btn-primary">Valider</button>
                </form>
            </>
        )

    } else {
        return (
            <Redirect
              to={{
                pathname: "/score"
              }}
            />
          )
    }


}