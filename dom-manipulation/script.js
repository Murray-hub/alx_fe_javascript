let quotes = JSON.parse((localStorage.getItem("quotes"))) || [ { text: "The journey of a thousand miles begins with a single step.",
     category: "Motivation" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", 
    category: "Programming" },
  { text: "Stay hungry, stay foolish.", 
    category: "Inspiration" },
    {text: "Take one step at at the time.",  category:"Motivation"},
];
function saveQuotes(){
  localStorage.setItem("quotes",JSON.stringify(quotes));
}
function displayRandomQuote(){
    // Generate random index
   let randomIndex = Math.floor(Math.random()* quotes.length);
   
   // select quote at that index
   let showRandomQuote = quotes[randomIndex]

   // Display in the DOM
   document.getElementById("quoteDisplay").innerHTML = 
   `"${showRandomQuote.text}" - ${showRandomQuote.category}`;
}
function createAddQuoteForm(){
  let form = document.createElement("form");
  //Quote Text Input
  let TextInput = document.createElement("input");
  TextInput.placeholder = " Enter quote";
  form.appendChild(TextInput);
  
  //Category input
  let  categoryInput = document.createElement("input");
  categoryInput.placeholder = "Category";
  form.appendChild(categoryInput);
  
  //Add Quote
  let addButton = document.createElement("button");
  addButton.innerText = "Add Quote";
  form.appendChild(addButton);
  form.addEventListener("submit", function(e){
    e.preventDefault();
    quotes.push({text:TextInput.value, category:categoryInput.value})
    saveQuotes();
     alert("quote added!");
      TextInput.value = "";
   categoryInput.value = "";
  });
 document.getElementById("quoteDisplay").appendChild(form);
}
document.getElementById("newQuote").addEventListener("click",displayRandomQuote);
createAddQuoteForm();