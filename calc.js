function FtoC()
{
  value = document.getElementById("temperature").value;
  theResult = (value-32)*(5/9);

 document.getElementById("output").innerHTML= theResult
  // Implement function
}

function CtoF() 
{ 
   value = document.getElementById("temperature").value;
  theResult = (value* 9/5)+(32);

 document.getElementById("output").innerHTML= theResult
  
  // Implement function

}