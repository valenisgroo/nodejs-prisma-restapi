import { Router } from "express";
//Importar prsima para conexion a la base de datos
import { prismax } from "../db.js";


const router = Router();


//Operacion base de datos --> Asincrono

//GET ALL
router.get('/productos', async(req, res) =>{
   const productos = await prismax.producto.findMany()
   res.json(productos)
} )

//GET ONE
//req.params.id viene como string por eso hay que pasarlo a string
router.get('/productos/:id', async(req, res) =>{
   const producto = await prismax.producto.findUnique({
    where: {
        id: parseInt(req.params.id)
    }
   })

if(!producto)
    return res.status(404).json({error: "producto no encontrado"})

   res.json(producto)
})

//POST
router.post('/productos', async(req, res) =>{
   const nuevoProducto = await prismax.producto.create(
    {
        data: req.body,
    }
   )
   res.json(nuevoProducto);
})

//DELETE
//req.params.id viene como string por eso hay que pasarlo a string
router.delete('/productos/:id', async(req, res) =>{
   const productoEliminado = await prismax.producto.delete({
    where: {
        id: parseInt(req.params.id)
    }
   })

if(!productoEliminado)
    return res.status(404).json({error: "producto no encontrado"})

   res.json(productoEliminado)
})


export default router;