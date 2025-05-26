//REST API --> Responde y recibe JSON
import express from 'express';
//Node JS pide que todas las importaciones que no sean modulos de terceros tengan la extensión .js
import categorias from './routes/categorias.js'
import productos from './routes/productos.js'


const app = express();

const PORT = 3000;

app.use(express.json())

app.use('/api',productos)
app.use('/api',categorias)


app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
})
