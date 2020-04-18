const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const path = require('path')
const multer = require('multer');
var port = process.env.PORT || 7777;
fs=require('fs-extra')
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
var assign = multer.diskStorage({
    destination:function(req,file,cb,res){

            if(file.fieldname === "Assign1")
        {cb(null,'public/uploads/1');}
        else if(file.fieldname==="Assign2")
        {cb(null,'public/uploads/2');}
        else if(file.fieldname==="Assign3")
        {cb(null,'public/uploads/3');}
        else if(file.fieldname==="Assign4")
        {cb(null,'public/uploads/4');}
        else if(file.fieldname==="Assign5")
        {cb(null,'public/uploads/5');}
      
        
    },
    filename: function(req,file,cb,res){
        cb(null,file.originalname)
    }
})
var upload = multer({storage:assign,fileFilter: (req, file, cb,res) => {
    if (file.mimetype == "application/pdf") {
      cb(null, true);
    } else {
        
      cb(null, false);
      return cb(new Error('Only .pdf format allowed!'));
      
      
    }
  }});





app.get('/',function(req,res){
    res.render('index');
});
app.post('/submitted',upload.any(),function(req,res,next){

    res.render('submit')
})
app.listen(port, () => {
    console.log('listening on 7777')
  })
