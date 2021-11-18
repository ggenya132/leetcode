function validateIP(ip) {
  /**
	@param ip: string
	@return: boolean
	*/
  console.log({ ip });
  // your code goes here
  let octets = ip.split(".");
  return octets.every(isValidIp);
  function isValidIp(octet) {
    let num = parseInt(octet);
    if (isNaN(num)) {
      return false;
    }
    return num >= 0 && num <= 255;
  }
}
