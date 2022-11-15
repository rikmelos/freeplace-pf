const { Router } = require('express');
const pool = require("../db");

const router = Router();

router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM profile ORDER BY id ASC', (err, res) => {
        if (err) return next(err);
        response.json(res.rows);
    });
});

router.get('/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query('SELECT * FROM profile WHERE id = $1', [id], (err, res) => {
        if (err) return next(err);
        response.json(res.rows);
    });
});

router.post('/', (request, response, next) => {

    const {username,
        email,
        status,
        full_name,
        profile_pic } = request.body;

    pool.query(
        'INSERT INTO profile(username, email, status, full_name, profile_pic) VALUES($1, $2, $3, $4, $5)',
        [username, email, status, full_name, profile_pic],
        (err, res) => {
            if (err) return next(err);
            response.redirect('/profile');
        });
});

router.put('/:id', (request, response, next) => {
    const { id } = request.params;

    const { username, email, status, full_name, profile_pic} = request.body;

    const keys = ['username', 'email', 'status', 'full_name', 'profile_pic'];

    const fields = [];

    keys.forEach(key => {
        if (request.body[key]) {
            fields.push(key);
        }
    });

    fields.forEach((field, index) => {
        pool.query(
            `UPDATE profile SET ${field}=($1) WHERE id=($2)`,
            [request.body[field], id],
            (err, res) => {
                if (err) return next(err);
                if (index === fields.length -1 ) response.redirect('/profile');
            })
    });
});

router.delete('/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query(
        'DELETE FROM profile WHERE id=($1)', [id],
        (err, res) => {
            if (err) return next(err);
            response.redirect('/profile');
        });
});

module.exports = router;