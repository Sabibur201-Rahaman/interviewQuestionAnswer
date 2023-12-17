/*  function callApi(method){  //outer function when it delete by self the variable of outer callApi function  is still alive for use of inner function  
    return function(url){
console.log(`Fething data from ${url} using ${method} `)
    }
}

const url='http://example.com/api'
callApi('Get')(url)   */

function counterWrapper() { 
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const updateCount = counterWrapper();
updateCount();
updateCount();
updateCount();
