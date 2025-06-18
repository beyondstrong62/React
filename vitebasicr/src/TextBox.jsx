import React, { useState } from 'react';

function TextBox() {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea onChange={(e) => setText(e.target.value)}></textarea>
      <p>Characters: {text.length}</p>
    </div>
  );
}

export default TextBox;