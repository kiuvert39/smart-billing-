const express = require('express');
const path = require('path');


const app = express();
const PORT = 8000 || 5000;

app.use(express.static(path.join(__dirname, 'dis/smart')))


app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'dist/smart/browser/index.html'));
})


app.listen(PORT,()=>{
    console.log('listening  at port',PORT)
})
