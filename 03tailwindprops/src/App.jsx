import Card from './component/card';
import './App.css';
import React from 'react';

function App() {
  let myobj = {
    title: "Beautiful Nature",
    description: "A stunning view of the natural world.",
    imageUrl: "https://source.unsplash.com/300x300/?nature"
  };

  return (
    <>
      {/* Example 1: Using the myobj data */}
      <Card
        title={myobj.title}
        description={myobj.description}
        imageUrl={myobj.imageUrl}
      />

      {/* Example 2: Passing custom props directly */}
      <Card
        title="Rana's Card"
        description="This is a custom message from Rana."
        imageUrl="https://source.unsplash.com/300x300/?abstract" // Added an image for this card
      />

      {/* Example 3: A card with default values (if not provided by App.js) */}
      <Card />
    </>
  );
}

export default App;