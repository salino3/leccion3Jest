const router = require('express').Router();


router.get('/', (req, res) => {
    return res.json('All users sent');
});

router.get('/:id', (req, res) => {
 if(req.params.id === "U0001") {
  return res.json("User U0001 Found")
 }
 return res.status(404).json("User not found!");

});

router.post('/', (req, res) => {
    const {username, password} = req.body;
    if(username && password) {
        return res.status(201).json({message: "User created"});
    };
    return res.status(400).json("User not created");
});


module.exports = router;





