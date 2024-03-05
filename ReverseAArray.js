// reversing array using a prototype//

const arr=[1,2,3,4,5,6,7,8,9];

Array.prototype.myReverse=
function(){
    let newArray=[];
    for(let i= this.length-1;i>=0;i--){
        newArray.push(this[i]);
    }
    return newArray;
   
}

console.log(arr.myReverse());