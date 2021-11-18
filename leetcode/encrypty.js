function caesarCipherEncryptor(string, key) {
  // Write your code here.
	const numberOfLettersInAlphabet = 26;
	const startOfAbcs = 96;
	for(let i =0; i < string.length;i++){
		string[i] = 
	}
		
		const getEncodedChar = (char) => {
			String.
			fromCharCode((char.charCodeAt(0) + 2) - startOfAbcs) % numberOfLettersInAlphabet) +  startOfAbcs))
		}
	
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
