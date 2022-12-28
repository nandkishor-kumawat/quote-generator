let generateBtn = document.querySelector("#generateBtn");
let quote = document.querySelector(".blockquote p");
let footer = document.querySelector(".blockquote footer");

generateBtn.addEventListener('click', () => {
    let i = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[i].quote;
    footer.innerHTML = quotes[i].author;
})
