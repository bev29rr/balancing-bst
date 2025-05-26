import React, { useState, useEffect } from 'react';
import ArrayCreate from './modules/Array';

import type { Node } from './modules/BSTCreation';
import BSTCreation, { buildBST } from './modules/BSTCreation';
import { BSTVisual } from './modules/BSTVisual';
import SortedArray from './modules/SortedArray';

const removeDuplicates = (arr: string[]): string[] => [...new Set(arr)];

export function cleanupInput(arr: string[]): string[] {
  return removeDuplicates(
    arr
    .map((val, _) => val.trim())
    .filter(val => val !== '')
  )
} 

const App: React.FC = () => {
  const [inputs, setInputs] = useState<string[]>([]);
  const [table, setTable] = useState<Node[]>([]);

  useEffect(() => {
    const newTable = buildBSTFromInputs(inputs);
    setTable(newTable);
  }, [inputs]);

  const buildBSTFromInputs = (arr: string[]): Node[] => {
    return buildBST(
      cleanupInput(arr)
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
        <p>
          To see the visualised tree:
        </p>
        <BSTVisual nodes={table}></BSTVisual>
        <p>
          <span style={{ color: 'var(--main)' }}>3.</span> The next step is to prepare for the balancing.
        </p>
        <p>
          We need to a sorted array, so an <span style={{ color: 'var(--main)' }}>inorder</span> traversal is necessary 
        </p>
        <SortedArray inputs={inputs}></SortedArray>
      </div>
    </>
  );
}

export default App;
