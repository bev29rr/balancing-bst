import React, { useState, useEffect } from 'react';
import ArrayCreate from './modules/Array';

import type { Node } from './modules/BSTCreation';
import BSTCreation, { buildBST } from './modules/BSTCreation';
import { BSTVisual } from './modules/BSTVisual';
import SortedArray from './modules/SortedArray';
import ArraySplit from './modules/ArraySplit';

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
        <p className='sub warn'>
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
        <p>
          <span style={{ color: 'var(--main)' }}>4.</span> Next, we must perform Recursive Median Insertion
        </p>
        <p className='sub ok'>
          This is basically where we choose the midpoint of the array, and divide into two equally sized arrays, and repeat until there are arrays of size 1
        </p>
        <p>
          For this demonstration, only the first iteration will be run
        </p>
        <ArraySplit inputs={inputs}></ArraySplit>
        <p>
          <span style={{ color: 'var(--main)' }}>5.</span> The algorithm then repeats for all items, splitting the tree equally
        </p>
        <BSTCreation table={table} setTable={setTable} /* TODO: balance the BST and show result*/></BSTCreation>
        <p>
          For the visual tree:
        </p>
        <BSTVisual nodes={table}></BSTVisual>
      </div>
    </>
  );
}

export default App;
