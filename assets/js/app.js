'use strict';

    document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        alertify.message('Welcome to my JS sentence generator by Cristobal Nyram');
    }
  };

//variable
let btn =document.getElementById('new-quote');
let quote =document.querySelector('.quote');
let person =document.querySelector('.person');

const quotes =[
    {
        quote:' "Los mejores emprendedores tienen dos cosas en común: nunca se rinden y nunca paran de aprender."',
        person:'John Freddy Vega',
    },
    {
        quote:' "El mejor momento para sembrar un árbol, fue veinte años antes". ',
        person:'Anónimo',

    },
    {
        quote:'"Nunca pares de aprender"',
        person:'Platzi'
    },
    {
        quote:'"La vida que quieres está después del miedo"',
        person:'Diego dreyfus'
    }
];

btn.addEventListener('click',()=>{
    event.preventDefault();

    let random =Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

});