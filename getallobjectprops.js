function getAllObjectProps(object, prependedUrl) {
  for (let key in object) {
    console.log({ value: object[key] });
    if (key === "linkText" || key === "buttonLink") {
      if (object[key].startsWith("/")) {
        object[key] = `${prependedUrl}\\${object[key]}`;
      }
    } else if (typeof object[key] === "object" && object[key] !== null) {
      getAllObjectProps(object[key], prependedUrl);
    }
  }
}
