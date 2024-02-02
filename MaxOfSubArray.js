// // find the Maximum of the sub array 
//    using Kadane's Algorithim  

const arr=[-1,4-6,8]
function  maxSubArray(){
let currentSum=arr[0];
let maxSum=arr[0];
 for(let i=1; i<arr.length;i++){
    if(arr[i]>currentSum+arr[i]){
        currentSum=arr[i]
    }else{
        currentSum=currentSum+arr[i]

    }if(currentSum>maxSum){
        maxSum=currentSum;
    }
 }
     return maxSum;
}
  console.log(maxSubArray());