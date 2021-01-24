import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// interface defines the structure of an object
// Each Todo object needs to have these properties of these types
// These match the info we are retrieving from the API
// We can ignore properties if we want
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  // res.data needs to match what is expected by the Todo object
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
      The Todo with ID: ${id}
      Has a title of: ${title}
      Is it finished? ${completed}
    `);
};
