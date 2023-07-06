import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>

//testing array meathods 

//1 concat  

const array1 =['1','2','3','4','5'];
const array2 = ['6','7','8','9','10'];
const array3 = array1.concat(array2);

console.log(array3) ;

this will concatenate teh arrays and give us a new array which will contain elements from both arrays
// 2 includes 


array2.includes('2")
 this will result in a boolean 
 either true or false 



// 3 indexOf  


array2.indexOf('3')

This will tekk us the index of a particular element in an array

// 4 reverse 

array1.reverse()
(5) ['5', '4', '3', '2', '1'] 

this will reverse the array 









`;
