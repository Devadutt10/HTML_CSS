//Variables..

const btn = document.querySelector('button');
const quote = document.querySelector('.quote');
const person = document.querySelector('h3');

//Quotes..

let quotes = [
    {quote: "You have to enter the matrix, to get out of the matrix",
person: "Andrew Tate"},
{
    quote: "The most sensible way to avoid a war is to just avoid it.",
pesron: "Sun"
},
{
    quote: "The better you run, the more faster you will become and there is no stopping you from that",
    person: "Usain Bolt"
},
{
    quote: "The first rule of fight club is to never speak of the fight club.",
    person: "Brad Pitt"
},
];

//Main Program..

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
});