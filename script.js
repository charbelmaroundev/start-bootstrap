/////////////////////////////////////////////////
// I KNOW MY IS NOT CLEAN BUT NO TIME TO CLEAN IT
/////////////////////////////////////////////////

// ELEMENTS
const btnEl = document.getElementById('submit-btn')
const fullnameEl = document.getElementById('name-input')
const emailEl = document.getElementById('email-input')
const phonenumberEl = document.getElementById('phonenumber-input')
const textareaEl = document.getElementById('textarea-input')
const wrong1 = document.getElementById('wrong1')
const wrong2 = document.getElementById('wrong2')
const wrong3 = document.getElementById('wrong3')
const wrong4 = document.getElementById('wrong4')

// VARS FOR VALIDATION
let nameValid = false
let emailValid = false
let phoneNumberValid = false
let textareaValid = false

// FUNTIONS FOR CONDITIONS
nameValidation = () => {
    if (fullnameEl.value.length > 4) {
        nameValid = true
    } else {
        nameValid = false
    }
}

emailaddressValidation = () => {
    if (emailEl.value.includes('@')
        && emailEl.value.split('@')[0].length > 2
        && emailEl.value.split('@')[1].length > 4) {
        emailValid = true
    } else {
        emailValid = false
    }
}

phoneNumberValidalidation = () => {
    if (phonenumberEl.value.length < 12
        && phonenumberEl.value.slice(0, 4) == '+961'
        && phonenumberEl.value.slice(4, 5) == '3'
        || phonenumberEl.value.length < 13
        && phonenumberEl.value.slice(0, 4) == '+961'
        && phonenumberEl.value.slice(4, 5) == '7') {
        phoneNumberValid = true
    } else {
        phoneNumberValid = false
    }
}

textValidation = () => {
    if (textareaEl.value.length > 99) {
        textareaValid = true
    } else {
        textareaValid = false
    }
}

// EVENT LISTENER FOR SUBMIT BUTTON
btnEl.addEventListener('click', (e) => {
    e.preventDefault()
    nameValidation()
    emailaddressValidation()
    phoneNumberValidalidation()
    textValidation()

    // CHANGE THE DISPLAY
    if (!nameValid) {
        console.log(nameValid);
        wrong1.style.display = "block"
        wrong1.innerHTML = "Your name is wrong"
    } else {
        wrong1.style.display = "none"

    }

    if (!emailValid) {
        console.log(emailValid);
        wrong2.style.display = "block"
        wrong2.innerHTML = "Your email is wrong"
    } else {
        wrong2.style.display = "none"

    }

    if (!phoneNumberValid) {
        console.log(phoneNumberValid);
        wrong3.style.display = "block"
        wrong3.innerHTML = "Your Phone number is wrong"
    } else {
        wrong3.style.display = "none"
    }

    if (!textareaValid) {
        console.log(textareaValid);
        wrong4.style.display = "block"
        wrong4.innerHTML = "Your Message is short"
    } else {
        wrong4.style.display = "none"

    }
})