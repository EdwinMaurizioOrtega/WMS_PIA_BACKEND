import express from 'express';
import mongoose from 'mongoose';

import cors from 'cors';

import crmRoutes from './app/routes/crm.routes.js';
import bodyParser from "body-parser";

const app = express();

var corsOptions = {
  origin: "*"
};

// aumentar el límite de tamaño de carga máxima a 50MB
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


//API Endpoint DB MongoDB
app.use('/api/mogo-db-wms', crmRoutes);
//API Endpoint DB MicrosoftSQLServer
app.use('/api/wms', crmRoutes);

app.get('/', (req, res) => {
  res.send('APP IS RUNNING MOVILCELISTIC.');
})

//Guardar las imagenes.
//const CONNECTION_URL = 'mongodb://localhost:27017/memories';
const CONNECTION_URL = 'mongodb+srv://hipertronics:81A00ydsLOOGibyK@cluster0.a70yomk.mongodb.net/wms_pia?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 80;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);