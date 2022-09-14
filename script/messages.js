const messagesEL = document.querySelector(".messages-list")



fetch('http://localhost/bootstrap/messages.php')
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            console.log(data[i].message);
            li = document.createElement('p')
            li.innerHTML = data[i].message
            messagesEL.appendChild(li)
        }
    }
    );