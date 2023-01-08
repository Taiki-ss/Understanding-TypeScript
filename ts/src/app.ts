// デコレーター

const Logger = (logString: string) => {
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
};

const WithTemplate = (template: string, hookId: string) => {
  return (_: Function) => {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
};

@Logger("ログ出力中 - PERSON")
@WithTemplate("<h1>Personオブジェクト</h1>", "app")
class Person {
  name = "taiki";

  constructor() {
    console.log("Personオブジェクトを作成中...");
  }
}

const pers = new Person();
console.log(pers);

// ---

const Log = (target: any, propertyName: string | Symbol) => {
  console.log("Property デコレータ");
  console.log(target, propertyName);
};

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("不正な価格です - 0以下は設定できません");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
