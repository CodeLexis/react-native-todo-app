import {addNewTask, applyFilter, editExistingTask} from './actions';

/** Creates a new task and saves it on the async store before dispatching the apt action
 * @param {string} title
 * @param {string} startDate
 * @param {string} endDate
 * @param {string} description
 * @param {string} taskType
 * @return {function}
 */
export function createNewTask(
  title,
  startDate,
  endDate,
  description,
  taskType,
) {
  return async (dispatch, getState) => {
    dispatch(addNewTask(title, startDate, endDate, description, taskType));
    dispatch(applyFilter(getState().currentFilter));
  };
}

/** Creates a new task and saves it on the async store before dispatching the apt action
 * @param {Object} task
 * @return {function}
 */
export function editTask(task) {
  return async (dispatch, getState) => {
    dispatch(editExistingTask(task));
    dispatch(applyFilter(getState().currentFilter));
  };
}
