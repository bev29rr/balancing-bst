import React, { useState } from 'react';
import ArrayCreate from './modules/Array';

const App: React.FC = () => {
  const [inputs, setInputs] = useState<string[]>([]);

  return (
    <>
      <h1>Balancing BSTs</h1>
      <div className="centered">
        <p>
          <span style={{ color: 'var(--main)' }}>1.</span> To create a Balanced BST, we need to start with a list/array first
        </p>
        <ArrayCreate inputs={inputs} setInputs={setInputs}></ArrayCreate>
      </div>
    </>
  );
}

export default App;
