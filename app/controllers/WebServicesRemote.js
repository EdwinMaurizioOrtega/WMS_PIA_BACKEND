import myObject from "../config/MicrosoftSQLServer.js";

import {TYPES} from "tedious";

// Buscar Reporteria WMS
export const getPedidoProveedor = async (req, res) => {

    const n_pedido = req.query.n_pedido; //439
    const procedencia = req.query.procedencia; //7001

    const params = [];
    const sql = "SELECT T0.PEDIDO_PROV,\n" +
        "       T0.FEC_INGRESO,\n" +
        "       T0.USUARIO,\n" +
        "       T0.ESTATUS,\n" +
        "       T3.DESCRIPCION AS CLIENTE,\n" +
        "       T1.DESCRIPCION AS PROVEEDOR,\n" +
        "       T2.DESCRIPCION,\n" +
        "       T0.DATO1,\n" +
        "       T0.DATO2,\n" +
        "       T0.DATO3,\n" +
        "       T0.DATO4,\n" +
        "       T0.DATO5,\n" +
        "       T0.FACTURA,\n" +
        "       T0.FACTURA_FAB,\n" +
        "       T0.VAL1,\n" +
        "       T0.VAL2,\n" +
        "       T0.PESO\n" +
        "FROM dbo.TD_CR_PEDIDO_PROV T0\n" +
        "         INNER JOIN dbo.TC_SOCIO_NEGOCIO T1 on T1.SOCIO = T0.SOCIO\n" +
        "         INNER JOIN dbo.TC_CR_PEDIDO_PROV_TIPO T2 ON T2.PEDIDO_PROV_TIPO = T0.PEDIDO_PROV_TIPO\n" +
        "         INNER JOIN dbo.TC_CR_PEDIDO_PROV_TIPO T3 ON T3.PEDIDO_PROV_TIPO = T0.PEDIDO_PROV_TIPO\n" +
        "    AND T0.PEDIDO_PROV = "+n_pedido+"\n" +
        "    AND T0.PROCEDENCIA = "+procedencia+";";
    // For each param do: db.buildParams(params, "name", TYPES.type, variable)
    //myObject.buildParams(params, "number", TYPES.Int, number);
    myObject.query(params, sql, result => {
        console.log(result);
        res.send({
            "data": result
        })
    });

};

// SERIES
export const getDetallePedidoProveedor = async (req, res) => {

    const n_pedido = req.query.n_pedido; //439
    const procedencia = req.query.procedencia; //7001

    const params = [];
    const sql = "SELECT T0.PEDIDO_PROV,\n" +
        "       T0.PROCEDENCIA,\n" +
        "       T0.ARTICULO,\n" +
        "       T0.SERIE,\n" +
        "       T1.DESCRIPCION,\n" +
        "       T1.PESO\n" +
        "FROM TR_CR_PEDIDO_PROV_SERIE T0\n" +
        "         INNER JOIN TC_CR_ARTICULO T1 ON T1.ARTICULO = T0.ARTICULO AND T1.ART_PROCEDE = T0.PROCEDENCIA\n" +
        "    AND T0.PEDIDO_PROV = "+n_pedido+" and T0.PROCEDENCIA = "+procedencia+"";
    // For each param do: db.buildParams(params, "name", TYPES.type, variable)
    //myObject.buildParams(params, "number", TYPES.Int, number);
    myObject.query(params, sql, result => {
        console.log(result);
        res.send({
            "data": result
        })
    });

};

// CANTIDAD
export const getCantidadDetallePedidoProveedor = async (req, res) => {

    const n_pedido = req.query.n_pedido; //439
    const procedencia = req.query.procedencia; //7001

    const params = [];
    const sql = "SELECT T0.PEDIDO_PROV,\n" +
        "       T0.PROCEDENCIA,\n" +
        "       T0.ARTICULO,\n" +
        "       T0.ART_PROCEDE,\n" +
        "       T0.CANTIDAD,\n" +
        "       T0.DATA_DET1,\n" +
        "       T1.DESCRIPCION,\n" +
        "       T1.PESO\n" +
        "FROM WMS_EC.dbo.TD_CR_PEDIDO_PROV_DET T0 INNER JOIN TC_CR_ARTICULO T1 ON T1.ARTICULO = T0.ARTICULO AND T1.ART_PROCEDE = T0.ART_PROCEDE\n" +
        "WHERE PEDIDO_PROV = "+n_pedido+"\n" +
        "  AND PROCEDENCIA = "+procedencia+"\n" +
        "ORDER BY PEDIDO_PROV;";
    // For each param do: db.buildParams(params, "name", TYPES.type, variable)
    //myObject.buildParams(params, "number", TYPES.Int, number);
    myObject.query(params, sql, result => {
        console.log(result);
        res.send({
            "data": result
        })
    });

};

export const getRangoFechaCreacionPedidoProveedor = async (req, res) => {

    // FECHA DE CREACIÓN PEDIDO (FECHA ALTA)
    const fec_inicio = req.query.fec_inicio; //7001
    const fec_fin = req.query.fec_fin; //7001

    const params = [];
    const sql = "SELECT T0.PEDIDO_PROV,\n" +
        "       T0.FEC_INGRESO,\n" +
        "       T0.USUARIO,\n" +
        "       T0.ESTATUS,\n" +
        "       T3.DESCRIPCION AS CLIENTE,\n" +
        "       T1.DESCRIPCION AS PROVEEDOR,\n" +
        "       T2.DESCRIPCION,\n" +
        "       T0.DATO1,\n" +
        "       T0.DATO2,\n" +
        "       T0.DATO3,\n" +
        "       T0.DATO4,\n" +
        "       T0.DATO5,\n" +
        "       T0.FACTURA,\n" +
        "       T0.FACTURA_FAB,\n" +
        "       T0.VAL1,\n" +
        "       T0.VAL2,\n" +
        "       T0.PESO,\n" +
        "       T0.FEC_ALTA,\n" +
        "       T0.FEC_INGRESO\n" +
        "FROM dbo.TD_CR_PEDIDO_PROV T0\n" +
        "         INNER JOIN dbo.TC_SOCIO_NEGOCIO T1 on T1.SOCIO = T0.SOCIO\n" +
        "         INNER JOIN dbo.TC_CR_PEDIDO_PROV_TIPO T2 ON T2.PEDIDO_PROV_TIPO = T0.PEDIDO_PROV_TIPO\n" +
        "         INNER JOIN dbo.TC_CR_PEDIDO_PROV_TIPO T3 ON T3.PEDIDO_PROV_TIPO = T0.PEDIDO_PROV_TIPO\n" +
        "WHERE T0.FEC_ALTA BETWEEN CAST('"+fec_inicio+" 00:00:00' AS datetime )  AND  CAST('"+fec_fin+" 23:59:59' AS datetime)";
    // For each param do: db.buildParams(params, "name", TYPES.type, variable)
    //myObject.buildParams(params, "number", TYPES.Int, number);
    myObject.query(params, sql, result => {
        console.log(result);
        res.send({
            "data": result
        })
    });

};

export const getRangoFechaLlegadaPedidoProveedorBodega = async (req, res) => {

    // FECHA DE LLEGADA (FEC_INGRESO) A BODEGA

    const fec_inicio = req.query.fec_inicio; //7001
    const fec_fin = req.query.fec_fin; //7001

    const params = [];
    const sql = "SELECT T0.PEDIDO_PROV,\n" +
        "       T0.PROCEDENCIA,\n" +
        "       T0.ARTICULO,\n" +
        "       T0.SERIE,\n" +
        "       T1.DESCRIPCION,\n" +
        "       T1.PESO\n" +
        "FROM TR_CR_PEDIDO_PROV_SERIE T0\n" +
        "         INNER JOIN TC_CR_ARTICULO T1 ON T1.ARTICULO = T0.ARTICULO AND T1.ART_PROCEDE = T0.PROCEDENCIA\n" +
        "    AND T0.PEDIDO_PROV = "+n_pedido+" and T0.PROCEDENCIA = "+procedencia+"";
    // For each param do: db.buildParams(params, "name", TYPES.type, variable)
    //myObject.buildParams(params, "number", TYPES.Int, number);
    myObject.query(params, sql, result => {
        console.log(result);
        res.send({
            "data": result
        })
    });

};

