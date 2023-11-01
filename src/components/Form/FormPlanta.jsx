import { useEffect, useState } from "react"
import "./FormPlanta.css"
import { getPlantaById, setPlanta, updatePlanta } from "../../services/bbdd"
import { swalError, swalOk } from "../../services/swal"
import { rutas } from "../../consts/consts"
import { useNavigate, useParams } from "react-router-dom"

const FormPlanta = () => {

  const { id } = useParams()
  const defaultValue = {
    nombre: '',
    esSemilla: 0,
    especie: '',
    genero: '',
    precio: '',
  }

  const navigate = useNavigate()

  const [value, setValue] = useState(defaultValue)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValue((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckChange = (e) => {
    console.log(e.target.checked)
    setValue((prev) => ({
      ...prev,
      esSemilla: !!e.target.checked ? 1 : 0
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      console.log("actualizando planta")
      updatePlanta(value, rutas.planta, id)
        .then((res) => {
          swalOk()
          navigate("/")
        })
        .catch(error => swalError(error))
    } else {
      setPlanta(value, rutas.planta)
        .then((res) => {
          swalOk()
          setValue(defaultValue)
          navigate("/")
          console.log(res)
        })
        .catch(error => swalError(error))
    }
  }

  useEffect(() => {
    // si id existe es porque esta cargado un producto para actualizar

    if (id) {
      getPlantaById(id).then((res) => {
        setValue(res[0])
      })
    }
  }, [id, setValue])

  return (

    <form id='formPlanta'>
      <fieldset id="contenedorCargaPlanta">

        <h2>Carga de Datos para Plantas</h2>

        <div id="contenedorInputsPlanta">

          <div id="categoria">
            <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} value={value.nombre} />
          </div>

          <div id="categoriaSemilla">
            <label>Semilla</label>
            <input type="checkbox" name="esSemilla" onChange={handleCheckChange} value={value.esSemilla} />
          </div>


          <div id="categoria">
            <input type="text" name="especie" placeholder="Especie" onChange={handleChange} value={value.especie} />
          </div>

          <div id="categoria">
            <input type="text" name="genero" placeholder="Genero" onChange={handleChange} value={value.genero} />
          </div>

          {/* <div id="categoria">
                        <input type="number" name="cantidad" placeholder="Cantidad" onChange={handleChange} value={value.cantidad}/>
                    </div> */}

          <div id="categoria">
            <input type="number" name="precio" placeholder="Precio" onChange={handleChange} value={value.precio} />
          </div>

          {/* <div id="categoriaImagen">
                        <label htmlFor="imagen">Presione AQUI para cargar una imagen</label>
                        <input id="imagen" name="imagen" type="file" display="none" onChange={handleChange} value={value.imagen}/>
                    </div> */}

          <button onClick={handleSubmit}>CARGAR</button>

        </div>

      </fieldset>

    </form>

  )


}

export default FormPlanta;