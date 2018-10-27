import * as actionTypes from "../../../constants/actionTypes";
import * as endpoints from "../../../constants/apiEndpoints";
import { callAction } from "../../../api/api";

export const getTask = ({ token, id }) => {
  return callAction(
    { type: actionTypes.TASKS_GET, apiEndpoint: endpoints.TASKS_GET },
    { token, id }
  );
};

export const listTasks = token => {
  return callAction(
    { type: actionTypes.TASKS_LIST, apiEndpoint: endpoints.TASKS_LIST },
    { token }
  );
};

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
