import React from 'react';
import Todo from './Todo';

//recordar mandar entre llaves
const TodoList = ({todos,todoDelete,todoToogleCompleted,setTodoEdit}) => {
    
    return (
     <div className="gallery">
         {
             todos.map(todo=>
             <Todo 
             todo={todo}
              key={todo.id}
              todoDelete={todoDelete}
              todoToogleCompleted={todoToogleCompleted}
              setTodoEdit={setTodoEdit}
              />)
         }
     </div>
    );
}
 
export default TodoList;
