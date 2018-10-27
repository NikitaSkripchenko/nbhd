import * as actionTypes from "../../../constants/actionTypes";

const initialState = {
  tasks: [],
  tasksLoaded: false,
  task: null,
  taskLoaded: false
}

export default (state = initialState, action) => {
  const { type, data } = action;
  if(!data) return state;
  
  switch(type){
    case actionTypes.TASKS_GET:
      return {
        ...state,
        task: data,
        taskLoaded: true,
      }
    case actionTypes.TASKS_LIST:
      return {
        ...state,
        tasks: data,
        taskLoaded: true
      }
    case actionTypes.TASK_RESET: 
      return {
        ...state,
        task: null,
        taskLoaded: false
      }
    case actionTypes.TASKS_RESET: 
      return {
        ...state,
        tasks: [],
        tasksLoaded: false
      }
    case actionTypes.TASKS_CREATE:
      const { status, ...newTask } = data;
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        /* something else */
      }
    default: 
      break;
  }
}