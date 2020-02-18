const express = require('express');

const db = require('../../data/dbConfig')

const router = express.Router();

router.get('/', (req, res) => {
  db.select('*')
    .from('car-dealer')
    .then(cars => {
      res.status(200).json(cars)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({errorMessage: 'failed to get the list of cars'})
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id

  db('car-dealer')
    .where({ id })
    .first()
    .then(car => {
      res.status(200).json(car)
    })
    .catch(error => {
      res.status(500).json({errorMessage: 'failed to get specific car'})
    })
})

router.post('/', (req, res) => {
  db.select('*')
    .from('car-dealer')
      .insert(req.body)
      .then(id => {
        res.status(201).json({successMessage: "Added Car!"})
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({errorMessage: 'failed to add car'})
      })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id

  db('car-dealer')
    .where({ id })
    .del()
    .then(deleted => {
      res.status(200).json({successMessage: "Deleted Car!"})
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({errorMessage: 'failed to delete car'})
    })
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const body = req.body

  db('car-dealer')
    .where({ id })
    .update(body)
    .then(update => {
      res.status(200).json({successMessage: "Editted Car"})
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({errorMessage: 'failed to update car'})
    })
})

module.exports = router