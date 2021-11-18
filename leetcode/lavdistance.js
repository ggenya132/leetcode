 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
     const dist = [[]];
    
     // we've added plus one to account for the empty string
     for (let i = 0; i <= word1.length; i++) {
         if (!dist[i]) { // because initializing empty Arrays with current sizes in JavaScript is weird
             dist[i] = [];
         }
         
         for (let j = 0; j <= word2.length; j++) {
             if (i === 0) {
                 // i is the empty string, so 1 insert per char of j
                 dist[i][j] = j;
             } else if (j === 0) {
                 // j is the empty string, so 1 insert per char of i
                 dist[i][j] = i;
             } else if (word1[i - 1] === word2[j - 1]) {
                 // the last character matches, so use the diagonal
                 // this is because the no changes required from previous
                 dist[i][j] = dist[i - 1][j - 1];
             } else {
                 dist[i][j] = Math.min(1 + Math.min(
                    dist[i - 1][j],
                    dist[i][j - 1],
                    dist[i - 1][j - 1]
                 ));
             }
         }
     }
    
    return dist[word1.length][word2.length];
};