import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './componentes/TodoList';
import TodoForm from './componentes/TodoForm';


const estrenos=[{
  id:1,
  title:"happiness",
  anio:"2022"
  },
  {
      id:2,
      title:"pelea de maestros",
      anio:"2021"
  }
]
const initialTodos=[{
  id:1,
  title:"task 1",
  description:"Description example 1 ",
  completed:false
  },
  {
      id:2,
      title:"task 2",
      description:"Description example 2",
      completed:false
  },
  {
    id:3,
    title:"task 3",
    description:"Description example 1",
    completed:false
    },
  {
      id:4,
      title:"task 4",
      description:"soycuatro",
      completed:false
  }
  ];
 

function App() {
  


  const [todos,setTodos]=useState(initialTodos);
  const [todoEdit, setTodoEdit] = useState(null)

    const todoDelete=(todoId)=>{
        const changedTodos=todos.filter(todo=>todo.id!==todoId);
        setTodos(changedTodos);
    }
    //delete seria ocultame la card-mostrame todos menos el seleccionado
  //boton terminar
    const todoToogleCompleted=(todoId) =>{

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
    <div >
      <div className="paddinOnTop"><h1>Listado de Tareas</h1></div>
      
      <div >
    <TodoList todos={todos}
      todoDelete={todoDelete}
      todoToogleCompleted={todoToogleCompleted}
      setTodoEdit={setTodoEdit}/>
    </div>
    
    <div >
    <TodoForm todoAdd={todoAdd}
    todoEdit={todoEdit}
    todoUpdate={todoUpdate}/>
    </div>
    
    </div>
  );
}

export default App;
