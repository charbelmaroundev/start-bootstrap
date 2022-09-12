const btnEl = document.getElementById('submit-btn')
const fullnameEl = document.getElementById('name-input')
const emailEl = document.getElementById('email-input')
const passwordEl = document.getElementById('password-input')
const textareaEl = document.getElementById('textarea-input')


let nameValid = false
let emailValid = false
let passwordValid = false
let textareaValid = false


btnEl.addEventListener('click', () => {
    nameValidation(emailValid)
    emailValid(emailValid)
    passwordValidation(passwordValid)
    console.log()
})




nameValidation = (nameValid) => {
    if (fullnameEl.value.length > 4) {
        nameValid = true
        console.log("name");
    }
}

emailValid = (emailValid) => {
    if (emailEl.value.includes('@') && emailEl.value.split('@')[0].length > 2 && emailEl.value.split('@')[1].length > 4) {
        emailValidnameValid = true
        console.log("Email");
    }
}

passwordValidation = (passwordEl) => {
    if (passwordEl.value.length > 8 && /[0-9]/.test(passwordEl.value)) {
        emailValidnameValid = true
        console.log("Email");
    }
}





// var str = "Abc: Lorem ipsum sit amet";
// str = str.substring(str.indexOf(":") + 1);
// console.log(str);

// const str = 'one two_three four';

// const before_ = str.substring(0, str.indexOf('_'));

// console.log(before_); // 👉️ 'one two'