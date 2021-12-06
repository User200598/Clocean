import * as actionTypes from '../action/actionTypes';

const intialState={
    loginDetails:null,
    error:null,
};

export const register=(state=intialState, action)=>{
    switch(action.type){
        case actionTypes.LOGIN:
            return {
                ...state,
                loginDetails: action.val,
            }
        case actionTypes.FETCH_LOGIN_FAILED:
            return {
                ...state,
                error: action.val
            }
        default:
            return state;
    }

}

export default register;