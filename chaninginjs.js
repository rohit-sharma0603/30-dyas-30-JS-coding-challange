console.time("forTime");
const myObj={
    value:0,
    increment:function (){
        this.value++;
        return this;
    },
    double:function(){
        this.value *=2;
        return this;
    },
    getValue:function(){
        return this.value;
    },
    
};
const result=myObj.increment().increment().double().getValue();
console.log(result);
console.timeEnd("forTime")