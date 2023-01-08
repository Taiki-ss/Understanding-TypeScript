"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Logger = function (logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
};
var WithTemplate = function (template, hookId) {
    return function (_) {
        var hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
};
var Person = (function () {
    function Person() {
        this.name = "taiki";
        console.log("Personオブジェクトを作成中...");
    }
    Person = __decorate([
        Logger("ログ出力中 - PERSON"),
        WithTemplate("<h1>Personオブジェクト</h1>", "app")
    ], Person);
    return Person;
}());
var pers = new Person();
console.log(pers);
var Log = function (target, propertyName) {
    console.log("Property デコレータ");
    console.log(target, propertyName);
};
var Product = (function () {
    function Product(t, p) {
        this.title = t;
        this._price = p;
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error("不正な価格です - 0以下は設定できません");
            }
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getPriceWithTax = function (tax) {
        return this._price * (1 + tax);
    };
    __decorate([
        Log
    ], Product.prototype, "title", void 0);
    return Product;
}());
//# sourceMappingURL=app.js.map