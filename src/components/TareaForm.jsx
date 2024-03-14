import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {crearTarea} from '../features/tareas/tareaSlice'

const TareaForm = () => {

    const [descripcion, setDescripcion] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(crearTarea({ descripcion }))
        setDescripcion('')
    }


  return (
    <>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <label htmlFor="descripcion">Descripcion</label>
                <input 
                    type="text"
                    name="descripcion"
                    id="descripcion"
                    value={descripcion}
                    onChange={(e)=>setDescripcion(e.target.value)}    
                />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">Crear tarea</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default TareaForm