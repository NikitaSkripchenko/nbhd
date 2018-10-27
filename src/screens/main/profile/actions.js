import * as actionTypes from "../../../constants/actionTypes";
import * as endpoints from "../../../constants/apiEndpoints";
import { callAction, getJSON } from "../../../api/api";

export const getUser = function({token, id}){
  return async function(dispatch){
    const json = await getJSON(endpoints.USERS_GET, { token, id });
    
    const data = json.result || null;

    return dispatch({
      type: actionTypes.USRERS_GET,
      data
    })
  }
}