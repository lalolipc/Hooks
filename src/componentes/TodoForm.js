import React, { useState, useEffect } from 'react';

const TodoForm = ({todoAdd,todoEdit,todoUpdate}) => {
    
    const initialFormValues={
        title:'',
        description:''
    }
    const [formValues, setFormValues] = useState(initialFormValues);
    const{title,description}=formValues;
    const [error, setError] = useState(null)/*error titulo vacio*/
    const [successMessage, setSuccessMessage] = useState(null)/*exito campo agregado*/

useEffect(() => {
        if(todoEdit){
        setFormValues(todoEdit);
    }
}, [todoEdit])

    /* Editar Name decir que name pertenece al value*/
const handleInputChange=(e)=>{


const changeFormValues={
    ...formValues,
    [e.target.name]:e.target.value
    //name recibe value
}
setFormValues(changeFormValues)
}

const handleSubmit=(e)=>{
    //evitar q se recarge la pagina cuando precionamos boton:
    e.preventDefault();

    if(title.trim()===''){
        setError('indicar titulo');
        return;
    }
    if(description.trim()===''){
        setError('indicar descripción');
        return;
    }
    //enviar los datos
if(todoEdit){// que titulo no sea null
    todoUpdate(formValues)
}
else{
    todoAdd(formValues);
}
   
   setFormValues(initialFormValues);
   setSuccessMessage('agregado con exito');

   setTimeout(()=>{
    setSuccessMessage(null);
   },1400);
   
   setError(null); //devolver error a estado inicial
}
//todo tiene title y description


    return (
     <div class="gallery" >
        
         <form class="item-b" onSubmit={handleSubmit}>
         <h1>{todoEdit ? 'Editar Tarea' : 'Nueva tarea'}</h1>
          {/*Primer manera de mostrar error y luego otra resumida
             error
             ?(
                    <div className="alert alert-danger mt-2"> {error}</div>
             ):(
                    null
             )*/

             error &&
             (
                    <div className="s alert alert-danger mt-2"> {error}</div>
             )
         }
         {
             successMessage &&
             (
                    <div className="s alert alert-success mt-2"> {successMessage}</div>
             )
         }
             <input
             type="text"
             placeholder="titulo"
             className="form-control"
                 value={title}
                 name="title"
                 onChange={handleInputChange}
             
             />
             <textarea
                placeholder="Descripción"
                className="form-control mt-2"
                value={description}
                name="description"
                onChange={handleInputChange}
             />

             <button
             className="btn btn-primary btn-block mt-2"
             >{todoEdit ? 'Actualizar tarea': 'agregar tarea'}</button>
         </form>
        
        
     </div>
    );
}
 
export default TodoForm;