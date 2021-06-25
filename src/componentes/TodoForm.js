import React, { useState } from 'react';

const TodoForm = ({todoAdd,todoEdit}) => {
    
    const initialFormValues={
        title:'',
        description:''
    }
    const [formValues, setFormValues] = useState(initialFormValues);
    const{title,description}=formValues;
    const [error, setError] = useState(null)/*solucion titulo vacio*/
    const [successMessage, setSuccessMessage] = useState(null)


    /*Name decir que name pertenece al value*/
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
   todoAdd(formValues);
   setFormValues(initialFormValues);
   setSuccessMessage('agregado con exito');

   setTimeout(()=>{
    setSuccessMessage(null);
   },2000);
   
   setError(null); //devolver error a estado inicial
}
//todo tiene title y description


    return (
     <div>
         <h1>Nueva Tarea</h1>
         <form onSubmit={handleSubmit}>
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
             >aceptar</button>
         </form>
         {/*Primer manera de mostrar error y luego otra resumida
             error
             ?(
                    <div className="alert alert-danger mt-2"> {error}</div>
             ):(
                    null
             )*/

             error &&
             (
                    <div className="alert alert-danger mt-2"> {error}</div>
             )
         }
         {
             successMessage &&
             (
                    <div className="alert alert-success mt-2"> {successMessage}</div>
             )
         }
        
     </div>
    );
}
 
export default TodoForm;