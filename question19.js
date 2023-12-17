function run(){
try{
    return 100;
} finally{
    return 200;
}
}

const output=run();
console.log(output)