import type { Node } from "./BSTCreation";

// must be in form [number, string][]
// can be achieved with: const indexArr: [number, string][] = sortedArr.map((value, i) => [i, value]);
export const BSTBalance = ( sortedArr: [number, string][]): [Node[], number] | undefined => {
    if (sortedArr.length < 2) {
        if (sortedArr.length == 1) {
            return [[{
                left: -1,
                key: sortedArr[0][1],
                right: -1
            }], 0] as [Node[], number];
        } else {
            return undefined;
        }
    }
    const middleIndex = Math.floor((sortedArr.length - 1) / 2);
    let nodesLeftRight: [Node[], Node[]] = [[], []];
    let topPos: [number, number] = [-1, -1];

    const left = sortedArr.slice(0, middleIndex);
    if (left.length >= 1) {
        let leftNodes = BSTBalance(left);
        if (leftNodes && leftNodes[0]) {
            nodesLeftRight[0] = leftNodes[0];
            topPos[0] = leftNodes[1];
        }
    } 

    const right = sortedArr.slice(0, middleIndex);
    if (right.length >= 1) {
        let rightNodes = BSTBalance(right);
        if (rightNodes && rightNodes[0]) {
            nodesLeftRight[1] = rightNodes[0];
            topPos[1] = rightNodes[1];
        }
    } 

    const middle = sortedArr[middleIndex];
    let middleNode = {
        left: topPos[0],
        key: middle[1],
        right: topPos[1] 
    } as Node;

    const nodes = [...nodesLeftRight[0], middleNode, ...nodesLeftRight[1]] 

    return [nodes, middle[0]];
}