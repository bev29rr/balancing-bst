import React, { useState, useEffect } from 'react';
import ArrayCreate from './modules/Array';

import type { Node } from './modules/BST';
import BSTCreation from './modules/BST';

const App: React.FC = () => {
  const [inputs, setInputs] = useState<string[]>([]);
  const [table, setTable] = useState<Node[]>([]);

  useEffect(() => {
    const newTable = buildBSTFromInputs(inputs);
    setTable(newTable);
  }, [inputs]);

  const buildBSTFromInputs = (arr: string[]): Node[] => {
    return arr
      .map((val, _) => val.trim())
      .filter(val => val !== '')
      .map((val, index) => ({
        key: val,
        left: index - 1,
        right: index + 1,
      })
    );
  };

  return (
    <>
      <h1>Balancing BSTs</h1>
      <div className="centered">
        <p>
          <span style={{ color: 'var(--main)' }}>1.</span> To create a Balanced BST, we need to start with a list/array first
        </p>
        <ArrayCreate inputs={inputs} setInputs={setInputs}></ArrayCreate>
        <p>
          <span style={{ color: 'var(--main)' }}>2.</span> Next, we need to convert this into a BST
        </p>
        <BSTCreation table={table} setTable={setTable}></BSTCreation>
      </div>
    </>
  );
}

export default App;
