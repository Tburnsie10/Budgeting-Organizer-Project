const express = require('express');
const router = express.Router();
const pool = require('../modules/pool'); 
const {
    rejectUnauthenticated
} = require('../modules/authentication-middleware');

//rejectUnauthenticated requires the user to be 
// logged in to access this route.

router.get('/',rejectUnauthenticated, (req, res) => {
    //checks to see if the user is logged in
    console.log(req.isAuthenticated());
    //req.user is the logged in user
    console.log(req.user);
    const queryText = 'SELECT * FROM "expenses";';
    pool.query(queryText).then((results) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500)
    })
});

module.exports = router;
