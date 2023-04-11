import express from 'express';

//MongoDB - WMS
import { createRegistroImagen, getListImageByProveedorAndProcedencia } from '../controllers/ValidacionImei.js';


//MicrosoftSQLServer WMS
import {
    getPedidoProveedor,
    getDetallePedidoProveedor,
    getRangoFechaCreacionPedidoProveedor,
    getRangoFechaLlegadaPedidoProveedorBodega,
    getCantidadDetallePedidoProveedor
} from '../controllers/WebServicesRemote.js';
import { IniciarSesion } from '../controllers/user.js'


//HT-BUSINESS HANA DB
import { getSociosNegocio, getCondicionPago } from '../controllers/SociosDeNegocios.js';



const router = express.Router();

//Cargar imagenes en MongoDB
router.post('/cargar_imagenes', createRegistroImagen);
router.get('/lista_imagenes', getListImageByProveedorAndProcedencia);

//Reporteria WMS - PIA
router.get('/reporte_pedido_proveedor', getPedidoProveedor);
router.get('/reporte_detalle_pedido_proveedor', getDetallePedidoProveedor);
router.get('/reporte_cantidad_detalle_pedido_proveedor', getCantidadDetallePedidoProveedor);
router.get('/rango_fecha_creacion_pedido_proveedor', getRangoFechaCreacionPedidoProveedor)
router.get('/rango_fecha_llegada_pedido_proveedor_bodega', getRangoFechaLlegadaPedidoProveedorBodega)



export default router;
