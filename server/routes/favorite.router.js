const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.post('/', rejectUnauthenticated, (req, res) => {
    const product = req.body;

    console.log(req.body)}