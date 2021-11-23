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
        SELECT * FROM "Specs";
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
    DELETE FROM "Specs"
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
    const product = req.body;

    console.log(req.body);

    const queryText = `
    INSERT INTO "Specs"(name, price, image_url, description, magsafe, touch_screen, backlit_keyboard,
    fingerprint_sensor, storage_info, memory_info, graphics_card_info, camera, camera_info, display,
    display_info, usbc_port, usbc_port_info, hdmi_port, hdmi_port_info, processor_info)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20);
    `;

    pool.query(queryText, [
        product.name,
        product.price,
        product.image_URL,
        product.Description,
        product.magsafe,
        product.touchScreen,
        product.backlit,
        product.fingerPrint,
        product.storage_TXT,
        product.ram_txt,
        product.gpu_txt,
        product.camera,
        product.camera_txt,
        product.display,
        product.display_txt,
        product.usbc,
        product.usbc_txt,
        product.hdmi,
        product.hdmi_txt,
        product.cpu_txt,
    ])
        .then((result) => {
            console.log(`Post Successful!`);
            res.sendStatus(200);
        }).catch((err) => {
            console.log(`products Post error!`, err);
            res.sendStatus(500);
        })
});

module.exports = router;