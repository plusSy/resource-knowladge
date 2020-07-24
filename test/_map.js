const defineMap = require("../map/index.js");

let a = [{a:1}];

let map = new defineMap()

map.set(0, a)

// map.get(a)

console.log(map)


console.log(map.get(0))