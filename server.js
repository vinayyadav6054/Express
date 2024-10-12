const express = require('express');
const path = require('path');
const { title } = require('process');
const app = express();
const mainRouter = require('./routes/index')

const PORT = process.env.PORT || 5000;

app.set('view engine','ejs');

// console.log(app.get('view engine'));

//app.set('views', path.resolve(__dirname) + '/templates')


console.log(app.get('views'));

app.use(express.static('public'));

app.use(mainRouter);
//app.use('/en',mainRouter);

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname) + '/index.html')
// })

// app.get('/about',(req,res)=>{
//     res.sendFile(path.resolve(__dirname) + '/about.html')
// })

// app.get('/',(req,res)=>{
//     res.render('index', {
//         title:'My home page'
//     })
// })

// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title: 'My about page'
//     })
// })

// app.get('/download',(req,res)=>{
//     res.download(path.resolve(__dirname) + '/about.html')
    
// })

app.listen(PORT,()=>{
    console.log("Server is running on 3000 port")
});

