import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './componentes/TodoList';
import TodoForm from './componentes/TodoForm';

const initialTodos=[{
  id:1,
  title:"pepe",
  description:"juj",
  completed:false
  },
  {
      id:2,
      title:"pepe2",
      description:"juj2",
      completed:false
      }];
      
  

function App() {
  //se toma el array y se pone index0 e index 1
  const [todos,setTodos]=useState(initialTodos);
  const [todoEdit, setTodoEdit] = useState(null)
//todos=sin modificar-> state[0]
//modificar- state[1]
    const todoDelete=(todoId)=>{
        const changedTodos=todos.filter(todo=>todo.id!==todoId);
        setTodos(changedTodos);
    }
    //delete seria ocultame la card-mostrame todos menos el seleccionado
  //boton terminar
    const todoToogleCompleted=(todoId) =>{
     /* const changedTodos=todos.map(todo=>{
        const todoEdit={
          ...todo,
          completed:!todo.completed
        }
        if(todo.id===todoId){
          return todoEdit
        }
        else{
          return todo
        }
      })*/
      const changedTodos=todos.map(todo=>(
        todo.id===todoId
        ? {...todo,completed: !todo.completed}
        : todo
      ))
      setTodos(changedTodos)
    }
/*boton editar*/
  const todoUpdate=(todoEdit)=>{
    const changedTodos=todos.map(todo=>(
    todo.id ===todoEdit.id
    ? todoEdit
    :todo//sino retornar sin editar

   
    ));
  setTodos(changedTodos)
}

/*boton agregar*/

const todoAdd=(todo)=>{

  const newTodo={
      id: Date.now(),
      ...todo,
      completed:false
  }

  const changedTodos=[
    newTodo,
    ...todos
      
  ]
  setTodos(changedTodos);
}

  return (
    <div className="Principal">
      <div><h1>Listado de Tareas</h1></div>
      
      <div className="main">
    <TodoList todos={todos}
      todoDelete={todoDelete}
      todoToogleCompleted={todoToogleCompleted}
      setTodoEdit={setTodoEdit}/>
    </div>
    <div className="aside">
    <TodoForm todoAdd={todoAdd}
    todoEdit={todoEdit}
    todoUpdate={todoUpdate}/>
    </div>
    </div>
  );
}

export default App;
