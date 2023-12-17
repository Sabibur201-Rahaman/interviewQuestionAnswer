// how to make passing argument mandatory
function check(){
    throw new Error('parame required')
}

function show(name=check()){
console.log(name)
}
show('dew')