import { useState } from "react"

export function Tarea(props) {


    const { tarea, onActualizarTarea, onBorrarTarea } = props

    const [editando, setEditando] =useState(false)

    const [estaCompletada, setEstacompletada] =useState(false)

    function ModoEdicionActivado(){

        const [valor, setValor] = useState(tarea.tarea)

        function handleChange(e) {
            const text = e.target.value
            setValor(text)
        }

        function handleClick(e) {
            e.preventDefault()

            onActualizarTarea(
                {
                    id: tarea.id,
                    tarea: valor,
                    completado: false
                }
            )
            setEditando(false)
        }
        return(
            <>
            <input
            type="text"
            onChange={handleChange}
            value={valor} 
            
            />
            <button className="btn"
            onClick={handleClick}>
                GUARDAR
            </button>
            <button className="btn btnBorrar"
            onClick={() => onBorrarTarea(tarea.id)}
            >
                BORRAR
            </button>

            </>
        )
    }
    function ModoEdicionDesactivado(){
        return(
            <>
             <span
             className={estaCompletada ? "todoTarea spanSubrayada" : "todoTarea"   }
             onClick={() => setEstacompletada(!estaCompletada) }>
                {tarea.tarea}</span>
            <button
                className="btn btnEditar"
                onClick={() => setEditando(true)}>

                Act
            </button>
            <button
                className="btn btnEliminar"
                onClick={() => onBorrarTarea(tarea.id)}
                >
                Elim
            </button>
            </>
        )
    }

    return (
        <>
            <div className="contenedorTarea" id={tarea.id}>
            {
                editando
                ? <ModoEdicionActivado/>
                : <ModoEdicionDesactivado/>
            }
           </div>
        </>
    )

}