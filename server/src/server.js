import express from 'express'
import Knex from 'knex'
import cors from 'cors'

const configKnex = {
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'spd_vivero'
  }
}
const knex = Knex(configKnex)

const app = express();
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/productos/:cat', async (req, res) => {
  try {
    const { cat } = req.params
    const response = await knex.select('*').from(cat)
    res.status(201).json(response)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un error al cargar los datos en la base de datos.' });
  }
})

app.post('/productos/plantas', async (req, res) => {
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

app.put('/productos/:cat', async (req, res) => {
  try {
    const { cat } = req.params
    const { id_planta, nombre, especie, genero, precio, es_semilla } = req.body;
    const result = await knex(cat).where({ id_planta }).update({
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

app.delete('/productos/:cat/:id', async (req, res) => {
  try {
    const { cat, id } = req.params
    const result = await knex(cat).where({ id_planta: id }).del()
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