let blockquote = document.querySelector(".blockquote");
let spinner = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;

const generateQuote = () => {
    blockquote.innerHTML = spinner;
    // let data = await fetch('https://rohsikdnan.github.io/quote-generator/quotes.json');
    // let quotes = await data.json();

    let i = Math.floor(Math.random() * quotes.length);
    setTimeout(() => {
        blockquote.innerHTML = `<p>${quotes[i].quote}</p><span class="blockquote-footer">${quotes[i].author}</span>`;
    }, 60);
}

document.getElementById('generateBtn').addEventListener('click', generateQuote);
generateQuote();