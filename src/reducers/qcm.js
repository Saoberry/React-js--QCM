import { createContext } from 'react';
import POSTS from '../data_qcm';

//  PAS TOUCHE !!!!!!! (debut)
export const initialState = {
    qcm_list : POSTS,
    email: '',
    answers_user : [],
    results: [],
    newQcm: {},
    newQcmQuestion: '',
    newQcmAnswer: '',
    newQcmResult: '',
    score: '',
    redirect: false
};
// PAS TOUCHE !!!!!!! (fin)

export const QcmContext = createContext({})

export const reducer = (state, action) => {
    switch (action.type) {
        case 'EMAIL':

            return {
                ...state,
                email: action.email
            }
        case 'ANSWERS_USER':
            const answers_user = [...state.answers_user];
            let score = state.score;
            const goodAnswers = answers_user.filter(answer => answer !== 0);
            score = goodAnswers.length;

            return {
                ...state,
                score: score,
                answers_user: answers_user
            }
        case 'SUBMIT':
            const results = [...state.results];
            let resultsText;

            for(let i = 0; i < state.qcm_list.length; i++){
                if(state.answers_user[i] === state.qcm_list[i].id) {
                    resultsText = "Question " + (i+1) + " : Bravo ! " + state.qcm_list[i].result;
                    results.push(resultsText);
                } else {
                    resultsText =  "Question " + (i+1) + " : Dommage :(  " + state.qcm_list[i].result;
                    results.push(resultsText);
                }
            }
            return {
                ...state,
                redirect: true,
                results : results
            }
        case 'NEW_QCM_QUESTION':

            return {
                ...state,
                newQcmQuestion : action.newQcmQuestion
                
            }
        case 'NEW_QCM_ANSWER':
            return {
                ...state,
                newQcmAnswer: action.newQcmAnswer
            }
        case 'NEW_QCM_RESULT':
            return {
                ...state,
                newQcmResult: action.newQcmResult
            }
        case 'SUBMIT_QUESTION':
            let qcm_list = [...state.qcm_list];
            const identifiant = state.qcm_list.length + 1;

            if(state.newQcmAnswer === '1'){
                qcm_list.push({
                    id : identifiant, 
                    question : state.newQcmQuestion,
                    choice1: {
                        answer : "Oui" ,
                        value : "1"
                    },
                    choice2: {
                        answer : "Non",
                        value : "0"
                    },
                    choice3: {
                        answer : "" ,
                        value : "0"
                    },
                    result: state.newQcmResult
                });
            } else {
                qcm_list.push({
                    id : identifiant, 
                    question : state.newQcmQuestion,
                    choice1: {
                        answer : "Oui" ,
                        value : "0"
                    },
                    choice2: {
                        answer : "Non",
                        value : "1"
                    },
                    choice3: {
                        answer : "" ,
                        value : "0"
                    },
                    result: state.newQcmResult
                });
            }
            
            console.log('qcm list', qcm_list);

            return {
                ...state,
                redirect: false,
                qcm_list : qcm_list
            }
        default:
            return state;
    }
}
