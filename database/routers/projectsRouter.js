const express = require('express');
const knex = require('knex');

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: './data/projects.db3'
    },
    useNullAsDefault: true
});

const router = express.Router();

router.get('/', (req, res) => {
    db('projects')
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve projects' });
        });
});

router.post('/', (req, res) => {
    const projectData = req.body;
    db('projects').insert(projectData)
        .then(ids => {
            db('projects').where({ id: ids[0] })
                .then(newProject => {
                    res.status(201).json(newProject);
                });
        })
        .catch(err => {
            console.log('POST error', err);
            res.status(500).json({ message: "Failed to store data" });
        });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    // validate the data
    db("projects")
        .where({ id }) // ALWAYS FILTER ON UPDATE (AND DELETE)
        .update(changes)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: `${count} record(s) updated` });
            } else {
                res.status(404).json({ message: "Project not found" });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                errorMessage: "Error updating the project"
            });
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db('projects')
        .where({ id: id })
        .del()
        .then(count => {
            res.status(200).json({ message: `${count} record(s) removed` });
        })
        .catch(err => {
            console.log('DELETE error', err);
            res.status(500).json({ message: "Failed to delete data" });
        });
});

module.exports = router;