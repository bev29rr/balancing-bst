import React from 'react';
import '../css/Table.css';

export type Node = {
    left: number;
    key: string;
    right: number;
}

type TreeNode = {
  key: string;
  left: TreeNode | null;
  right: TreeNode | null;
};

function insert(root: TreeNode | null, key: string): TreeNode {
    if (!root) return { key, left: null, right: null };
    if (key < root.key) {
        root.left = insert(root.left, key);
    } else {
        root.right = insert(root.right, key);
    }
    return root;
}

function flatten(root: TreeNode | null, nodes: Node[], indexMap: Map<TreeNode, number>): number {
    if (!root) return -1;

    const node: Node = { key: root.key, left: -1, right: -1 };
    const currentIndex = nodes.length;
    nodes.push(node);
    indexMap.set(root, currentIndex);

    const leftIndex = flatten(root.left, nodes, indexMap);
    const rightIndex = flatten(root.right, nodes, indexMap);

    nodes[currentIndex].left = leftIndex;
    nodes[currentIndex].right = rightIndex;

    return currentIndex;
}

export function buildBST(strings: string[]): Node[] {
    let root: TreeNode | null = null;
    for (const s of strings) {
        root = insert(root, s);
    }

    const nodes: Node[] = [];
    const indexMap = new Map<TreeNode, number>();
    flatten(root, nodes, indexMap);
    return nodes;
}

type Props = {
    table: Node[];
    setTable: React.Dispatch<React.SetStateAction<Node[]>>;
};

const BSTCreation: React.FC<Props> = ({ table, setTable }) => {
    return (
        <>
            <table cellPadding="5" style={{ marginTop: '1rem' }}>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Left</th>
                        <th>Key</th>
                        <th>Right</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((node, index) => (
                        <tr key={index}>
                        <td>{index}</td>
                        <td>{node.left}</td>
                        <td>{node.key}</td>
                        <td>{node.right}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default BSTCreation;