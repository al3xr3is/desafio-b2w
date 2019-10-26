'use strict';

import { planetas } from '../models';

export function findAll(req, res) {
  planetas.findAll().then((planetas) => {
      res.json(planetas);
    }).catch((err) => {
      res.status(400).send(err);
    })
  }

export function findById(req, res,) {
  planetas.findOne({
    where: {
      id: req.params.id
    }
  }).then((planeta) => {
    res.json(planeta);
  }).catch((err) => {
    res.status(400).send(err);
  })
}

export function findByName(req, res,) {
  planetas.findOne({
    where: {
      nome: req.params.nome
    }
  }).then((planeta) => {
    res.json(planeta);
  }).catch((err) => {
    res.status(400).send(err);
  })
}

export function create(req, res) {
  planetas.create({
    nome: req.body.nome,
    clima: req.body.clima,
    terreno: req.body.terreno
  }).then((planeta) => {
    res.json(planeta);
  }).catch((err) => {
    res.status(400).send(err);
  })
}

export function destroy(req, res) {
  planetas.destroy({
    where: {
      id: req.params.id
    }
  }).then((resultado) => {
    res.status(200).json({status: "Planeta destruído, o mal está se espalhando!"})
  }).catch((err) => {
    res.status(500).json({status: "A arma falhou, o planeta não foi destruído"})
  })
}