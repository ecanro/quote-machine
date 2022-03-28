
//var for url API
var endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

//function to get the quotes from the API url
function getQuote() {
    //use fetch
    fetch(endpoint)
    //waiting the promise and convert in json
    .then( response => response.json())
    //how the quote is in the messages, used it
    .then(data => displayQuotes(data.message))
    //cathe if are errors
    .catch( function () {
        console.log(Error);
    })
}

//function to display the quotes
function displayQuotes(quote) {
    var quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}

//var for target html button
var newQuoteButton = document.querySelector('.new-quote');
//event for the button
newQuoteButton.addEventListener('click', getQuote);

//call the function to get firts quote
getQuote();