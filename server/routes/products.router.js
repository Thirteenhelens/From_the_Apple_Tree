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

router.post('/', rejectUnauthenticated, (req, res) => {
    const product = req.id;

    const queryText = `

    RETURNING "id"
    `;

    pool.query(queryText, [
        product.name,
        product.price,
        product.Description,
        product.image_URL,
        // product.magsafe,
        // product.touchScreen,
        // product.backlit,
        // product.fingerPrint,
        // product.storage_TXT,
        // product.ram_txt,
        // product.gpu_txt,
        // product.camera,
        // product.camera_txt,
        // product.display,
        // product.display_txt,
        // product.usbc,
        // product.usbc_txt,
        // product.hdmi,
        // product.hdmi_txt,
        // product.cpu_txt,
    ])
        .then((result) => {
            console.log(`Delete Successful!`);
            res.sendStatus(200);
        }).catch((err) => {
            console.log(`/products delete error!`, err);
            res.sendStatus(500);
        })
});

module.exports = router;