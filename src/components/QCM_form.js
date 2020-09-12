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
        const { answers_user } = state;

        if(value === "1"){
            answers_user.push(name);
            dispatch({ type : "ANSWERS_USER", answers_user : answers_user });
        }else{
            answers_user.push(0);
            dispatch({ type : "ANSWERS_USER", answers_user : answers_user });
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type : "SUBMIT" });
    }
    if(redirect === false){
        const { qcm_list } = state;
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

                    {qcm_list.map((qcm, i) => 

                        (<div className="form-group" key={i}>
                            <h2>{qcm.question}</h2>
                            <p>Répondez en choisissant une seule et bonne réponse ci-dessous :</p>
                            <div className="form-check">
                                <input type="radio" name={qcm.id} value={qcm.choice1.value} onClick={handleAnswer} className="form-check-input" />
                                <label className="form-check-label">{qcm.choice1.answer}</label>
                            </div>
                            <div className="form-check">
                                <input type="radio" name={qcm.id} value={qcm.choice2.value} onClick={handleAnswer} className="form-check-input" />
                                <label className="form-check-label">{qcm.choice2.answer}</label>
                            </div>
                            {qcm.choice3.answer !== "" ? 
                                <div className="form-check">
                                <input type="radio" name={qcm.id} value={qcm.choice3.value} onClick={handleAnswer} className="form-check-input" />
                                <label className="form-check-label">{qcm.choice3.answer}</label>
                                </div> : null
                            }
                        </div>)
                    )}
    
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