function delayFn(time){
  return new Promise((resolve) => setTimeout(resolve , time))
}
console.log("this is my promise");
delayFn(2000).then(()=>
console.log("After 2 sec promise resolved"));
console.log("end");



function divideFn(num1 , num2){
    return new Promise((resolve , reject) => {
        if(num2 == 0){
            reject('can not divide by 0');
        }
        else{
            resolve(num1/num2);
        }
    })
}

divideFn(10,0).then(result =>console.log(result, "this is the result"))
.catch(error => console.log(error, "error"))