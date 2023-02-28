let timer=document.getElementById("id")
let sec = 0;
var r = ""
function gog(){
   r=  setInterval(()=>{
            sec++
            if(sec < 10){
                sec = "0" + sec
            }else{
                sec = sec
            } 
        timer.innerHTML = sec
        
    },1000)
  
}
document.getElementById("p").addEventListener("click",(e)=>{
    console.log(e)
    if(e.target.innerHTML==="pause"){
      clearInterval(r)
      document.getElementById("p").innerHTML="resume" 
    }else{
gog()
document.getElementById("p").innerHTML="pause" 
    }
 
})

function kk(){
    
      sec=0      
    clearInterval(r)
    timer.innerHTML=0


}