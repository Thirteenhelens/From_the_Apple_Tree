const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// If statement for clearance level, use req.user

// if (req.user.clearance_level < 2){
//     res.send(403)
//     return
// }

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

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    let productId = req.params.id;

    const queryText = `
    DELETE FROM "public.Products"
    WHERE "id" = $1
  `;

    pool.query(queryText, [productId])
        .then((result) => {
            console.log(`Delete Successful!`);
            res.sendStatus(200);
        }).catch((err) => {
            console.log(`/products delete error!`, err);
            res.sendStatus(500);
        })

});

module.exports = router;