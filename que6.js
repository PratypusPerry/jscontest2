let arr=[];
let size=8;
const insert=(e)=>{
    (arr.length<size)?arr.push(e):console.log('Stack is full');;
}
const del=()=>{
    (arr.length>=size)?console.log('Stack Empty'):arr.pop();
}
insert(1);
insert(2);
insert(3);
console.log(arr);
del();
console.log(arr);