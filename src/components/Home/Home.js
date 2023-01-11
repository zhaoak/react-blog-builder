import React from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview />
      <Editor />
    </main>
  );
}
