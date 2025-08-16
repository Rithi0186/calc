function displayvalue(Val){
    document.getElementById("display").value=document.getElementById("display").value+Val;
}
function clrscr(){
    document.getElementById("display").value="";
}
function calculate(){
  var input = document.getElementById("display").value;
  var result= eval(input)  ;
  document.getElementById("display").value=result;
}