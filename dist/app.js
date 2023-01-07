"use strict";
var merge = function (objA, objB) {
    return Object.assign(objA, objB);
};
var mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj);
//# sourceMappingURL=app.js.map