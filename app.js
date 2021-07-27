const http=require('http')
const {readFileSync}=require('fs');

//get all files
const homePage=readFileSync('./index.html')
const contactPage=readFileSync('./contact.html')
const homeStyle=readFileSync('./style.css')
const homeImage=readFileSync('./images/IMG_E1067.JPG')
const instaImg=readFileSync('./images/insta3.png')

const server=http.createServer((req,res)=>{
  const url=req.url;
    //returning home page
  if ((url==='/') || (url==='/index.html')){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homePage)
    res.end()      
  }
  //returns contact page
  else if(url==='/contact.html'){
      res.writeHead(200,{'content-type':'text/html'})
      res.write(contactPage)
      res.end()
  }
  //returns styles sheet to browser
  else if(url==='/style.css'){
    res.writeHead(200,{'content-type':'text/css'})
    res.write(homeStyle)
    res.end() 
  }
  //returns image to browser
  else if(url==='/images/IMG_E1067.JPG'){
    res.writeHead(200,{'content-type':'image/jpg'})
    res.write(homeImage)
    res.end()
  }
  //returns instagram icon
  else if(url==='/images/insta3.png'){
    res.writeHead(200,{'content-type':'image/png'})
    res.write(instaImg)
    res.end
  }
  //404 if url is not found
  else{
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)