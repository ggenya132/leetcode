function getKeyValueQueryParams(s) {
  let keyValues = s.split("&");

  let results = {};
  for (let i = 0; i < keyValues.length; i++) {
    let currentKeyValues = keyValues[i];
    results = { ...results, ...getKeyValuePairs(currentKeyValues) };
  }
  return results;

  function getKeyValuePairs(s) {
    let [keys, value] = s.split("=");
    let splitKey = keys.split(".");
    let outerKeys = {};
    helper(splitKey, outerKeys);
    return outerKeys;
    function helper(keys, currentNestedKey) {
      if (keys.length === 1) {
        let lastKey = keys[0];
        currentNestedKey[lastKey] = value;
        return;
      }
      let currentKey = keys[0];

      let newKey = {};
      currentNestedKey[currentKey] = newKey;
      helper(keys.slice(1), newKey);
    }
  }
}

let res = getKeyValueQueryParams("test.foo#bar=123&let.me.see=456&what=isThis");
// {
//     "test": {
//         "foo": {
//             "bar": "123"
//         }
//     },
//     "let": {
//         "me": {
//             "see": "456"
//         }
//     },
//     "what": "isThis"
// }
