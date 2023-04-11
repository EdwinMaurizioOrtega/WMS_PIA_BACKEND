import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/validacionImei.js';

const router = express.Router();

export const getListImageByProveedorAndProcedencia = async (req, res) => {
    const { pedidoProveedor } = req.query;
    const { procedencia } = req.query;

    try {
        const posts = await PostMessage.find({ pedidoProveedor, procedencia });

        res.json({ data: posts });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createRegistroImagen = async (req, res) => {
    const post = req.body;

    const newPostMessage = new PostMessage({ ...post, createdAt: new Date().toISOString() })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;