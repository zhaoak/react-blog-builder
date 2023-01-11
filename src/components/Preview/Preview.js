import React from 'react';

import './Preview.css';

export default function Preview({ title, subtitle, font }) {
  // implement a Preview screen here
  //  Note - the HTML should have the following structure
  //  the main div should have a class of preview and the font-name prop
  //  and should have style interpolated using the alignment prop

  // <div class="preview indie-flower" style="text-align: center;">
  //   <h1> Blog Title</h1>
  //   <h3> Blog Subtitle</h3>
  //   <p>This is some blog text. </p>
  // </div>

  return (
    <div className={`preview ${font}`} style={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>Post Text</p>
    </div>
  );
}
