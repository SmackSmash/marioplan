import React, { useState } from 'react';

const CreateProject = props => {
  const [state, setState] = useState({
    title: '',
    content: ''
  });

  const handleChange = e => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create New Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={state.title} onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={state.content}
            onChange={handleChange}
            className="materialize-textarea"
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
