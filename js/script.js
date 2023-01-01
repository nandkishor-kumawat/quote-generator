let blockquote = document.querySelector(".blockquote");

function generateQuote() {
    let i = Math.floor(Math.random() * quotes.length);
    blockquote.innerHTML = `<p>${quotes[i].quote}</p><span class="blockquote-footer">${quotes[i].author}</span>`;
}
generateQuote();