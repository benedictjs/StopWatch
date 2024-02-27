const allTime=document.querySelector('.time')
const allButs=document.querySelector('.buts')
const allTime2=allTime.querySelectorAll('p')
const allButs2=allButs.querySelectorAll('p')
console.log(allTime2)
let lastTimP=0
let secTimP=0
let firstTimP=0
let inter1;
let elaspedTime=0
let milliseconds;
let seconds;
let hour;
let mins;
function startTimer(){
    
}
//startTimer()
console.log(Date.now()-0)
allButs2[0].addEventListener('click',()=>{

    timeStart=Date.now()-elaspedTime
    inter1=setInterval(()=>{
    elaspedTime=Date.now()-timeStart
    milliseconds=Math.floor((elaspedTime%1000)/10)
    seconds=Math.floor((elaspedTime%(1000*60))/1000)
    mins=Math.floor((elaspedTime%(1000*60*60))/ (1000*60))
    hour=Math.floor(elaspedTime/(1000*60*60))
   // console.log(milliseconds)
    

       // milliseconds++
        allTime2[2].innerHTML=milliseconds<10?'0'+milliseconds:milliseconds
            
            allTime2[1].innerHTML=seconds<10?'0'+seconds+'<span>:</span':seconds+'<span>:</span>'
        
          //  allTime2[1].innerHTML=seconds<10?'0'+seconds+'<span>:</span':seconds+'<span>:</span>'
            
            allTime2[0].innerHTML=mins<10?'0'+mins+'<span>:</span':mins+'<span>:</span>'
    
        },10)
         })


allButs2[2].addEventListener('click',()=>{
        console.log('ins')
        clearInterval(inter1)
        allTime2[2].innerHTML='00'
        allTime2[1].innerHTML='00<span>:</span'
        allTime2[0].innerHTML='00<span>:</span'   
        mins=0 
        seconds=0
        milliseconds=0
})
allButs2[1].onclick=()=>{
    console.log('infgs')
    clearInterval(inter1)
    allTime2[0].innerHTML=milliseconds<10?'0'+milliseconds+'<span>:</span':milliseconds+'<span>:</span>'
    allTime2[1].innerHTML=seconds<10?'0'+seconds+'<span>:</span':seconds+'<span>:</span>'
    allTime2[2].innerHTML=mins<10?'0'+mins:mins
    
        
}
