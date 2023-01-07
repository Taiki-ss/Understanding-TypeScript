"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var merge = function (objA, objB) {
    return Object.assign(objA, objB);
};
var mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj);
var countAndDescribe = function (element) {
    var descriptionText = element.length > 0 ? "\u5024\u306F".concat(element.length, "\u500B\u3067\u3059\u3002") : "値がありません";
    return [element, descriptionText];
};
console.log(countAndDescribe("お疲れさまでした。"));
console.log(countAndDescribe(["1こ", "２こ"]));
var extactAndConvert = function (obj, key) {
    return "Value: " + obj[key];
};
extactAndConvert({ name: "taiki" }, "name");
var DataStrage = (function () {
    function DataStrage() {
        this.data = [];
    }
    DataStrage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStrage.prototype.removeItem = function (item) {
        console.log(this.data.indexOf(item));
        if (this.data.indexOf(item) < 0)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStrage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStrage;
}());
var stringStrage = new DataStrage();
stringStrage.addItem("test");
stringStrage.addItem("test2");
stringStrage.addItem("test3");
stringStrage.removeItem("test2");
console.log(stringStrage.getItems());
//# sourceMappingURL=app.js.map