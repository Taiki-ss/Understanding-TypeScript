// const names:Array<string>=[]

// names[0].split(' ')

const merge = <T extends {}, U>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T) => {
  const descriptionText =
    element.length > 0 ? `値は${element.length}個です。` : "値がありません";
  return [element, descriptionText];
};

console.log(countAndDescribe("お疲れさまでした。"));
console.log(countAndDescribe(["1こ", "２こ"]));

const extactAndConvert = <T extends Object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return "Value: " + obj[key];
};

extactAndConvert({ name: "taiki" }, "name");

class DataStrage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    console.log(this.data.indexOf(item));
    if (this.data.indexOf(item) < 0) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const stringStrage = new DataStrage<string>();
stringStrage.addItem("test");
stringStrage.addItem("test2");
stringStrage.addItem("test3");
stringStrage.removeItem("test2");

console.log(stringStrage.getItems());
