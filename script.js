import generate from "./app.js";

const passwordLength = document.getElementById("number-input");
const result = document.getElementById("result");
const isDigit = document.getElementById("digits");
const isLowercase = document.getElementById("lowercase");
const isUppercase = document.getElementById("uppercase");
const isSymbol = document.getElementById("symbol");
const isSpecialSymbol = document.getElementById('special-symbol');
const isAll = document.getElementById("all");

const gen_btn = document.getElementById('gen-btn');
const copy_btn = document.getElementById('copy-btn');
const reset_btn = document.getElementById('reset-btn');

isAll.addEventListener('change', ()=> {
    const checkbox = Array.from(document.getElementsByClassName('check'));
    checkbox.map(el => {
        isAll.checked ? el.checked = true : el.checked = false;
    });
});

gen_btn.addEventListener('click',()=>{
    result.value = generate(passwordLength.value, isDigit.checked, 
        isUppercase.checked, isLowercase.checked, isSymbol.checked, isSpecialSymbol.checked);
});

document.addEventListener('keyup',(event)=>{
    if(event.key === "Enter") {
        result.value = generate(passwordLength.value, isDigit.checked, 
            isUppercase.checked, isLowercase.checked, isSymbol.checked, isSpecialSymbol.checked);
    }
});

copy_btn.addEventListener('click', ()=>{
    if(!result.value || result.value.includes("Size") || result.value.includes("Invalid") || result.value.includes("Please")) {
        return;
    }
    navigator.clipboard.writeText(result.value);
    const originalText = copy_btn.innerText;
    copy_btn.innerText = "✅";
    setTimeout(()=>{
        copy_btn.innerText = originalText;
    }, 1500);
});

reset_btn.addEventListener('click',()=>{
    const request = confirm("Are you sure? This option is undone.");
    if(request) {
        location.reload();
    }
});