const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
	
app.get("/find",(req,res)=>{
		let num = req.query.number;
		let n = parseFloat(num);
		let r = n**0.5;
		let a = "square root= "+r.toFixed(2);
		res.json({"msg":a});
		
	
});

app.listen(9000,()=>{console.log("ready@9000");});