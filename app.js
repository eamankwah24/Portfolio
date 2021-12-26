//rewriting server using express
const express=require('express')
const app=express()
const path=require('path')

//set up static and middleware
app.use(express.static('public'))


//get request for homepage and return homepage
app.get('/',(req,res)=>{
  res.status(200).sendFile(path.resolve(__dirname,'./index.html'))

})

app.get('/index.html',(req,res)=>{
  res.status(200).sendFile(path.resolve(__dirname,'./index.html'))

})

app.get('/contact.html',(req,res)=>{
  res.status(200).sendFile(path.resolve(__dirname,'./contact.html'))

})

app.get('/IMG_E1067.JPG',(req,res)=>{
  res.status(200).sendFile(path.resolve(__dirname,'./IMG_E1067.JPG'))

})


//handle 404
app.all('*',(req,res)=>{
  res.status(404).send('<h1>Resource not found</h1>')
})



app.listen(5000,()=>{
  console.log(`server is listening on port 5000`);
}) 
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen