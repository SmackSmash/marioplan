import types from './types';

export const createProject = project => dispatch => {
  dispatch({
    type: types.CREATE_PROJECT,
    payload: project
  });
};
