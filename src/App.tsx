import React, { useState, useEffect } from 'react';
import ArrayCreate from './modules/Array';

import type { Node } from './modules/BSTCreation';
import BSTCreation, { buildBST } from './modules/BSTCreation';

const removeDuplicates = (arr: string[]): string[] => [...new Set(arr)];

const App: React.FC = () => {
  const [inputs, setInputs] = useState<string[]>([]);
  const [table, setTable] = useState<Node[]>([]);

  useEffect(() => {
    const newTable = buildBSTFromInputs(inputs);
    setTable(newTable);
  }, [inputs]);

  const buildBSTFromInputs = (arr: string[]): Node[] => {
    return buildBST(
      removeDuplicates(
        arr
          .map((val, _) => val.trim())
          .filter(val => val !== '')
      )
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
        <p className='sub'>
          (Empty items and duplicates get removed)
        </p>
        <BSTCreation table={table} setTable={setTable}></BSTCreation>
      </div>
    </>
  );
}

export default App;
