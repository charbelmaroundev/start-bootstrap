const btnEl = document.getElementById('submit-btn')
const fullnameEl = document.getElementById('name-input')
const emailEl = document.getElementById('email-input')
const phonenumberEl = document.getElementById('phonenumber-input')
const textareaEl = document.getElementById('textarea-input')


let nameValid = false
let emailValid = false
let phoneNumberValid = false
let textareaValid = false


btnEl.addEventListener('click', () => {
    nameValidation(nameValid)
    emailaddressValidation(emailValid)
    phoneNumberValidalidation(phoneNumberValid)
    textValidation(textareaValid)
    // console.log(phonenumberEl.value.slice(0, 4))
})




nameValidation = (nameValid) => {
    if (fullnameEl.value.length > 4) {
        nameValid = true
        console.log(nameValid);
    }
}

emailaddressValidation = (emailValid) => {
    if (emailEl.value.includes('@') && emailEl.value.split('@')[0].length > 2 && emailEl.value.split('@')[1].length > 4) {
        emailValid = true
        console.log(emailValid);
    }
}

phoneNumberValidalidation = (phoneNumberValid) => {
    if (phonenumberEl.value.length < 12 && phonenumberEl.value.slice(0, 4) == '+961' && phonenumberEl.value.slice(4, 5) == '3' || phonenumberEl.value.length < 13 && phonenumberEl.value.slice(0, 4) == '+961' && phonenumberEl.value.slice(4, 5) == '7') {
        phoneNumberValid = true
        console.log(phoneNumberValid);
    }
}

textValidation = (textareaValid) => {
    if (textareaEl.value.length > 99) {
        textareaValid = true
        console.log(textareaValid);
    }
}





// var str = "Abc: Lorem ipsum sit amet";
// str = str.substring(str.indexOf(":") + 1);
// console.log(str);

// const str = 'one two_three four';

// const before_ = str.substring(0, str.indexOf('_'));

// console.log(before_); // 👉️ 'one two'