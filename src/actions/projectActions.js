import types from './types';

export const createProject = project => {
  return {
    type: types.CREATE_PROJECT,
    payload: project
  };
};
