const btnEl = document.getElementById('submit-btn')
const fullnameEl = document.getElementById('name-input')
const emailEl = document.getElementById('email-input')
const phonenumberEl = document.getElementById('phonenumber-input')
const textareaEl = document.getElementById('textarea-input')
const wrong1 = document.getElementById('wrong1')
const wrong2 = document.getElementById('wrong2')
const wrong3 = document.getElementById('wrong3')
const wrong4 = document.getElementById('wrong4')


var nameValid = false
var emailValid = false
var phoneNumberValid = false
var textareaValid = false


btnEl.addEventListener('click', (e) => {
    e.preventDefault()
    nameValidation()
    emailaddressValidation()
    phoneNumberValidalidation()
    textValidation()


    if (!nameValid) {
        console.log(nameValid);
        wrong1.style.display = "block"
        wrong1.innerHTML = "Your name is wrong"
    }

    if (!emailValid) {
        console.log(emailValid);
        wrong2.style.display = "block"
        wrong2.innerHTML = "Your email is wrong"
    }


    if (!phoneNumberValid) {
        console.log(phoneNumberValid);
        wrong2.style.display = "block"
        wrong2.innerHTML = "Your Phone number is wrong"
    }


    if (!textareaValid) {
        console.log(textareaValid);
        wrong2.style.display = "block"
        wrong2.innerHTML = "Your Message is short"
    }

})


nameValidation = () => {
    if (fullnameEl.value.length > 4) {
        nameValid = true
    }
}

emailaddressValidation = () => {
    if (emailEl.value.includes('@') && emailEl.value.split('@')[0].length > 2 && emailEl.value.split('@')[1].length > 4) {
        emailValid = true
    }
}

phoneNumberValidalidation = () => {
    if (phonenumberEl.value.length < 12 && phonenumberEl.value.slice(0, 4) == '+961' && phonenumberEl.value.slice(4, 5) == '3' || phonenumberEl.value.length < 13 && phonenumberEl.value.slice(0, 4) == '+961' && phonenumberEl.value.slice(4, 5) == '7') {
        phoneNumberValid = true
    }
}

textValidation = () => {
    if (textareaEl.value.length > 99) {
        textareaValid = true
    }
}






