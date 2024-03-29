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
let img_url =document.querySelector('.image');

const quotes =[
    {
        quote:' "Los mejores emprendedores tienen dos cosas en común: nunca se rinden y nunca paran de aprender."',
        person:'John Freddy Vega',
        url_image:'data:image/jpeg;base64,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',
    },
    {
        quote:' "El mejor momento para sembrar un árbol, fue veinte años antes". ',
        person:'Anónimo',
        url_image:'https://fotografias.lasexta.com/clipping/cmsimages02/2022/03/11/DD3ADEF0-EBDC-41D1-BE29-7FD5950B9005/anonymous_98.jpg?crop=4320,2431,x0,y136&width=1900&height=1069&optimize=high&format=webply'
    },
    {
        quote:'"Nunca pares de aprender"',
        person:'Platzi',
        url_image:'https://yt3.ggpht.com/ytc/AKedOLToU1sSfIWU5xGmwyGTWqP9iqY4MlgRolTMbTQeqg=s900-c-k-c0x00ffffff-no-rj',

    },
    {
        quote:'"La vida que quieres está después del miedo"',
        person:'Diego dreyfus',
        url_image:'https://i.pinimg.com/280x280_RS/5d/a6/be/5da6bed46e288fec75b077da8b427bfd.jpg',

    }
];

btn.addEventListener('click',()=>{
    event.preventDefault();

    let random =Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    img_url.src=quotes[random].url_image;

});