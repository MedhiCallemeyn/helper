const nav = document.querySelector("#side-bar");
const content = document.querySelector('.content');

// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
btn.addEventListener("click",()=>{
  nav.classList.toggle('navInOut');
})
// Ranger la sidebar si on click sur le contenu principal
content.addEventListener("click",()=>{
  nav.classList.remove("navInOut");
})
// BONUS
// Créer en css l'hamburger menu qui se transforme en croix


// Aide
// Priorités en CSS : id > classe > baliseHtml
