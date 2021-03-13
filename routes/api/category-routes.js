const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
    // find all categories
    // be sure to include its associated Products
    Category.findAll({
        include: [Product], // associates Products
    }).then((category) => {
        res.json(category);
        res.status(200);
    });
});

router.get("/:id", (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    Category.findOne({
        where: {
            id: req.params.id, // grabs id of item
        },
        include: [Product], // associates prodcuts
    }).then((category) => {
        res.json(category);
        res.status(200);
    });
});

router.post("/", (req, res) => {
    // create a new category // creates request.body, return status 200 for okay
    Category.create(req.body).then((category) => {
        res.status(200);
        res.json(category);
    });
});

// updates where the id is concerned
router.put("/:id", (req, res) => {
    // update a category by its `id` value
    Category.update(req.body, {
        where: {
            id: req.params.id,
        },
    }).then((category) => {
        // returns status 200
        res.status(200);
        res.json(category);
    });
});

// delets where the id is concerned
router.delete("/:id", (req, res) => {
    // delete a category by its `id` value
    Category.destroy({
        where: {
            id: req.params.id,
        },
    }).then((category) => {
        // returns status 200 for ok
        res.status(200);
        res.json(category);
    });
});

module.exports = router;
