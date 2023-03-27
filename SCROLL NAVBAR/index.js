// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
let pastScroll= 0;
let currentScroll ;

// selecteur de la nav .
const nav = document.querySelector('nav');

window.addEventListener("scroll",()=>{

currentScroll = window.scrollY;
if(currentScroll>pastScroll){
  nav.style.top = 0 + "px";
}else{
  nav.style.top = -60 + "px";
}
pastScroll  = currentScroll;
}
)


