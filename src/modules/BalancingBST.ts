import type { Node } from "./BSTCreation";

// must be in form [number, string][]
// can be achieved with: const indexArr: [number, string][] = sortedArr.map((value, i) => [i, value]);
export const BSTBalance = (sortedArr: [number, string][]): [Node[], number] | undefined => {
    if (sortedArr.length === 0) return undefined;

    if (sortedArr.length === 1) {
        return [[{ left: -1, key: sortedArr[0][1], right: -1 }], 0];
    }

    const middleIndex = Math.floor(sortedArr.length / 2);
    const middle = sortedArr[middleIndex];
    const leftArr = sortedArr.slice(0, middleIndex);
    const rightArr = sortedArr.slice(middleIndex + 1);

    const leftResult = BSTBalance(leftArr);
    const rightResult = BSTBalance(rightArr);

    const leftNodes = leftResult?.[0] ?? [];
    const rightNodesRaw = rightResult?.[0] ?? [];

    const rightOffset = leftNodes.length + 1;

    // Fix rightNodes pointers to account for their new position in the full array
    const rightNodes: Node[] = rightNodesRaw.map(node => ({
        key: node.key,
        left: node.left === -1 ? -1 : node.left + rightOffset,
        right: node.right === -1 ? -1 : node.right + rightOffset,
    }));

    const middleNodeIndex = leftNodes.length;
    const rootNode: Node = {
        key: middle[1],
        left: leftResult ? leftResult[1] : -1,
        right: rightResult ? rightResult[1] + rightOffset : -1,
    };

    const allNodes = [...leftNodes, rootNode, ...rightNodes];
    return [allNodes, middleNodeIndex];
};