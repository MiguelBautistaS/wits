const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const courseObject = require('../modelObjects/Course');

function validateQuery(query) {
  for(let [key] of Object.entries(query)) {
    if(!(key in courseObject)) {
      return false;
    }
  }
  return true;
}

router.get('/', async (req, res) => {
  const filters = req.query;
  if (!validateQuery(filters)) {
    return res.status(400).send("Wrong parameters"); 
  }
  try {
    const courses = await Course.findAll({
      where: filters
    });
    res.send(courses);
  } catch (err) {
    res.status(500).send(err.message); 
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const courses = await Course.findAll({
      where: {
        id:id
      }
    });
    res.send(courses);
  } catch (err) {
    res.status(500).send(err.message); 
  }
});


router.post('/', async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const createdCourse = await Course.create(data);
    res.send(createdCourse);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const updatedCourse = await Course.update(data, {
      where: {
        id: id
      }
    });
    res.send(updatedCourse);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedCourse = await Course.destroy({
      where: {
        id: id
      }
    });
    console.log(deletedCourse);
    res.send(deletedCourse.toString());
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;