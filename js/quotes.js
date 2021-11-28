const quotes = [
    {
        quotes: "Life is like riding bicycle. To keep your balance you must keep moving.",
        author: "Albert Einstein"
    },
    {
        quotes: "You never know what life is like, until you have lived it.",
        author: "Marilyn Monroe"
    },    {
        quotes: "Think not those faithful who praise all your words and actions.but those who kindly reprove your faults.",
        author: "Socrates"
    }
];

const quote = document.querySelector("#quote_view > dt");
const author = document.querySelector("#quote_view > dd");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerHTML = todaysQuote.quotes;
author.innerHTML = `- ${todaysQuote.author}`;