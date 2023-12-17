function checkAge(data){
    if(data==={age:18}){
        console.log('you are adult')
    }else if(data=={age:18}){
        console.log('you are still adult')
    }else{
        console.log('you are not adult')
    }
}

checkAge({age:18})