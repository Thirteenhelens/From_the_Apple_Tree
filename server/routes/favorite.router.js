const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.post('/', rejectUnauthenticated, (req, res) => {
    const userID = req.user.id;
    const productID = req.body.id;

    const queryText = `
    INSERT INTO "products_to_user" (user_id, product_id)
    VALUES ($1, $2);
    `;

    pool.query(queryText, [userID, productID])
        .then((response) => {
            console.log(`Post Successful!`);
            res.sendStatus(200);
        }).catch((err) => {
            console.log(`Favorites Post error!`, err);
            res.sendStatus(500);
        })
})

module.exports = router;