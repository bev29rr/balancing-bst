import type { Node } from "./BSTCreation";
import '../css/Tree.css';

type TreeNode = {
  key: string;
  left: TreeNode | null;
  right: TreeNode | null;
};

const buildVisualTree = (nodes: Node[]): TreeNode | null => {
    const build = (index: number): TreeNode | null => {
        if (index === -1) return null;
            const { key, left, right } = nodes[index];
        return {
            key,
            left: build(left),
            right: build(right),
        };
    };
    return nodes.length > 0 ? build(0) : null;
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

export const BSTVisual = ({ nodes }: { nodes: Node[] }) => {
    const root = buildVisualTree(nodes);
    return <TreeNodeView node={root} />;
};