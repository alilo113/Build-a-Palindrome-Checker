const form = document.getElementById("form")
const textInput = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")

form.addEventListener("submit", (e) => {
    e.preventDefault(e)
    const inputValue = textInput.value;
    const cleanedInput = inputValue.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();    
    const isPalindrome = cleanedInput.split("").reverse().join("") === cleanedInput

    if(inputValue === ""){
        alert("Please input a value")
    }else if(isPalindrome === true){
        result.innerHTML = `${inputValue} is a palindrome`;
    }else{
        result.innerHTML = `${inputValue} is not a palindrome`
    }
})