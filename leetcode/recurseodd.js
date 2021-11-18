function allNumbersAreOdd(numbers) {
  if (numbers.toString().length > 1) {
    return (
      parseInt(numbers.toString()[0]) % 2 === 1 &&
      allNumbersAreOdd(numbers.toString().substring(1))
    );
  }
  console.log({ numbers });
  return parseInt(numbers.toString()[0]) % 2 === 1;
}

allNumbersAreOdd(145);
