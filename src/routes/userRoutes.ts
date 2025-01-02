import express from "express"

const router = express.Router();

router.post("/signin",(req,res)=>{
    res.json("signed up");
})

router.post("/singup",(req,res)=>{
    res.json("Registered");
})

export default router;