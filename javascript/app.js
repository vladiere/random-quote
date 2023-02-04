let quotesData;


$(document).ready(function () {
    getQuotes().then(() => {
      getQuote();
    });
  
    $('#generate').on('click', getQuote);
  });

var currentQuote = '',
currentAuthor = '';

function getQuotes() {
    return $.ajax({
        headers: {
            Accept: 'application/json'
        },
        url: 'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
        success: function (jsonQuotes) {
            if (typeof jsonQuotes === 'string') {
                quotesData = JSON.parse(jsonQuotes);
                console.log('quotesData');
                console.log(quotesData);
                console.log(quotesData.length);
            }
        },
        error: function (errThrown) {
            console.log(errThrown);
        }
    })
}

function getRandomQuote() {
    return quotesData.quotes[
      Math.floor(Math.random() * quotesData.quotes.length)
    ];
}

function getQuote() {
    let randomQuote = getRandomQuote();
  
    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;

    document.getElementById('quotes').innerText = currentQuote
    document.getElementById('author').innerText = currentAuthor
}  