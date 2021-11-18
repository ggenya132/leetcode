function phoneNumberMnemonics(phoneNumber) {
  // Write your code here.
	const allPerms = [];
	let hash = {2 :"abc",
							3:"def", 
							4: "ghi", 
							5:"jkl", 
							6:"mno", 
							7:"pqrs",
							8:"tuv",
							9: "wxyz",
							0: "0",
							1: "1"
						 };
						helper(phoneNumber, 0, '', allPerms)
	
	// we don't want to use a forloop here because we only want to take action 
	// at the END of the recursion (we''ve appended all phone letters), the base case
	// will not have this condition 
	// so we pass along the index, with a snap shot of the string 
		function helper(phoneNumber, index, currentString, allStrings){
				if(index === phoneNumber.length){
					allStrings.push(currentString)
				}
				else {
					let allLetters = hash[phoneNumber[index]];
					allLetters.split('').forEach(letter => {
							currentString = currentString.substring(0, index) + letter 
						+ currentString.substring(index + 1)
							helper(phoneNumber, index + 1, currentString, allStrings)
					})
				}
		}
	
	console.log(allPerms)
  return allPerms
}
//this is NOT a back tracking problem
// Do not edit the line below.
exports.phoneNumberMnemonics = phoneNumberMnemonics;
