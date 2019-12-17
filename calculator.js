var output = document.querySelector(".output");
var hist = document.querySelector(".history");
var numb = document.querySelectorAll(".buttons button");
var val1,val2,op;


for(var i=0;i<numb.length;i++){
numb[i].addEventListener("click", function(){
            if(this.className==="number")
            output.innerText = output.innerText + this.innerText;
    else if (this.id==="eq" || this.id==="C" || this.id==="CE")
        {
            
        }
    else{
                op=this.innerHTML;
                hist.innerHTML=output.innerHTML;
                val1=Number(hist.innerHTML);
                output.innerHTML="";
            hist.innerText = hist.innerText + this.innerText;
            }
   
});    
};


var c = document.querySelector("#C");
c.addEventListener("click",function(){
   output.innerHTML="";
    val1=0;
    val2=0;
    op="";
    hist.innerHTML="0";
});

var ce = document.querySelector("#CE");
ce.addEventListener("click",function(){
    var t= output.innerHTML;
    output.innerHTML=t.substring(0,t.length-1);
});

var eq= document.querySelector("#eq");
eq.addEventListener("click",function(){
    val2=Number(output.innerHTML);
    hist.innerText = hist.innerText + String(val2);
    console.log(op);
    if(op==="+")
        output.innerHTML=String(val1+val2);
    else if(op==="-")
        output.innerHTML=String(val1-val2);
    else if(op==="X")
        output.innerHTML=String(val1*val2);
    else if(op==="/")
        output.innerHTML=String(val1/val2);
    
});
//var input=document.querySelector(".input");
//input.addEventListener("keypress",function(){
//var t=event.keyCode;
//    if(t===13)
//        {
//            if(!isNaN(this.value))
//            output.innerHTML= this.innerHTML + String(this.value)  ;
//            else
//                alert("Enter a valid not alphabets");
//        }
//    
//});
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
//var Isvisible=false;
//var slidebtn=document.querySelector("#slidebutton");
//var slider=document.querySelector("#slider");
//slidebtn.addEventListener("click",function(){
//    if(Isvisible)
//    slider.style.visibility=hidden;
//    else
//    slider.style.visibility=visible;
//});