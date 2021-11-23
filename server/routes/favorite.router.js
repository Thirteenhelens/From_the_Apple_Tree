const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    const userID = req.user.id; 

    const queryText = `
        SELECT "Specs"."id", "name", "price", "image_url", "description", "display", "display_info",
        "camera", "camera_info", "processor_info", "storage_info", "memory_info", "graphics_card_info",
        "hdmi_port", "hdmi_port_info", "usbc_port", "usbc_port_info", "magsafe", "backlit_keyboard",
        "touch_screen", "fingerprint_sensor" FROM "Specs"
        JOIN "products_to_user" ON "Specs"."id" = "products_to_user"."product_id"
        JOIN "user" ON "user"."id" = "products_to_user"."user_id"
        WHERE "user"."id" = $1;
        `;

    pool.query(queryText, [userID])
        .then((response) => {
            res.send(response.rows)
        }).catch((err) => {
            console.log(`Error getting favorites ->`, err);
            res.sendStatus(500);
        })
});

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