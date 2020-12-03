var output = document.querySelector(".output");
var hist = document.querySelector(".history");
var numb = document.querySelectorAll(".buttons button");
var val1,val2,op;
output.innerHTML = "";
hist.innerHTML = "";

for(var i=0;i<numb.length;i++){
numb[i].addEventListener("click", function(){

    if(this.id === "dot")
    {

        if(output.innerHTML.includes('.'))
        {
            alert("Invalid Syntax for number");
            output.innerHTML = output.innerHTML.substring(0,output.innerHTML.length-1)
        }
            
    }
    if(this.className==="number")
         output.innerText = output.innerText + this.innerText;
    else if (this.id==="eq" || this.id==="C" || this.id==="CE")
     {
            
     }
    else
    {
        if(output.innerHTML === "")
            alert("add number then operand");
        else{
            op=this.innerHTML;
            output.innerHTML+=op;
        }            
     }
   
});    
};


var c = document.querySelector("#C");
c.addEventListener("click",function(){
   output.innerHTML="";
    val1=0;
    val2=0;
    op="";
    hist.innerHTML="";
});

var ce = document.querySelector("#CE");
ce.addEventListener("click",function(){
    var t= output.innerHTML;
    output.innerHTML=t.substring(0,t.length-1);
});

var eq= document.querySelector("#eq");
eq.addEventListener("click",function(){
    if(output.innerText === "")
    {
        hist.innerText = "";
        output.innerText="";
        alert("Enter numbers");
    }
    else{
        x = output.innerHTML.length;
         if(output.innerHTML[x-1] === "+" || output.innerHTML[x-1] === "-" || output.innerHTML[x-1] === "*" || output.innerHTML[x-1] === "/" || output.innerHTML[x-1] === "%")
         {
             alert("invalid operation. add operand")
         }
         else
         {
            hist.innerHTML = output.innerHTML;
            x = eval(output.innerHTML);
            output.innerHTML = Math.round(x * 100) / 100;
         }
    }
    
});

var microphone=document.querySelector(".microphone");
microphone.addEventListener("click",function(){
    var recognition= new(window.SpeechRecognition|| webkitSpeechRecognition);
    var operations={"plus":"+",
                    "subtract":"-",
                   "multiply":"*",
                    "multiple":"*",
                    "multliply":"*",
                    "Mutliply":"*",
                    "mutiplied":"*",
                   "divide":"/",
                   "open bracket":"(",
                   "close bracket":")",
                   "post":"4",
                   "x":"*",
                   "X":"*",
                   "modulo":"%"};
    recognition.lang = 'en-US';
    recognition.start();
    microphone.classList.add("record");
    recognition.onresult=function(event){
        var x=event.results[0][0].transcript;
        for(property in operations)
                {
                   x= x.replace(property,operations[property]);
                }
        output.innerHTML= String(x);
        setTimeout(function(){

            hist.innerHTML=String(x);
            try{
            var result=eval(output.innerHTML);
            output.innerHTML=String(result);
            }
            catch{
                output.innerHTML="Invalid Operations";
        }
                
     
        },1000)
        
             microphone.classList.remove("record");
    }
}); 
