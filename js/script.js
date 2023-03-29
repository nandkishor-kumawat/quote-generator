let blockquote = document.querySelector(".blockquote");
let spinner = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;

const generateQuote = () => {
    blockquote.innerHTML = spinner;
    setTimeout(() => {
        let i = Math.floor(Math.random() * quotes.length);
        blockquote.innerHTML = `<p>${quotes[i].quote}</p><span class="blockquote-footer">${quotes[i].author}</span>`;
    }, 200);
}

document.getElementById('generateBtn').addEventListener('click', generateQuote);
generateQuote();

document.getElementById('generateBtn').addEventListener('click', generateQuote);
generateQuote();