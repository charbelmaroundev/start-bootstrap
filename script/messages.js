const messagesEL = document.querySelector(".messages-list")


let messages = []

fetch('http://localhost/bootstrap/messages.php')
    .then((response) => response.json())
    .then((data) => data.forEach(element => {
        messages.push(element)
    }));





console.log(messages);



// console.log("TEST");