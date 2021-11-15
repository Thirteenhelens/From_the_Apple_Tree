const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `
    SELECT * FROM "public.Products";
    `;

    pool.query(queryText)
        .then((response) => {
            res.send(response.rows)
        }).catch((err) => {
            console.log(`Error getting products ->`, err);
            res.sendStatus(500);
        })
});

module.exports = router;