const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories and its associated Products
  try {
    const categories = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(categories);
  } catch (err) {
    // Handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value and its associated Products
  try {
    const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });
    // If the category is not found, send a 404 status with a custom message
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    // Handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    // Handle errors by sending a 400 status with a custom message
    res.status(400).json({ message: 'Failed to create category' });
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updated = await Category.update(req.body, { where: { id: req.params.id } });
    // If the category is not found, send a 404 status with a custom message
    // Otherwise, return the updated data
    !updated[0] ? res.status(404).json({ message: 'Category not found' }) : res.status(200).json(updated);
  } catch (err) {
    // Handle errors by sending a 500 status with a custom message
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleted = await Category.destroy({ where: { id: req.params.id } });
    // If the category is not found, send a 404 status with a custom message
    // Otherwise, return the deleted data
    !deleted ? res.status(404).json({ message: 'Category not found' }) : res.status(204).json(deleted);
  } catch (err) {
    // Handle errors by sending a 500 status with the error
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;

