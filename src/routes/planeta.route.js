'use strict';

import express from 'express';
import * as PlanetasController from '../controller/planeta.controller';
const route = express.Router();

route.get('/', PlanetasController.findAll);
route.get('/:nome', PlanetasController.findByName);
route.get('/:id', PlanetasController.findById);
route.post('/', PlanetasController.create);
route.delete('/:id', PlanetasController.destroy);

module.exports = route;