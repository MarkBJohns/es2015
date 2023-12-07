const varsP=document.querySelector('#vars p');
const varsBtn=document.querySelector('#vars button');
const varsAnswer=document.querySelector('#vars .answer');
var array=[1,2,3,4,5];
var array=[2,3,4,5,6];
var array=[3,4,5,6,7];
varsP.innerText=`var array = [1,2,3,4,5];
var array = [2,3,4,5,6];
var array = [3,4,5,6,7];`;
varsBtn.addEventListener('click',function(){
    varsAnswer.value=JSON.stringify(array);
})
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const letP=document.querySelector('#let p');
let letArray=[1,2,3,4,5];
letP.innerText=JSON.stringify(letArray);
const reassignBtn=document.querySelectorAll('#let button')[0];
let count=0;
function reassign(){
    count++;
    letArray=letArray.map(function(val){
        return val*2;
    });
    letP.innerText=JSON.stringify(letArray);
}
reassignBtn.addEventListener('click',reassign);
const mutateBtn=document.querySelectorAll('#let button')[1];
function mutate(){
    const newElement=(letArray.length+1)*Math.pow(2,count);
    letArray.push(newElement);
    letP.innerText=JSON.stringify(letArray);
}
mutateBtn.addEventListener('click',mutate);
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const numberArray=[1,2,3,4,5,6,7,8,9,10];
const constP=document.querySelector('#const p');
constP.innerText=JSON.stringify(numberArray);
const mathNum=document.querySelectorAll('#const input')[0];
const addAnswer=document.querySelectorAll('#const .answer')[0];
const addBtn=document.querySelectorAll('#const button')[0];
addBtn.addEventListener('click',function(){
    let num=parseFloat(mathNum.value);
    if(isNaN(num)||num===null){
        addAnswer.value='null';
    }else{
        let sum=add(numberArray,num);
        addAnswer.value=JSON.stringify(sum);
    }
})
const subtractAnswer=document.querySelectorAll('#const .answer')[1];
const subtractBtn=document.querySelectorAll('#const button')[1];
subtractBtn.addEventListener('click',function(){
    let num=parseFloat(mathNum.value);
    if(isNaN(num)||num===null){
        subtractAnswer.value='null';
    }else{
        let difference=subtract(numberArray,num);
        subtractAnswer.value=JSON.stringify(difference);
    }
})
const multiplyAnswer=document.querySelectorAll('#const .answer')[2];
const multiplyBtn=document.querySelectorAll('#const button')[2];
multiplyBtn.addEventListener('click',function(){
    let num=parseFloat(mathNum.value);
    if(isNaN(num)||num===null){
        multiplyAnswer.value='null';
    }else{
        let product=multiply(numberArray,num);
        multiplyAnswer.value=JSON.stringify(product);
    }
})
const divideAnswer=document.querySelectorAll('#const .answer')[3];
const divideBtn=document.querySelectorAll('#const button')[3];
divideBtn.addEventListener('click',function(){
    let num=parseFloat(mathNum.value);
    if(isNaN(num)||num===0||num===null){
        divideAnswer.value='null';
    }else{
        let quotient=divide(numberArray,num);
        divideAnswer.value=JSON.stringify(quotient);
    }
})