let blockquote = document.querySelector(".blockquote");
let spinner = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;

const generateQuote = async () => {
    blockquote.innerHTML = spinner;
    try {
        const quote = await fetch('https://rohsikdnan.vercel.app/api/v1/quotes/random').then(res => res.json());
        blockquote.innerHTML = `<p>${quote.quote}</p><span class="blockquote-footer">${quote.author}</span>`;
    } catch (error) {
        blockquote.innerHTML = '<p style="color: red;">Something went wrong. Please try again later.</p>';
    }
}

document.getElementById('generateBtn').addEventListener('click', generateQuote);
generateQuote();
