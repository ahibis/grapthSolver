"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dfs_1 = require("./dfs");
let map = [
    ".#####.",
    ".#...#.",
    ".#.....",
    ".#...#.",
    "...###",
];
const path = (0, dfs_1.dfs)([[0, 0]], {
    getChildrens([y, x]) {
        return [[y - 1, x], [y + 1, x], [y, x + 1], [y, x - 1]];
    },
    isFinished([y, x]) {
        return (y == 0) && (x == 6);
    },
    getHash([y, x]) {
        return `${y}_${x}`;
    },
    checkChildren([y, x]) {
        if (y < 0 || y > 4 || x < 0 || x > 6)
            return false;
        if (map[y][x] == "#")
            return false;
        return true;
    },
    getScore(data, depth) {
        const [y, x] = data;
        return -(Math.abs(0 - y) + Math.abs(6 - x) + depth * 0.5);
    }
}).reverse();
const mapNew = map.map(e => e.split(""));
path.forEach((p, i) => {
    mapNew[p[0]][p[1]] = (i + 1).toString();
});
console.log(mapNew.map(e => e.join("")).join("\n"));
