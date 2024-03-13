function generateOtp(length){
    let OTP="";
    for(let i=0;i<length; i++){
        let randomNumber=Math.floor(Math.random()*10);
        OTP=OTP+randomNumber.toString();
    }
    return OTP;
}
console.log(generateOtp(5));   