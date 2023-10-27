import "./FormProducto.css"

const FormProducto = () => {

    return (

        <form id='formProducto'>
            
            <fieldset id='contenedorCargaProducto'>

                <h2>Carga de Datos para Productos</h2>

                <div id="contenedorInputsProducto">

                    <div class="categoriaProducto">
                        <input type="text" placeholder="Nombre"/>
                    </div>

                    <div class="categoriaProducto">
                        <select name="Producto">
                            <option value="">Tipo de producto</option>
                            <option value="Herramientas">Herramientas</option>
                            <option value="Macetas">Macetas</option>
                            <option value="Accesorios">Accesorios</option>
                        </select>
                    </div>


                    <div class='categoriaCargaDescripcion' >
                        <textarea placeholder="Caracteristicas"/>
                    </div>

                    <div class='categoriaCargaDescripcion' >
                        <textarea type="text" placeholder="Descripcion"/>
                    </div>

                    <div class="categoriaProducto">
                        <input type="number" placeholder="Cantidad" />
                    </div>

                    <div class="categoriaProducto">
                        <input type="number" placeholder="Precio"/>
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

export default FormProducto;