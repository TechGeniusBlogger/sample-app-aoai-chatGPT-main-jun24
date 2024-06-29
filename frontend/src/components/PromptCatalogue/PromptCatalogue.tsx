import React from 'react';

function PromptCatalogue() {
  // Example prompts, this could be fetched from an API or defined elsewhere
  const prompts = [
    "Create a React component",
    "Build a todo list application",
    "Design a prompt catalogue"
  ];

  return (
    <div>
      <h2>Prompt Catalogue</h2>
      <ul>
        {prompts.map((prompt, index) => (
          <li key={index}>{prompt}</li>
        ))}
      </ul>
    </div>
  );
}

export default PromptCatalogue;