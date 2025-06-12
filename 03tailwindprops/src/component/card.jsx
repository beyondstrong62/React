import React from "react";

// Destructure the props directly
function Card({ title, description, imageUrl }) {
  // Set default values if props are not provided
  const defaultTitle = "Default Card Title";
  const defaultDescription = "This is a default description for the card. No specific content was provided.";
  const defaultImageUrl = "https://source.unsplash.com/300x300/?landscape"; // A generic default image

  return (
    <div className="p-4"> {/* Added some padding around the card */}
      <h1 className="text-3xl font-bold underline text-white">Tailwind Test</h1>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black text-white">
        <img
          src={imageUrl || defaultImageUrl} // Use prop or default
          alt={title || defaultTitle} // Use title as alt text
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Card Details
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            {title || defaultTitle} {/* Use prop or default */}
          </h2>
        </div>
        <p className="text-gray-300">
          {description || defaultDescription} {/* Use prop or default */}
        </p>
      </div>
    </div>
  );
}

export default Card;