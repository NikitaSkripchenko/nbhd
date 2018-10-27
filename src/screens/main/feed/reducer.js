import * as actionTypes from "../../../constants/actionTypes";

const initialState = {
  tasks: [],
  tasksLoaded: false,
  task: null,
  taskLoaded: false,
  flag: false
}

export default (state = initialState, action) => {
  const { type, data } = action;

  switch(type){
    case actionTypes.TASK_GET:
      return {
        ...state,
        task: data,
        taskLoaded: true,
      }
    case actionTypes.TASKS_LIST:
      return {
        ...state,
        tasks: data,
        tasksLoaded: true
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
      return {
        ...state,
        tasks: !!data ? state.tasks.push(data) : state.tasks;
      }
    default: 
      return state;
  }
}