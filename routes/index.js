const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/forms-:number(\\d+)', function(req, res){
  res.send('Du mal à piger cette quête, flou ces requêtes');
  console.log(req.params.number); 
  console.log(req.query.level);
});

router.post('/forms-:number(\\d+)', function(req, res){
  res.send(req.body.username);
  console.log(req.body.username);
})


module.exports = router;
