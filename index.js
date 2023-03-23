var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
const parseUrl = new URL(adr);

const host = parseUrl.host;
const path = parseUrl.pathname;
const params = parseUrl.searchParams;
console.log(`Host: ${host}`);
console.log(`Path: ${path}`);
console.log(`GET parameters:`);
// for (let [key, value] of params) {
//     console.log(`\t${key}: ${value}`);
// }
params.forEach((key,value)=>{
    console.log(`\t${key}: ${value}`);
});