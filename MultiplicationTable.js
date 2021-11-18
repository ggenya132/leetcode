function getMultiplicationTable(sizeOfTable) {
  let tableToBeBuilt = "";
  let currentRow, currentColumn;

  for (let i = 1; i <= sizeOfTable * sizeOfTable; i++) {
    currentRow = Math.ceil(i / sizeOfTable);
    currentColumn = i % sizeOfTable === 0 ? sizeOfTable : i % sizeOfTable;
    tableToBeBuilt += padLeftAndAddDividor(currentColumn * currentRow);
    if (isEndOfRow(sizeOfTable, currentColumn)) {
      tableToBeBuilt += "\n";
    }
  }

  console.log(tableToBeBuilt);
  function isEndOfRow(sizeOfTable, currentColumn) {
    console.log(sizeOfTable === currentColumn);
    return sizeOfTable === currentColumn;
  }
  function padLeftAndAddDividor(number) {
    let stringNumber = number;
    stringNumber = stringNumber.toString();

    const paddingLeftNeeded = 3 - 1;
    return number.toString().padLeft(paddingLeftNeeded) + "|";
  }
}
getMultiplicationTable(5);
