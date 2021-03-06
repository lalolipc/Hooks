import React from 'react';
//no olvidar llaves
const Todo = ({todo,todoDelete,todoToogleCompleted,setTodoEdit}) => {
    return (
       
        <div className="card">
<div className="card-body">
<h5 className="card-title">{todo.title}</h5>
<h6 className="card-description"><i>{todo.description}</i></h6>
<button  onClick={() => todoToogleCompleted(todo.id)} type="button" className={`btn btn-primary ${todo.completed ? `btn-outline-primary` : `btn-primary`}`}>{todo.completed?'Terminado':'terminar'}</button>
<button onClick={() => setTodoEdit(todo)} type="button" className="btn btn-secondary ">editar</button>
<button onClick={() => todoDelete(todo.id)} type="button" className="btn btn-danger">Eliminar</button>
</div>
</div>
    
    );
}
//()=>{todoDelete(todo.id)} si no tuviera argumento no es necesario el ()
//template string {}
export default Todo;
