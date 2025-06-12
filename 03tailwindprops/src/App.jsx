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
<<<<<<< HEAD
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
=======
    <h1  class="bg-green-400">Tailwind Test</h1>
    <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="/img/cover.png" />
  </div>
  <div class="flex items-center md:items-start">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
>>>>>>> d4524040b4ef662b6d3e97c3029a96ecba195667
    </>
  );
}

export default App;