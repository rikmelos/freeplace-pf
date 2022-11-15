const { Router } = require('express');
const pool = require("../db");

const router = Router();

router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM interactions ORDER BY id ASC', (err, res) => {
        if (err) return next(err);
        response.json(res.rows);
    });
});

router.get('/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query('SELECT * FROM interactions WHERE id = $1', [id], (err, res) => {
        if (err) return next(err);
        response.json(res.rows);
    });
});

router.post('/', (request, response, next) => {

    const {name,
        created_date,
        type,
        location,
        capacity,
        clasification } = request.body;

    pool.query(
        'INSERT INTO interactions(name, created_date, type, location, capacity, clasification) VALUES($1, $2, $3, $4, $5,$6)',
        [name, created_date, type, location, capacity, clasification],
        (err, res) => {
            if (err) return next(err);
            response.redirect('/interactions');
        });
});

router.put('/:id', (request, response, next) => {
    const { id } = request.params;

    const { name, created_date, type, location, capacity, clasification } = request.body;

    const keys = ['name', 'created_date', 'type', 'location', 'capacity', 'clasification'];

    const fields = [];

    keys.forEach(key => {
        if (request.body[key]) {
            fields.push(key);
        }
    });

    fields.forEach((field, index) => {
        pool.query(
            `UPDATE interactions SET ${field}=($1) WHERE id=($2)`,
            [request.body[field], id],
            (err, res) => {
                if (err) return next(err);
                if (index === fields.length -1 ) response.redirect('/interactions');
            })
    });
});

router.delete('/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query(
        'DELETE FROM interactions WHERE id=($1)', [id],
        (err, res) => {
            if (err) return next(err);
            response.redirect('/interactions');
        });
});

module.exports = router;