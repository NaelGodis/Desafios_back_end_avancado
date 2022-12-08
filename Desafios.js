/*Desafio 1*/


function sum(){
    const formData = new FormData(document.querySelector('form'))
    const n1  = formData.get("n1")
    const n2  = formData.get("n2")
console.log(n1+' '+n2)
}


/*Desafio 2*/

const vectorDesafio = [25, 45, 3, 9, 5]

 let vetor1 = {
    n1:vectorDesafio[0],
    n2:vectorDesafio[1],
    n3:vectorDesafio[2],
    n4:vectorDesafio[3],
    n5:vectorDesafio[4]
 }

console.log(vetor1.n1)

const {n1,n2,n3,n4,n5} = vetor1


const num1 = 10
const num2 =20
const calculadora = {
    soma:num1 + num2,
    sub:num1 - num2,
    mult:num1 * num2,
    div:num1 / num2
}
 console.log(calculadora.soma)

 const {soma,sub,mult,div} = calculadora
 const calculadoraJson = JSON.stringify(calculadora)
 console.log(calculadoraJson)

//  Desafio 4
const myArrowFunction = (a,b) => a+b
console.log(myArrowFunction(5,2))


const myArrowFunction1 =(x,b) => (x=7)+(b=5)
console.log(myArrowFunction1())


// Desafio 5
function data {
    
}
// Desafio 6

console.log(document.getElementById('titulo'))
console.log(document.getElementsByClassName('text'))
console.log(document.querySelectorAll('text'))
const texts = document.querySelectorAll('.text')
console.log(texts)

texts.forEach((data)=> console.log(data))

texts[0].textContent = 'Estou alterando o primeiro paragráfo'

texts[0].innerHTML = '<span> Colocando um subtítulo <\span>'
texts[1].style.backgroundColor = 'red'

texts[2].remove()

const button = document.querySelector('#btn')
button.addEventListener('click',()=>(texts[3].style.backgroundColor = 'orange'))