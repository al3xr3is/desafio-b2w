'use strict';

import express from 'express';
const app = express();
import planetaRoute from '../routes/planeta.route';

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Configuracao do CORS ficará comentada dado o carater de teste da api.
/* app.use((req, res, next) => { 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}) */

app.get('/', (req, res) => {
  res.redirect('/planeta');
});

app.use('/planeta', planetaRoute);

app.listen(3333, (req, res) => {
  console.log('server online'); 
})