import React from 'react';
import { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Post Title');
  const [subtitle, setSubtitle] = useState('subtitle');
  const [font, setFont] = useState('architect');
  const [alignment, setAlignment] = useState('center');
  const [text, setText] = useState('Your post text goes here');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} />
      <Editor setTitle={setTitle} setSubtitle={setSubtitle} />
    </main>
  );
}
