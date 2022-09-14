// const messagesEL = document.querySelector(".messages-list")


// // let messages = []

// // fetch('http://localhost/bootstrap/messages.php')
// //     .then((response) => response.json())
// //     .then((data) => data.forEach(element => {
// //         messages.push(element.message)
// //     }));



// // console.log(messagesEL);

// // console.log(messages);




// // messages.forEach(message => {
// //     let li = document.createElement('li');
// //     console.log(messages);
// // })

// // for (i = 0; i < messages.length; ++i) {
// //     let li = document.createElement('li');
// //     li.innerHTML = messages.message[i];

// //     messagesEL.appendChild(li);

// // }




// // let div = document.createElement("Button");

// // div.innerHTML = "Save";
// // document.querySelector("p").appendChild(div);
// // const saveEl = document.querySelector("p");


// // let data = ["item1", "item2", "item3", "item4"];
// // let list = document.getElementById("UnList");
// // for (i = 0; i < data.length; ++i) {
// //     var li = document.createElement('li');
// //     li.innerText = data[i];
// //     list.appendChild(li);
// // }


// // console.log("TEST");


// const getData = async () => {
//     const data = [];
  
//     const f1_data = await fetch("https://swapi.dev/api/people/1/")
//       .then((res) => res.json());
//     data.push(f1_data.name);
  
//     const f2_data = await fetch("https://swapi.dev/api/people/2/")
//       .then((res) => res.json());
//     data.push(f2_data.name);
    
//     console.log(data);
//   };