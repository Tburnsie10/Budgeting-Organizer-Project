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
    console.log("income get recieved")
    console.log(req.isAuthenticated());
    //req.user is the logged in user
    console.log(req.user);
    const queryText = 'SELECT * FROM "income" WHERE user_id = $1;';
    pool.query(queryText, [req.user.id]).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500)
    })
});

router.delete('/:id',rejectUnauthenticated, (req, res) => {
    //checks to see if the user is logged in
    console.log("income delete recieved")
    console.log(req.isAuthenticated());
    //req.user is the logged in user
    console.log(req.params);
    const queryText = `DELETE FROM "income" WHERE id='${req.params.id}';`;
    pool.query(queryText);
    res.sendStatus(201);
});


router.post('/', rejectUnauthenticated, (req, res) => {
    console.log("income post recieved")
    console.log(req.isAuthenticated());
    console.log(req.user);
    console.log(req.body);
    const queryText = `INSERT INTO "income"  (income_name, amount, income_date, user_id)
VALUES ('${req.body[0]}', '${req.body[1]}', '${req.body[2]}', '${req.body[3]}');`;
pool.query(queryText)


});

// todo add a post route
module.exports = router;
