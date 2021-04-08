import {
  ADD_NEW_TASK,
  APPLY_FILTER,
  EDIT_TASK,
  SET_ALL_TASKS,
} from '../action-types';

/** Returns the action data for the event of a created task.
 * @param {string} title
 * @param {string} startDate
 * @param {string} endDate
 * @param {string} description
 * @param {string} taskType
 * @return {Object}
 */
export function addNewTask(title, startDate, endDate, description, taskType) {
  return {
    type: ADD_NEW_TASK,
    payload: {
      title,
      startDate,
      endDate,
      description,
      taskType,
      isDone: false,
    },
  };
}

/** Returns the action data for the event of an applied filter.
 * @param {string} filter
 * @return {Object}
 */
export function applyFilter(filter) {
  return {
    type: APPLY_FILTER,
    payload: filter,
  };
}

/** Returns the action data for the event of an applied filter.
 * @param {Object} task
 * @return {Object}
 */
export function editExistingTask(task) {
  return {
    type: EDIT_TASK,
    payload: task,
  };
}

/** Returns the action data for the event of all tasks set.
 * @param {Array} tasks
 * @return {Object}
 */
export function setAllTasks(tasks) {
  return {
    type: SET_ALL_TASKS,
    payload: tasks,
  };
}
