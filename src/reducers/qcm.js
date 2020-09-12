import { createContext } from 'react';
import POSTS from '../data_qcm';

//  PAS TOUCHE !!!!!!! (debut)
export const initialState = {
    qcm_list : POSTS,
    email: '',
    answers_user : [],
    results: [],
    newQuestion: '',
    newAnswer: '',
    sao: '',
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
        case 'ANSWER_BONUS':
            const answers_user = [...state.answers_user];
            return {
                ...state,
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
        case 'NEW_QUESTION':

            return {
                ...state,
                newQuestion: action.newQuestion
            }
        case 'NEW_ANSWER':

            return {
                ...state,
                newAnswer: action.newAnswer
            }
        case 'SUBMIT_QUESTION':
            const new_answers = [...state.answers];
            const new_qcm_list = [...state.qcm_list];
            const new_qcm_list_lgt = (new_answers.length + 1);
            new_answers.push(Number(state.newAnswer));
            new_qcm_list.push({id: 'id' + new_qcm_list_lgt, question: state.newQuestion, reponse1: 'Oui', reponse2: 'Non', reponse3: ''})
            console.log(new_answers, state.qcm_list);

            return {
                ...state,
                answers: new_answers,
                qcm_list: new_qcm_list
            }
        default:
            return state;
    }
}
