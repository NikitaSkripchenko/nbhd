import * as actionTypes from "../../../constants/actionTypes";
import * as endpoints from "../../../constants/apiEndpoints";
import { getJSON } from "../../../api/api";

export const getTask = ({ token, id }) => {
  return async(dispatch) => {
    const json = await getJSON(endpoints.TASKS_GET, { token, id })

    return dispatch({
      type: actionTypes.TASKS_GET,
      data: json
    })
  }
};

export const listTasks = token => {
  return async(dispatch) => {
    const json = await getJSON(endpoints.TASKS_LIST, {token})
    
    return dispatch({
      type: actionTypes.TASKS_LIST,
      data: json
    })
  } 
};

export const resetTasks = () => ({
  type: actionTypes.TASKS_RESET,
  data: null
})

export const resetTask = () => ({
  type: actionTypes.TASK_RESET,
  data: null
})

export const createTask = ({
  token,
  title,
  category,
  location,
  description,
  time,
  encouragement,
  pay
}) => {
  return callAction(
    { type: actionTypes.TASKS_CREATE, apiEndpoint: endpoints.TASKS_CREATE },
    {
      token,
      title,
      category: parseInt(category, 10),
      location: location.map(val => parseFloat(val)),
      description,
      time: parseInt(time, 10),
      encouragement: parseInt(encouragement, 10),
      pay: parseInt(pay, 10)
    }
  )
};
