//first task

let x = [0,2,undefined,null,73,70,'str',63,true,85];
function sortArr(arr){
    var odd = 0;
    var even = 0;
    for (let i = 0; i <= x.length; i++){
        if(x[i] != 0 && x[i] % 2 == 0 && isNaN(x[i]) == false){
            odd++;
        } else if(x[i] != 0 && x[i] % 2 != 0 && isNaN(x[i]) == false){ 
            even++;
        };
       
    }
    console.log(`odd:${odd}; even: ${even};`);
}
sortArr(x);

//second task

const simpleInt = function(n) {
if(n > 1000 || n <= 0 ){
    return false
}
  else if (n===1)  {
    return false;
  }
  else if(n === 2)  {
    return true;
  } else   {
    for(var x = 2; x < n; x++)  {
      if(n % x === 0) {
        return false;
      }
    }
    return true;  
  }
}

//third task

function sum(a) {
   return  (b) => console.log(a + b);
} 

sum(2)(3);


//fourth task
function startCount(a,b){

    const intervalId = setInterval(function (a, b) {

        for( let i = a; i <= b; i++){
           console.log(i);
        }
     
     }, 2000, a,  b); 
}
startCount(3,7);
 

//fifth task 

const exponentiation = (a,b) => Math.pow(a,b);
exponentiation(2,4);