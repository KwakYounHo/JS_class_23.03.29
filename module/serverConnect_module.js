
import fs, { link }        from 'fs';
import http      from 'http';
// import Mrep      from './response_module.js';
// import RF        from './readFileFs_module.js';
import DB        from './DBConnect_module.js'
import {User}    from './parseFormData_module.js'

DB.connect((err)=>{if (err) {throw err;}else {console.log('DB Server Running Port : 3306')}})
export default http.createServer((req,rep)=>{
  // *함수 지정 =======================================
  function Mrep(state, ConType, end, write) {
    rep.writeHead(state, {'Content-Type':ConType});
    if (write) {
      rep.write(write);
    }
    rep.end(end);
  }
  function CUrl(url) {
    return req.url.includes(url);
  }
  // *=================================================
  // *변수 지정 =======================================
  const htmlH = fs.readFileSync('./HTML/htmlHead.txt','utf-8')
  const htmlT = fs.readFileSync('./HTML/htmlTail.txt','utf-8')
  // *=================================================
  if (req.method === 'GET') {
    switch (true) {
      case req.url==='/' :
        Mrep(200, 'text/html', fs.readFileSync('./HTML/index.html','utf-8'))
        break
      case CUrl('index.html') :
        Mrep(200, 'text/html',fs.readFileSync('./HTML/index.html','utf-8'))
        break
      case CUrl('index02.html') :
        Mrep(200, 'text/html', fs.readFileSync('./HTML/index02.html','utf-8'))
        break
    }
  } else if (req.method === 'POST') {
    switch (true) {
      case CUrl('join') :
        let formData='';
        req.on('data',data=>{
          formData += data
        })
        req.on('end', ()=>{
          const UserData = new User(formData)
          console.log(UserData)
          DB.query(`insert into m_info (${UserData._forDBKeys})
          values (${UserData._forDBValues})`, (err,result)=>{
            if (err) {throw err;}else{
              let upPage = `${htmlH}<script>alert('회원가입에 성공하였습니다!'); location.href = './HTML/index.html'</script>${htmlT}`
              Mrep(200, 'text/html', upPage);
            }
          })
        })
        break
      case CUrl('logincheck') :
        let UserData = '';
        req.on('data',data=>{
          UserData += data
        })
    }
  }
})