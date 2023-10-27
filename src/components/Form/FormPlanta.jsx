import "./FormPlanta.css"

const FormPlanta = () => {

    return (

        <form id='formPlanta'>
            <fieldset id="contenedorCargaPlanta">

                <h2>Carga de Datos para Plantas</h2>

                <div id="contenedorInputsPlanta">

                    <div id="categoria">
                        <input type="text" placeholder="Nombre"/>
                    </div>

                    <div id="categoriaSemilla">
                        <label>Semilla</label>
                        <input type="checkbox"/>
                    </div>


                    <div id="categoria">
                        <input type="text" placeholder="Especie"/>
                    </div>

                    <div id="categoria">
                        <input type="text" placeholder="Genero"/>
                    </div>

                    <div id="categoria">
                        <input type="number" placeholder="Cantidad"/>
                    </div>

                    <div id="categoria">
                        <input type="number" placeholder="Precio" />
                    </div>

                    <div id="categoriaImagen">
                        <label for="imagen">Presione AQUI para cargar una imagen</label>
                        <input id="imagen" type="file" display="none"/>
                    </div>

                    <button>CARGAR</button>

                </div>

            </fieldset>
        
        </form>

    )


}

export default FormPlanta;