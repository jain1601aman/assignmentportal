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
        var s = file.originalname;
        if(s.includes("17I6") || s.includes("17i6") || s.includes("18I6") || s.includes("18i6") || s.includes("16I6") || s.includes("16i6"))
        {
            var st = s.toLowerCase();           
            if(st.includes("assignment 1"))
            {
                var pt = 'public/uploads/1/' + file.originalname
                fs.stat(pt,function(err,stat){
                    if(err === null) {
                    cb(null,'public/uploads/trash');
                    } 
                    else if(err.code === 'ENOENT') {
                    cb(null,'public/uploads/1');
                    } 
                    else{
                    cb(null,'public/uploads/trash');
                    }
                });
            }
            else if(st.includes("assignment 2"))
            {
                var pt = 'public/uploads/2/' + file.originalname
                fs.stat(pt,function(err,stat){
                    if(err === null) {
                    cb(null,'public/uploads/trash');
                    } 
                    else if(err.code === 'ENOENT') {
                    cb(null,'public/uploads/2');
                    } 
                    else{
                    cb(null,'public/uploads/trash');
                    }
                });
            }
            else if(st.includes("assignment 3"))
            {
                var pt = 'public/uploads/3/' + file.originalname
                fs.stat(pt,function(err,stat){
                    if(err === null) {
                    cb(null,'public/uploads/trash');
                    } 
                    else if(err.code === 'ENOENT') {
                    cb(null,'public/uploads/3');
                    } 
                    else{
                    cb(null,'public/uploads/trash');
                    }
                });
            }
            else if(st.includes("assignment 4"))
            {
                var pt = 'public/uploads/4/' + file.originalname
                fs.stat(pt,function(err,stat){
                    if(err === null) {
                    cb(null,'public/uploads/trash');
                    } 
                    else if(err.code === 'ENOENT') {
                    cb(null,'public/uploads/4');
                    } 
                    else{
                    cb(null,'public/uploads/trash');
                    }
                });
            }
            else if(st.includes("assignment 5"))
            {
                var pt = 'public/uploads/2/' + file.originalname
                fs.stat(pt,function(err,stat){
                    if(err === null) {
                    cb(null,'public/uploads/trash');
                    } 
                    else if(err.code === 'ENOENT') {
                    cb(null,'public/uploads/5');
                    } 
                    else{
                    cb(null,'public/uploads/trash');
                    }
                });
            }
            
        }
        else
        {
            cb(null,'public/uploads/trash');
        }
        
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
      return cb((new Error('Only .pdf format allowed!')).message);
      
      
    }
  }});





app.get('/',function(req,res){
    res.render('index');
});
app.post('/submitted',upload.array('Assign',5),function(req,res,next){

    res.render('submit')
})
app.listen(port, () => {
    console.log('listening on 7777')
  })
