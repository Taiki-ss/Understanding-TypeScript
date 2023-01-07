// const names:Array<string>=[]

// names[0].split(' ')

const merge = <T extends {}, U>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj);
