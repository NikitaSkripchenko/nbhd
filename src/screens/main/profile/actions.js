import * as actionTypes from "../../../constants/actionTypes";
import * as endpoints from "../../../constants/apiEndpoints";
import { callAction } from "../../../api/api";

export const getHistory = ({ token, id }) => {
  return callAction(
    { type: actionTypes.TASKS_GET, apiEndpoint: endpoints.TASKS_GET },
    { token, id }
  );
};