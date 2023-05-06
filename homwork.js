//rahe aval 1

let newStr= "lorem ipsum dolor emet ipsum dollar";
       
function checkStringOccurnace(newStr){
    let finalStr = {};
    let checkArr = [];
    let counterArr = [];
    for(let i = 0; i < newStr.length; i++){
        if(checkArr.indexOf(newStr[i]) == -1){
            checkArr.push(newStr[i])
            let counter = 0;
            counterArr.push(counter + 1)
            finalStr[newStr[i]] = 1;
        }else if(checkArr.indexOf(newStr[i]) > -1){
            let index = checkArr.indexOf(newStr[i])
            counterArr[index] = counterArr[index] + 1;
            finalStr[checkArr[index]] = counterArr[index];
        }
    }
    return finalStr;
}

let demo = checkStringOccurnace(newStr);
console.log(demo);

//rahe hal 2
let stringValue = "hello world";
let stringArray = stringValue.split("");
let stringCompressorArray = [];
for (let value of stringArray) {
  let stringFindeArray = stringArray.filter((str) => {
    return str === value;
  });
  let repeatValueCounter = stringFindeArray.length + value;
  if (stringCompressorArray.indexOf(repeatValueCounter) < 0) {
    stringCompressorArray.push(repeatValueCounter);
  }
}
let result = stringCompressorArray.join(", ");
console.log( result);


//rahe hal 3
let txt = "my name is narges";
let txtArr = txt.split('');
let obj = txtArr.reduce((prev, currVal) => {
  prev[currVal] = (prev[currVal] || 0) + 1;
    return prev;
}, {});
console.log(obj);