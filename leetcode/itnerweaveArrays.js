function weaveArrays(arrOne, arrTwo, prefixes, results) {
  if (!arrOne.length || !arrTwo.length) {
    let result = [...prefixes, ...arrOne, ...arrTwo];
    results.push(result);
    return;
  }

  let prefixOne = arrOne.shift();
  prefixes.push(prefixOne);
  weaveArrays(arrOne, arrTwo, prefixes, results);
  arrOne.push(prefixes.pop());

  let prefixTwo = arrTwo.shift();
  prefixes.push(prefixTwo);
  weaveArrays(arrOne, arrTwo, prefixes, results);
  arrTwo.push(prefixes.pop());

  return results;
}
