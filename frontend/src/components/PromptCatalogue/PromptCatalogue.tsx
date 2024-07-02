import React from 'react';

interface PromptCatalogueProps {
  onPromptSelected: (prompt: string) => void;
}

const PromptCatalogue: React.FC<PromptCatalogueProps> = ({ onPromptSelected }) => {
  // Example prompts, this could be fetched from an API or defined elsewhere
  const prompts = [
    "How to apply for car parking",
    "explain about whistleblower",
    "Conflicts of Interest Policy"
  ];

  const handlePromptClick = (prompt: string) => {
    // Call the onPromptSelected callback with the selected prompt
    onPromptSelected(prompt);
  };

  return (
    <div>
      <h2>Prompt Examples</h2>
      {prompts.map((prompt, index) => (
        <div 
          key={index} 
          onClick={() => handlePromptClick(prompt)}
          style={{ border: '1px solid black', margin: '10px', padding: '10px', cursor: 'pointer' }}
        >
          {prompt}
        </div>
      ))}
    </div>
  );
}

export default PromptCatalogue;
