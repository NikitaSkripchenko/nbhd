import * as actionTypes from "../../../constants/actionTypes";
import * as endpoints from "../../../constants/apiEndpoints";
import { callAction, getJSON } from "../../../api/api";

export const getUser = ({token, id}) => {
  return async(dispatch) => {
    const json = getJSON(endpoints.USERS_GET, { token, id });

    const data = json.result || null;

    return dispatch({
      type: actionTypes.USRERS_GET,
      data
    })
  }
}