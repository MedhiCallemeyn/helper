//conversion de la date du jour au format jj/mm/aaaaa

const today = new Date().toISOString().split('T')[0];

start_date.value = today;
start_date.min = today;

//calcul pour la date de demain

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate()+1);

// conersion du format jj/mm/aaaaa pour linput 

let tomorrowFormat = tomorrow.toISOString().split('T')[0];

end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;
// eviter que le premier input soit apres le deuxieme
start_date.addEventListener('change',(e)=>{
  let day = new Date(e.target.value);

  if(end_date.value < start_date.value){
    day.setDate(day.getDate()+1);
    end_date.value = day.toISOString().split('T')[0];
  }
})
// eviter de selectionner une date anterieur au premier input
end_date.addEventListener('change',(e)=>{
  let day = new Date(e.target.value)

  if(end_date.value < start_date.value){
    day.setDate(day.getDate()-1);
    start_date.value = day.toISOString().split('T')[0];
  }
})
// calcul du nombre de jour

const bookingCalc = ()=>{

  let diffTime = Math.abs(new Date(end_date.value)-new Date(start_date.value));
  let diffDays = Math.ceil(diffTime / (1000 *60 * 60 *24))
  total.textContent = diffDays * nightPrice.textContent
}

start_date.addEventListener('change', bookingCalc);
end_date.addEventListener('change', bookingCalc);
