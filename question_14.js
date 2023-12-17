function getMessage(){
'hello world'
}
function sayHello(){
    try{
        console.log('checked')
const data=getMessage()//call
console.log(data)

    }catch(error){
        console.log(`an error:${error}`)
    }
}
sayHello();