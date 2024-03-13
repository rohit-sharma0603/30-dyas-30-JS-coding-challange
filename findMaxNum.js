function findMAxNUm(args){
    let maxNum =0;
    for (num of args){
        if(num>maxNum){
            maxNum=num
        }
    }
    return maxNum

}
  console.log(findMAxNUm([1,2,55,67,88]))

