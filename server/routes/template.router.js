const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/expenses', (req, res) => {
  // Use the pool to query the database
  pool.query('SELECT * FROM expenses;')
    .then(result => {
      // The result contains the fetched data
      const data = result.rows;
      res.status(200).json(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});



/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
