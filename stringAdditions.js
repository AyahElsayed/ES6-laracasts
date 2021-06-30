let title = 'Red Rising';
if(title.indexOf('R') == 0){
    console.log('R is the first character')
}
if(title.indexOf('Blue') == -1){
    console.log('none exist string => -1')
}
if(title.includes('Red')){
    console.log('includes Red')
}
if(title.startsWith('Red')){
    console.log('yes')
}
if(title.endsWith('ing')){
    console.log('yes')
}
if(title.startsWith('i',5)){
    console.log('yes')
}

let str = 'tro';
console.log(str.repeat(100))