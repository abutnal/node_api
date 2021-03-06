const express = require('express');
const router = express.Router();


const user = [
    { title: "Blog title" },
    { body: "Blog body" }
]


// GET ALL USER RECORDS--------------------------------------------------------------------------------------------------------------------------------------------------
router.get('/api/blog', async (req, res, next) => {
    try {
            
            res.status(200).send(user)
    } catch (error) {
    }
})


// CEARTE NEW USER--------------------------------------------------------------------------------------------------------------------------------------------------
router.post("/api/create-blog", async (req, res)=>{
  try {
    res.status(200).send(req.body)
      
  } catch (error) {
       console.log(error)
  }
})


router.patch("/api/update-blog", async (req, res)=>{
  try {
    res.status(200).send(req.body)
  } catch (error) {
       console.log(error)
  }
})


router.delete("/api/delete-blog", async (req, res)=>{
  try {
    res.status(200).send(req.body)
  } catch (error) {
       console.log(error)
  }

})


module.exports = router
