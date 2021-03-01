// Answer 1

var listofarray=[5,8,6,32,1,2]
function FilterEvenNumbers(listofarray) {
    
    for(i=1;i<=listofarray.length-1;i++){
        if(listofarray[i] % 2 == 0) {
            console.log(listofarray[i]+" is even.");
        }
    }    
}
FilterEvenNumbers(listofarray);


// Answer 2

var array=[1,0,0,0,0,1,0,0,0,1]
function FindMaxRepeataionOfOnes(array){
  var countones=0;
  var result=0;
  for(i=0;i<=array.length-1;i++){
    if (array[i]==0) countones=0;
    else {
      countones++;
      result=Math.max(result,countones);
    }
  }
  return result;
}
console.log(FindMaxRepeataionOfOnes(array));


//Answer 3

var array=[1,2,3,3,4,5,6,7,8]

function FindRepeatedNumber(array){

  for(i=0;i<=array.length-1;i++){
    if(array[i+1]!=undefined)if(array[i]==array[i+1]) console.log("Reapeted number "+array[i]); 
  }
}
console.log(FindRepeatedNumber(array));


//Answer 4


fetch('www.example.com/api/get/1')
  .then(response => response.json())
  .then(data => console.log(data));


//Answer 5

var obj = [
    {'id' : 4, 'name' : 'abc'},
    {'id' : 10, 'name' : 'ab2'},
    {'id' : 5, 'name' : 'abc3'},
    {'id' : 6, 'name' : 'abc5'},
  ];
  
  function ShortDataByID(obj){
    for(i = 0; i <= obj.length; i++) { 
        for (var j = 0; j < (obj.length - i - 1); j++) {
          if(obj[j].id > obj[j+1].id) {
            var tmp = obj[j]; 
              obj[j] = obj[j+1]; 
              obj[j+1] = tmp;
          }
        }        
    }
    console.log(obj);  
  }  
  ShortDataByID(obj)



