import './App.css';
import { Formulario } from './componentes/Formulario';
import { useState } from 'react';
import { Tarea } from './componentes/Tarea'
function App() {

  const[tarea, setTarea] = useState('')
  const[listadoTareas,setListadoTareas] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    if (tarea === "") {
      alert('Agrega una tarea!')
      return
      
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
      completado: false
    }

    const temp = [nuevaTarea, ...listadoTareas]
    setListadoTareas(temp)
    setTarea('')

    console.log(listadoTareas)

  }

  function handleChange(e) {
    setTarea(e.target.value)
    console.log(tarea)
  }
//recibe la info del input de editar tarea y lo va a actualizar
  function onActualizarTarea(objEditarTarea){
    const {id, tarea} =objEditarTarea

    const temp = [...listadoTareas]
    //elemento que queremos modificar
    const elemento = temp.find(item => item.id === id)
    elemento.tarea = tarea
    
    setListadoTareas(temp)
  }

  function onBorrarTarea(id) {
    const temp = listadoTareas.filter(item => item.id !== id)
    setListadoTareas(temp)

    
  }

  return (
    <>
    <div className='contenedorPrincipal'>
    <h1>Lista de Tareas</h1>

      <div className='contenedorFormulario'>
      <Formulario 
      tarea={tarea}
      handleSubmit={handleSubmit}
      handleChange={handleChange} /></div>

      <div className='contenedorTareas'>
        <h2>Lista de Tareas</h2>
        <div className='contenedorInfoTareas'>
          {
            listadoTareas.map(tarea=>(
              <Tarea
              key={tarea.id}
              id={tarea.id}
              tarea={tarea}
              onActualizarTarea = {onActualizarTarea}
              onBorrarTarea = {onBorrarTarea}/>
            ))

            
          }

        </div>

      </div>
      </div>
    </>
  );
}

export default App;
