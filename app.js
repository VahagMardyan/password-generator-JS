export default function generate(passwordSize, includeDigits=true, includeUppercase=true, 
    includeLowercase=true, includeSymbols=true, includeSpecial=true) {

    const charSets = {
        digits : "0123456789",
        uppercase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase : "abcdefghijklmnopqrstuvwxyz",
        symbols : "~!@#$%^&*-+/*",
        special : "()[]{};.,:<>/'_?"
    };

    let result = [];
    let allowedChars = "";
    
    const size = parseInt(passwordSize);
    if(isNaN(size) || size <= 0) {
        return "Invalid size!";
    }

    if(size < 3) {
        return "Size is too small!";
    }

    if(size > 30) {
        return "Size is too large!";
    }

    if(includeDigits) {
        result.push(charSets.digits[Math.floor(Math.random() * charSets.digits.length)]);
        allowedChars += charSets.digits;
    }
    if(includeLowercase) {
        result.push(charSets.lowercase[Math.floor(Math.random() * charSets.lowercase.length)]);
        allowedChars += charSets.lowercase;
    }
    if(includeUppercase) {
        result.push(charSets.uppercase[Math.floor(Math.random() * charSets.uppercase.length)]);
        allowedChars += charSets.uppercase;
    }
    if(includeSymbols) {
        result.push(charSets.symbols[Math.floor(Math.random() * charSets.symbols.length)]);
        allowedChars += charSets.symbols;
    }
    if(includeSpecial) {
        result.push(charSets.special[Math.floor(Math.random() * charSets.special.length)]);
        allowedChars += charSets.special;
    }
    
    if(allowedChars.length === 0) {
        return "Please select at least one!";
    }

    if(result.length > size) {
        return "Size is too small for all selected types!";
    }

    const remainingSize = size - result.length;
    for(let i=0;i<remainingSize;i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        result.push(allowedChars[randomIndex]);
    }

    for(let i=result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [ result[i], result[j] ] = [ result[j], result[i] ];
    }

    return result.join("");
}