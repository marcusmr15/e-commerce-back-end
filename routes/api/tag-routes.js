const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


// find all tags and include its associated Product data
router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    // Error handling for failed tag retrieval
    res.status(500).json({ message: "Tags not found!" });
  }
});


// find a single tag by its `id` and include its associated Product data
router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!tagData) {
      // If tag with ID not found, send 404 status
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }
    // Respond with the tag data
    res.status(200).json(tagData);
  } catch (err) {
    // Error handling for failed tag retrieval
    res.status(500).json({ message: "Tag not found!" });
  }
});


// create a new tag
router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    // Respond with the newly created tag
    res.status(201).json(tagData);
  } catch (err) {
    // Error handling for failed tag creation
    res.status(400).json({ message: "Tag creation failed" });
  }
});


// update a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const updated = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    // If no rows were updated, tag not found with the ID
    !updated[0]
      ? res.status(404).json({ message: "No tag found with this id!" })
      : res.status(200).json(updated);
  } catch (err) {
    // Error handling for failed tag update
    res.status(500).json({ message: "Tag update failed" });
  }
});


// delete on tag by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Tag.destroy({ where: { id: req.params.id } });
    // If no rows were deleted, tag not found with the ID
    !deleted
      ? res.status(404).json({ message: "No tag found with this id!" })
      : res.status(200).json(deleted);
  } catch (err) {
    // Error handling for failed tag deletion
    res.status(500).json({ message: "Tag deletion failed" });
  }
});


module.exports = router;
