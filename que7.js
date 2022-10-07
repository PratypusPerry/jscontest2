let arr=[{name:'Srin',roll:34},{name:'subhradeep',roll:35},{name:'Srijon',roll:33}];
for(let i=0; i<arr.length;i++)
{
    for(let j=0; j<arr.length-i-1;j++)
    {
        if(arr[j].roll<arr[j+1].roll)
        {
            let temp= arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr);