import type { Node } from "./BSTCreation";
import '../css/Tree.css';

import type { TreeNode } from "./BSTCreation";

const buildVisualTree = (nodes: Node[], rootIndex: number = 0): TreeNode | null => {
    const build = (index: number, visited = new Set<number>()): TreeNode | null => {
        if (index === -1 || index < 0 || index >= nodes.length) return null;
        if (visited.has(index)) {
            // failsafe to prevent crashes
            console.warn(`Detected cycle or re-visiting node at index ${index}`);
            return null;
        }
        visited.add(index);

        const { key, left, right } = nodes[index];
        return {
            key,
            left: build(left, visited),
            right: build(right, visited),
        };
    };
    return nodes.length > 0 ? build(rootIndex) : null;
};

const TreeNodeView = ({ node }: { node: TreeNode | null }) => {
    if (!node) return null;

    return (
        <div className="tree-node">
            <div className="node">{node.key}</div>
            <div className="children">
                <div className="child left">
                    <TreeNodeView node={node.left} />
                </div>
                <div className="child right">
                    <TreeNodeView node={node.right} />
                </div>
            </div>
        </div>
    );
};

export const BSTVisual = ({ nodes, rootIndex = 0 }: { nodes: Node[], rootIndex?: number }) => {
    const root = buildVisualTree(nodes, rootIndex);
    return <TreeNodeView node={root} />;
};