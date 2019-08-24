import types from '../actions/types';

const INITIAL_STATE = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
    { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_PROJECT:
      console.log('created project', action.payload);
      return state;
    case types.CREATE_PROJECT_ERROR:
      console.log('create project error', action.payload);
      return state;
    default:
      return state;
  }
};
