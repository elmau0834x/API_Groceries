import express from "express"
const app = express();
const port = 3000;

app.get('/:number/:exp',(req, res)=>{
    // res.send("Peticion recibida desde Mauricio Rosales")
    let n = req.params.number
    let exp = req.params.exp
    const result = Math.pow(n, exp)
    res.json({
        "result": result
    })
});
app.listen(port, ()=>{
    `Server listening on port ${port}`
});
