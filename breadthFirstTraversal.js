const assert = require("assert");

isArray = function (a) {
  return !!a && a.constructor === Array;
};

function cloneObject(objectToTraverse, clonedObject = {}) {
  for (let key in objectToTraverse) {
    if (objectToTraverse.hasOwnProperty(key)) {
      if (
        typeof objectToTraverse[key] === "object" &&
        !isArray(objectToTraverse[key])
      ) {
        clonedObject[key] = {};
        cloneObject(objectToTraverse[key], clonedObject[key]);
      } else if (isArray(objectToTraverse[key])) {
        clonedObject[key] = [];
        cloneObject(objectToTraverse[key], clonedObject[key]);
      } else {
        // we have a primative
        clonedObject[key] = objectToTraverse[key];
      }
    }
  }
  return clonedObject;
}

const test = {
  a: { d: { g: { h: { a: 1, b: "hello", c: "clone" } } }, e: 3.14, f: {} },
  b: 1,
  c: [1, 3, 4],
};
const clonedObject = cloneObject(test);
const secondClone = { ...cloneObject };
console.log({ clonedObject });
assert.deepStrictEqual(test, clonedObject);
console.log(Object.is(clonedObject, secondClone));

const {
  Records: {
    s3: {
      bucket: { name },
      object: { key },
    },
  },
} = event;
