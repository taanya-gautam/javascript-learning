//const fs= require('fs');


const os = require("os");
//let mySystemArch = os.arch();
//console.log(mySystemArch);

//let myCpuInfo = os.cpus();
//console.log(myCpuInfo);

let hostName = os.hostname();
console.log(hostName);

let networkInfo = os.networkInterfaces();
console.log(networkInfo);

console.log(os.release());

console.log(os.totalmem());

console.log(os.uptime());
let uptimeInMin = os.uptime()/3600;
console.log(uptimeInMin);

console.log(os.userInfo());

console.log(os.platform());

console.log(os.type());


