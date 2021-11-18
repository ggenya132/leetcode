function visitAllProps(obj, cb) {
  if (Array.isArray(obj)) {
    obj.forEach((item) => visitAllProps(item, cb));
  } else if (typeof obj === "object") {
    for (key in obj) {
      visitAllProps(obj[key], cb);
    }
  } else {
    cb(obj);
  }
}
