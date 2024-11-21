"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dfs = dfs;
function dfs(data, options, payload) {
    const { getHash, getChildrens, isFinished, checkChildren, getScore, compareNode } = options;
    let queue = data.map((d) => ({
        data: d,
        parent: undefined,
        depth: 0,
    }));
    const cash = new Map();
    let counter = 0;
    while (queue.length > 0) {
        counter += 1;
        const dataWithParent = queue.shift();
        const data = dataWithParent.data;
        if (isFinished(data, payload)) {
            const result = [];
            let dataWithP = dataWithParent;
            while (dataWithP !== undefined) {
                result.push(dataWithP.data);
                dataWithP = dataWithP.parent;
            }
            console.log("нашел за", counter);
            return result;
        }
        let childrens = getChildrens(data, payload);
        if (getHash) {
            const nodesToDelete = [];
            childrens = childrens.filter(child => {
                const hash = getHash(child);
                if (cash.has(hash)) {
                    const comapare = compareNode ? compareNode(dataWithParent, cash.get(hash)) : -1;
                    if (comapare > 0) {
                        nodesToDelete.push(cash.get(hash));
                    }
                    else {
                        return false;
                    }
                }
                cash.set(hash, dataWithParent);
                return true;
            });
            queue.filter((e) => nodesToDelete.includes(e));
        }
        if (checkChildren) {
            childrens = childrens.filter((child) => checkChildren(child, payload));
        }
        queue.push(...childrens.map((d) => ({
            data: d,
            parent: dataWithParent,
            depth: dataWithParent.depth + 1,
        })));
        if (getScore) {
            queue.sort((a, b) => getScore(b.data, b.depth, payload) - getScore(a.data, a.depth, payload));
        }
    }
    return [];
}
