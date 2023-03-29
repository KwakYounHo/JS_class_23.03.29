import server from "./module/serverConnect_module.js";
server.listen(2080,(err)=>{if (err) {throw err;}else{console.log('App Server Running Port : 2080')}})