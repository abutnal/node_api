const express = require('express');
const router = express.Router();


const user = [
    { name: "Jyo" },
    { name: "Arry" }
]


// GET ALL USER RECORDS--------------------------------------------------------------------------------------------------------------------------------------------------
router.get('/api/users', async (req, res, next) => {
    try {
            res.status(200).send(user)
    } catch (error) {
    }
})


// CEARTE NEW USER--------------------------------------------------------------------------------------------------------------------------------------------------
router.post("/api/create-user", async (req, res)=>{
  try {
    res.status(200).send(req.body)
      
  } catch (error) {
       console.log(error)
  }
})


router.patch("/api/update-user", async (req, res)=>{
  try {
    res.status(200).send(req.body)
  } catch (error) {
       console.log(error)
  }
})


router.delete("/api/delete-user", async (req, res)=>{
  try {
    res.status(200).send(req.body)
  } catch (error) {
       console.log(error)
  }

})


module.exports = router
