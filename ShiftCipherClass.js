class ShiftCipher {
  constructor(shiftAmount) {
    this._shiftAmount = shiftAmount;
  }

  encrypt(strToEncrypt) {
    let strCap = strToEncrypt.toUpperCase();
    let modifiedString = '';
    for (let i = 0; i < strToEncrypt.length; i++) {
      const charCode = strCap.charCodeAt(i);
      const newCharCode = charCode + this._shiftAmount;
      modifiedString += String.fromCharCode(newCharCode);
    }
    return modifiedString;
  }

  decrypt(strToDecrypt) {
    let strLower = strToDecrypt.toLowerCase();
    let modifiedString = '';
    for (let i = 0; i < strLower.length; i++) {
      const charCode = strLower.charCodeAt(i);
      const newCharCode = charCode - this._shiftAmount;
      modifiedString += String.fromCharCode(newCharCode);
    }
    return modifiedString;
  }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('JavaScript'))
console.log(cipher.decrypt('LCXCUETKRV'))