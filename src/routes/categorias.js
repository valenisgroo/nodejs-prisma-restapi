import { Router } from "express";
import { prismax } from "../db.js";


const router = Router();

router.get('/categorias', async (req, res) =>{
    const categorias = await prismax.categoria.findMany()
    res.json(categorias);
} )

export default router;