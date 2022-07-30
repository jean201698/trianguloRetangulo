const container = document.querySelector('.container')
const input = container.querySelectorAll('input')
const calcular = document.querySelector('.calcular')
const p = document.querySelector('p')


function area(base, altura)  {
  if(!base || !altura) return false


    const calcuBase = (base * altura) / 2
    p.innerHTML =   `Area: ${calcuBase} m2`
    return
}

function perimetro(base, altura, hipotenusa){
if(!hipotenusa) return false

    
    return p.innerHTML = `Perímetro: ${Number(base) + Number(altura) + Number(hipotenusa)}cm`
}









calcular.addEventListener('click', ()=>{
    const hipotenusa = input[0].value;
    console.log(hipotenusa);
    const altura = input[1].value
    const base = input[2].value


    area(base, altura)
    perimetro(base, altura, hipotenusa )
})