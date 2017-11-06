const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res)=>{
  res.send('Page accueil')
})

router.get('/session-in', (req, res)=>{
  req.session.song = "be bop a lula";
})

router.get('/session-out',(req, res)=>{
  res.send(req.session.song);
})

router.get('/forms-:number(\\d+)', function(req, res){
  res.send('Du mal à piger cette quête, flou ces requêtes');
  console.log(req.params.number); 
  console.log(req.query.level);
});

router.post('/forms-:number(\\d+)', function(req, res){
  res.send(req.body.username);
  console.log(req.body.username);
})

/*All verbs for page middleware. */
router.use('/superMiddleware', function(req, res, next){
  console.log('hello middleware');
  next();
}, function (req, res) {
  res.send("Hello world !");
});


module.exports = router;
