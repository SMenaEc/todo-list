import './styles.css';
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);// Cuando el foreach devuelve un único parámetro y ese es el elemento que queremos pasarle a la función que llamamos se puede usar esta expreción abreviada.

console.log('todos', todoList.todos);

// const tarea = new Todo('Terminar curso javascript');

// tarea.completado = false;
// todoList.nuevoTodo(tarea);
// console.log(todoList);

//crearTodoHtml(tarea);


// localStorage.setItem('mi-key', 'abc-124');
// setTimeout( () => {
//     localStorage.removeItem('mi-key')
// }, 1500);