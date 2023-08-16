
//  document.write(Math.PI);     //It gives the value of PI.

//  document.write(Math.round(4.5))     //it the value is  4.4 then the roundfigure will be 4. and if the value is 4.5 or more then the roundfigure will be 5.
 
//  document.write(Math.pow(8,2));       //it gives the value of 8 raise to the power 2.
 
//  document.write(Math.sqrt(25));          //It gives the square root of 23 which is 5.
 
//  document.write(Math.abs(23));          //It will give u absolute value even you give it a negative number like -23 still it wil give you a positive value as 23 only.
 
//  document.write(Math.ceil(5.1));          //Even you put .1 after any digit like 5.1, It will give you 6.
 
//  document.write(Math.floor(5.9));          //It is totally opp of ceil. Even you put .9 after any digit like 5.9, It will give you 5.
 
//  document.write(Math.min(6,7,8,9,0,1,2,3,5));  //It will give you the smallest value (min) from that  numbers.
 
//  document.write(Math.max(-0,1,7,8,4,3,-4,10));   //It will give you the biggest value from that numbers.
 
//  document.write(Math.random());               //It will give you random number everytime whenever you'll reload.





// ES 6 introduced

// document.write(Math.sign(5));           //When the number is positive then the .sign value will be 1. and when the number is negative then the .sign value will be -1.
                                     //when we put name or something then the value will be NaN. and 0 will be 0

// document.write(Math.trunc(2.9));     //It gives the the value which is before the decimal. eg. 2.9 so it will give you 2 only and it delete the numbers which are after decimal.



function otpGenerate(length){
    const nums = '0123456789';
    let otp = '';

    for (let i = 0 ; i < length ; i++){
        const randomIndex = Math.floor(Math.random() * nums.length);
        otp += nums[randomIndex];
    }
    return otp
}

const otplength = 5;
const otpGenerated = otpGenerate(otplength);

document.write(`Generated OTP is ${otpGenerated}`);

