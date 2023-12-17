function main (input) {
    /**
     * Write JavaScript code from here
     */
    const lines=input.split('\n')
    const dataInString=lines[1].split(' ')
    const data=dataInString.map(k=>Number(k))
    // console.log(data)
    data.sort()
    let isConseCutive=true
    for(let i=1;i<data.length;i++){
        if(data[i-1]+1!=data[i]){
            isConseCutive=false;
            break;
        }
    }
    console.log(isConseCutive)
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});