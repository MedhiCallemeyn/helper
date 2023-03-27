// let firstNumber,secondNumber,thirdNumber;

// const rgbGenerator =()=>{
//   return Math.floor(Math.random()*255);
// }

// const injectColor = () =>{
//   firstNumber = rgbGenerator()
//   secondNumber = rgbGenerator()
//   thirdNumber = rgbGenerator()
  
//   document.body.style = `background : rgb(${firstNumber},${secondNumber},${thirdNumber})`;
//   document.body.innerHTML = `<h2>rgb(${firstNumber},${secondNumber},${thirdNumber})</h2>`;
// }
// setInterval(injectColor,2000)

// ******************* OR **************************


function getColor(){
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);

  const color = `rgb(${r},${g},${b})`

  document.body.style.background = color;
  document.body.innerHTML = `<h2>${color}</h2>`;
}

setInterval(getColor,2000)


















