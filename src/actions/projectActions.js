import types from './types';

export const createProject = project => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  try {
    const response = await firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Dan',
      authorLastName: 'Moffat'
    });
    dispatch({
      type: types.CREATE_PROJECT,
      payload: response
    });
  } catch (err) {
    dispatch({
      type: types.CREATE_PROJECT_ERROR,
      payload: err
    });
  }
};
