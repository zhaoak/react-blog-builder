import React from 'react';
import { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Title');
  const [subtitle, setSubtitle] = useState('subtitle');
  const [font, setFont] = useState('Comforter');
  const [alignment, setAlignment] = useState('center');
  const [text, setText] = useState('Your post text goes here');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview />
      <Editor />
    </main>
  );
}
