let quotes = [ { text: "The journey of a thousand miles begins with a single step.",
     category: "Motivation" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", 
    category: "Programming" },
  { text: "Stay hungry, stay foolish.", 
    category: "Inspiration" }
];
function showRandomQuote(){
    // Generate random index
   let randomIndex = Math.floor(Math.random()* quotes.length);
   
   // select quote at that index
   let randomQuote = quotes[randomIndex]

   // Display in the DOM
   document.getElementById("quoteDisplay").innerText = 
   `"${randomQuote.text}" - ${randomQuote.category}`;
}
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
