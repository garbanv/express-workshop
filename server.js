var express= require('express');
var app = express();
var port = 3500;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));
var formidable = require('express-formidable');
app.use(formidable());
var fs = require('fs');


app.get("/",(req,res)=>{
    res.send("Yay Alexei!")
})

app.post("/create-post", (req,res)=>{
    const newData= {timestamp:req.body.timestamp, post:req.body.post}
    fs.writeFile('./data/posts/json', newData, function (error) {
        console.log(error)
    });
    
})



app.listen(port, ()=> console.log(`Server listening on port ${port}`));
