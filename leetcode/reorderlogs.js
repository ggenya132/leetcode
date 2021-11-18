/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  return logs.sort(compare);

  function compare(logA, logB) {
    if (isLetterLog(logA) && isLetterLog(logB)) {
      return sortByContentsOrIdentifier(logA, logB);
    } else if (isLetterLog(logA) && !isLetterLog(logB)) {
      return -1;
    }
    return 0;
  }

  function isLetterLog(log) {
    let splitLog = log.split(" ");
    return isNaN(splitLog[1][0]);
  }

  function sortByContentsOrIdentifier(logA, logB) {
    let logContentsA = logA.split(" ");
    let logContentsWithoutIdentifierA = logContentsA.slice(1).join(" ");
    let logContentsB = logB.split(" ");
    let logContentsWithoutIdentifierB = logContentsB.slice(1).join(" ");
    if (logContentsWithoutIdentifierA !== logContentsWithoutIdentifierB) {
      return logContentsWithoutIdentifierA < logContentsWithoutIdentifierB
        ? -1
        : 1;
    }

    let identifierA = logContentsA[0].substring(0, logContentsA[0].length - 1);
    let identifierB = logContentsB[0].substring(0, logContentsB[0].length - 1);
    return identifierA < identifierB ? -1 : 1;
  }
};
