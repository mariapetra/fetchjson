import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/todos/1";

// This is async and you will get a promise in return - it will be called once we get a response from that API
axios.get(url).then(response => {
  console.log(response.data);
});

//run this in your terminal using ` tsc index.html`
//You will then see a index.js

//to compile:
  // node index.js
  // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

//To run both of these:
  // ts-node index.ts