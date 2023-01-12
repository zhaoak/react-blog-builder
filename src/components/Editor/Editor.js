import React from 'react';

import './Editor.css';

export default function Editor({ setTitle, setSubtitle, setFont, setAlignment, setText }) {
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  // setSubtitle is called inline in the subtitle input box

  // setFont is called inline in font radio select element

  const handleChangeAlignment = (event) => {
    setAlignment(event.target.value);
  };

  // setText handled as an inline function below

  return (
    <div className="editor">
      <div className="form-control">
        <input name="title" type="text" onChange={handleChangeTitle} />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-control">
        <input type="text" onChange={(event) => setSubtitle(event.target.value)} />
        <label>Subtitle</label>
      </div>
      <div className="form-control">
        <select onChange={(event) => setFont(event.target.value)}>
          <option value="architect">{"Architect's Daughter"}</option>
          <option value="comforter">Comforter</option>
          <option value="fredoka">Fredoka</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="monteserrat">Monteserrat</option>
          <option value="roboto">Roboto</option>
          <option value="roboto-mono">Roboto Mono</option>
          <option value="titillium">Titillium</option>
        </select>
        <label>Font</label>
      </div>
      <div className="form-control">
        <label>Alignment</label>
        <div className="radio-group" onChange={handleChangeAlignment}>
          <label>
            <input name="align" type="radio" value="left" />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input name="align" type="radio" value="center" />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input name="align" type="radio" value="right" />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control">
        <textarea style={{ height: '250px' }} onChange={(e) => setText(e.target.value)} />
        <label>Text</label>
      </div>
    </div>
  );
}
