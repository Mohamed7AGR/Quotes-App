var quote = [
  {
    'quote': "Do not take life too seriously. You will not get out alive.",
    'author': "--Elbert Hubbard",
  },

  {
    'quote': "You miss 100% of the shots you don't take.",
    'author': "--Wayne Gretzy",
  },
  {
    'quote': "The best revenge is massive success.",
    'author': "--Frank Sinatra",
  },

  {
    'quote':"Resentment is like drinking poison and waiting for your enemies to die.",
    'author': "--Nelson Mandela",
  },
  {
    'quote':"It's not what happens to you, but how you react to it that matters.",
    'author': "--Epictetus",
  },
  {
    'quote': "Beware of what you become in pursuit of what you want.",
    'author': "--Jim Rohn",
  },
];

function getQuotes(){
var count=Math.floor( Math.random()*quote.length );
document.getElementById("quote").innerHTML=quote[count].quote;
document.getElementById("author").innerHTML=quote[count].author;
}