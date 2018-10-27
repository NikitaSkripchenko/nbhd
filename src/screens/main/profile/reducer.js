import * as actionTypes from "../../../constants/actionTypes";

const initialState = {
  user: null,
  userLoaded: false
}

export default (state = initialState, action) => {
  const { data, type } = action;

  switch(type){
    case actionTypes.USRERS_GET:
      return {
        ...state,
        user: data,
        userLoaded: true
      }
    default:
      return state;
  }
}