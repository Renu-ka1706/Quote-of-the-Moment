const quotes=[
    { quote: "The Best View Comes After The Hardest Climb.",author:"Herman Melville" },{
        quote:"Be Yourself; everyone else is already taken.",author:"Oscar Wilde"},{
            quote:"The only thing we have to fear is fear itself.",author:"Franklin D.Roosevelt"},{
                quote:"A journey of a thousand miles begins with a single step.",author:"Lao Tzu"},{
                    quote:"The best way to predict yor future is to create it.",author:"Abraham Lincoln"
                }
];
function generatequote(){
    let randomIndex=Math.floor(Math.random()*quotes.length);
    document.getElementById("quote").innerText=quotes[randomIndex].quote;
    document.getElementById("author").innerText="- " +quotes[randomIndex].author;
}