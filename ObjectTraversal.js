function traverseObject(prop, cb) {
  if (typeof prop === "object") {
    if (Array.isArray(prop)) {
      prop.forEach((val) => traverseObject(val, cb));
    } else {
      for (key in prop) {
        traverseObject(prop[key], cb);
      }
    }
  } else {
    cb(prop);
  }
}

const object = {
  a: 1,
  b: { a: 2, b: 3, c: 4, d: [5, { z: 99, b: 109 }] },
  e: 6,
};

//traverseObject(object, console.log);

const cloneObject = (objtoclone) => {
  const newObject = {};
  function traverseObject(oldObj, newObj) {
    for (key in oldObj) {
      const currentValue = oldObj[key];
      if (typeof currentValue === "object") {
        newObj[key] = Array.isArray(currentValue) ? [] : {};
        traverseObject(oldObj[key], newObj[key]);
      }
      newObj[key] = currentValue;
    }
  }
  traverseObject(objtoclone, newObject);
  return newObject;
};

const newObject = cloneObject(object);
console.log({ newObject, object });
