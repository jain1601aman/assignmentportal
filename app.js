const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const path = require('path')
const multer = require('multer');
fs=require('fs-extra')
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
var assign = multer.diskStorage({
    destination:function(req,file,cb){

            if(file.feildname === "Assign1")
        {cb(null,'public/uploads/1');}
        else if(file.feildname==="Assign2")
        {cb(null,'public/uploads/2');}
        else if(file.feildname==="Assign3")
        {cb(null,'public/uploads/3');}
        else if(file.feildname==="Assign4")
        {cb(null,'public/uploads/4');}
        else if(file.feildname==="Assign5")
        {cb(null,'public/uploads/5');}
      
        
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
var upload = multer({storage:assign});





app.get('/',function(req,res){
    res.render('index');
});
app.get('/assign1',upload.single('Assign1'),function(req,res){
    
});
app.post('/submitted',upload.any(),function(req,res,next){
    res.send('<html>file uploaded</html>')
})
app.listen(7777, () => {
    console.log('listening on 7777')
  })