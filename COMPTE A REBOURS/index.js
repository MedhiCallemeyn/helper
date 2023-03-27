let totalSeconds;
let interval



const countDown = ()=>{
  const minute = Math.floor(totalSeconds/60);
  const second = totalSeconds % 60;

let sec = second <10 ? "0" + second : second

countdownDisplay.textContent = minute +" : "+ sec
if(totalSeconds > 0){
  totalSeconds --;
} else {
  countdownDisplay.textContent = " c'est fini ! "
  clearInterval(interval)
}
}


form.addEventListener('submit',(e)=>{
  e.preventDefault()
if(isNaN(choice.value)){
  alert("mettez des nombres")
}else{
  totalSeconds = choice.value * 60;
  choice.value = "";
  clearInterval(interval)
  interval = setInterval(countDown,1000)
}
})


