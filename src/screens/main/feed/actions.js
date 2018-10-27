import * as actionTypes from "../../../constants/actionTypes";
import * as endpoints from "../../../constants/apiEndpoints";
import { getJSON, callAction } from "../../../api/api";

export const getTask = ({ token, id }) => {
  return async dispatch => {
    const json = await getJSON(endpoints.TASKS_GET, { token, id });

    return dispatch({
      type: actionTypes.TASK_GET,
      data: json
    });
  };
};

export const listTasks = token => {
  return async dispatch => {
    const json = await getJSON(endpoints.TASKS_LIST, { token });

    return dispatch({
      type: actionTypes.TASKS_LIST,
      data: json
    });
  };
};

export const resetTasks = () => ({
  type: actionTypes.TASKS_RESET,
  data: null
});

export const resetTask = () => ({
  type: actionTypes.TASK_RESET,
  data: null
});

export const createTask = params => {
  return async (dispatch) => {
    const json = getJSON(endpoints.TASKS_CREATE, params);
    console.log(json);
    return dispatch({
      type: actionTypes.TASKS_CREATE,
      data: json
    })
  }
}