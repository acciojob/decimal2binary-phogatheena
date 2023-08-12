function decimalToBinary(num) {
  //Write you code here
	 if (num === 0) {
    return '0';
  }

  let a= '';
  while (num > 0) {
    a = (num % 2) + binary;
    num = num/ 2;
  }

  return binary;
  
}

window.decimalToBinary = decimalToBinary;
