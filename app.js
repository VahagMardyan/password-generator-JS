export default function generate(passwordSize, includeDigits=true, includeUppercase=true, 
    includeLowercase=true, includeSymbols=true) {

    const digits = "0123456789";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "~!@#$%^&*()-+/*[]{};.<>/''";

    let allowedChars = "";
    let result = "";

    if(includeDigits) {
        allowedChars += digits;
    }
    if(includeUppercase) {
        allowedChars += uppercaseLetters;
    } 
    if(includeLowercase) {
        allowedChars += lowercaseLetters;
    }
    if(includeSymbols) {
        allowedChars += symbols;
    }
    if(allowedChars.length === 0) {
        return "Please select at least one variant";
    }
    
    const size = parseInt(passwordSize);
    if(isNaN(size) || size <= 0) {
        return "Invalid size";
    }

    for(let i=0;i<size;i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        result += allowedChars[randomIndex];
    }
    return result;
}