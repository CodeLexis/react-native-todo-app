import {
  ADD_NEW_TASK,
  APPLY_FILTER,
  EDIT_TASK,
  SET_ALL_TASKS,
} from '../action-types';

const initialState = {
  allTasks: [],
  currentTasks: [],
  currentFilter: null,
};

/** Default reducer
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        allTasks: [...state.allTasks, action.payload],
      };
    case EDIT_TASK:
      console.log(
        'EDIT!!!',
        state.allTasks.filter(value => value.uid !== action.payload.uid),
        '\n\n',
        action.payload,
      );
      return {
        ...state,
        allTasks: [
          ...state.allTasks.filter(value => value.uid !== action.payload.uid),
          action.payload,
        ],
      };
    case APPLY_FILTER:
      return {
        ...state,
        currentTasks: action.payload
          ? state.allTasks.filter(action.payload)
          : state.allTasks,
        currentFilter: action.payload,
      };
    case SET_ALL_TASKS:
      return {
        ...state,
        allTasks: action.payload,
      };
    default:
      return state;
  }
}
