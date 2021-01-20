function dis(val){
 document.getElementById("result").value+=val;
}
function calculate(){
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}
function erase(){
    document.getElementById("result").value="";
}
function back(){
    var x=document.getElementById("result").value;
    var y=x.slice(0,x.length-1)
    document.getElementById("result").value=y;

}
function key(event){
   var x=event.key;
   if(x>='0' && x<='9'){
       document.getElementById("result").value+=x.ToString();
   }
   else if(x==='=' || event.keyCode===13){
       calculate();
      
   }
   else{
       alert("only numbers are allowed");
   }
}