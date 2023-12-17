function main (input) {
    /**
     * Write JavaScript code from here
     */
    const validity=isValid(input)
    console.log(validity)
}
function isValid(data){
if(data[0]!='#') return false
if(data.length!=7) return false
for(let i=1;i<data.length;i++){
    if(!((data[i]>='A'&& data[i]<='F')||(data[i]>='0'&& data[i]<='9')||(data[i]>='a'&& data[i]<='f'))){
        return false
    }
}
return true
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});