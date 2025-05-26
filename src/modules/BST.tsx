import React from 'react';
import '../css/Table.css';

export type Node = {
    left: number;
    key: string;
    right: number;
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
                        <th>Left</th>
                        <th>Key</th>
                        <th>Right</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((node, index) => (
                        <tr key={index}>
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