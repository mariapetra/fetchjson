import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/todos/1";

// This is async and you will get a promise in return - it will be called once we get a response from that API
axios.get(url).then(response => {
  //add TS to fix errors
  //Response.data has properties of:
  //id
  //title
  //completed

  //interface defines the structure of an object
  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  //we add as Todo as we want the data to match the Todo interface
  const todo = response.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  console.log(`
    The todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `);
});

//run this in your terminal using ` tsc index.html`
//You will then see a index.js

//to compile:
  // node index.js
  // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

//To run both of these:
  // ts-node index.ts