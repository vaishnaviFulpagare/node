const fs =require('fs');
const http =require('http');

http.createServer((req,res)=>{
  console.log('server created');
   
  fs.rename('file1.text','file2.text',(err)=>{
      if(err) throw err
      console.log('file rename');
      return res.end();
  })

  //writefile
  // fs.writeFile('file1.text','this is writefile method',(err)=>{
  //   if(err) throw err
  //   console.log('file updated');
  //    return res.end();
  // })

 
  //opening file
  // fs.open('server.js','r',(err)=>{
  //   if(err) throw err
  //   console.log('file opened');
  //    return res.end();
  // })


  //deleting existing file
  // fs.unlink('index.html',(err)=>{
  //    if(err) throw err
  //    console.log('file deleted');
  //    return res.end();
  // })



  //append in file
//   fs.appendFile('index.htm','<h1>This is Appendfile</h1>',(err,data)=>{
//      if(err) throw err
//      console.log('file updated');
//      return res.end();
//   })

//read file
//   fs.readFile('index.html',(err,data)=>{
//      res.writeHead(200, {'content-type':'text/html'});
//      res.write(data);
//      return res.end();
//   })


}).listen(4000)