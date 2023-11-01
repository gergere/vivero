import express from 'express'
import Knex from 'knex'
import cors from 'cors'

const configKnex = {
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'alejandro1234',
    database: 'spd_vivero'
  }
}
const knex = Knex(configKnex)

const app = express();
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/categoria/:cat', async (req, res) => {

  const { cat } = req.params

  try {
    let response;
    if (cat == "plantas" || cat == "semillas") {
      response = cat == "plantas"
        ? (await knex.select('*').from("planta").where('es_semilla', 0))
        : (await knex.select('*').from("planta").where('es_semilla', 1))
    } else {
      response = await knex.select('*').from("producto").where('tipo_producto', cat)
    }
    res.status(201).json(response)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al cargar los datos en la base de datos.' });
  }
})

////////////////GET/////////////////

app.get('/productos/:id', async (req, res) => {
  try {
    
    const { id } = req.params
    console.log(id)
    const result = await knex("producto").where('id_producto', id)
    
    if (result) {
      res.status(201).json({ ...result });
    } else {
      res.status(404).json({ error: 'Dato no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al cargar los datos en la base de datos.' });
  }
})

app.get('/planta/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await knex("planta").where('id_planta', id)
    if (result) {
      res.status(201).json({ ...result });
    } else {
      res.status(404).json({ error: 'Dato no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al cargar los datos en la base de datos.' });
  }
})


////////////////POST////////////////
app.post('/planta', async (req, res) => {
  try {
    const { nombre, especie, genero, precio, esSemilla } = req.body;
    const nuevoRegistro = await knex('planta').insert({
      nombre,
      especie,
      genero,
      precio: parseFloat(precio),
      es_semilla: parseInt(esSemilla)
    });
    res.status(201).json({ mensaje: 'Datos cargados correctamente', nuevoRegistro });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al cargar los datos en la base de datos.' });
  }
})

app.post('/productos', async (req, res) => {
  try {
    const {
      nombre,
      producto,
      caracteristicas,
      descripcion,
      cantidad,
      precio
    } = req.body;
    const nuevoRegistro = await knex('producto').insert({
      nombre_producto: nombre,
      tipo_producto: producto,
      caracteristicas,
      descripcion,
      precio_producto: parseFloat(precio),
    });
    res.status(201).json({ mensaje: 'Datos cargados correctamente', nuevoRegistro });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al cargar los datos en la base de datos.' });
  }
})

////////////////PUT////////////////
app.put('/planta/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, especie, genero, precio, es_semilla } = req.body;
    const result = await knex("planta").where('id_planta', id).update({
      nombre,
      especie,
      genero,
      precio: parseFloat(precio),
      es_semilla: parseInt(es_semilla)
    });
    if (result > 0) {
      res.status(201).json({ mensaje: 'Datos actualizados correctamente' });
    } else {
      res.status(404).json({ error: 'Dato no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al cargar los datos en la base de datos.' });
  }
})

app.put('/productos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const {
      nombre,
      producto,
      caracteristicas,
      descripcion,
      cantidad,
      precio
    } = req.body;
    const result = await knex("producto").where('id_producto', id).update({
      nombre_producto: nombre,
      tipo_producto: producto,
      caracteristicas,
      descripcion,
      precio_producto: parseFloat(precio),
    });
    if (result > 0) {
      res.status(201).json({ mensaje: 'Datos actualizados correctamente' });
    } else {
      res.status(404).json({ error: 'Dato no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al cargar los datos en la base de datos.' });
  }
})

////////////////DELETE////////////////
app.delete('/productos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await knex("producto").where('id_planta', id).del()
    if (result > 0) {
      res.json({ mensaje: 'Registro eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Registro no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al cargar los datos en la base de datos.' });
  }
})

app.delete('/planta/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await knex("planta").where('id_producto', id).del()
    if (result > 0) {
      res.json({ mensaje: 'Registro eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Registro no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al cargar los datos en la base de datos.' });
  }
})

const server = app.listen(8080, () => console.log('Server ready on 8080'))
server.on('error', (e) => console.log('Error en servidor: ', e))