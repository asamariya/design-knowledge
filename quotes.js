const quoteTag = document.querySelector('h1');
const authorTag = document.querySelector('#author');
const randomBtn = document.querySelector('footer img');

const url = 'https://api.superhi.com/api/test/quotes/random';

async function getQuote() {
	try {
		let response = await fetch(url);
		let data = await response.json();

		quoteTag.innerHTML = data.quote;
		authorTag.innerHTML = data.author;
	} catch (error) {
		console.log(error);
	}
}

// run getQuote on page load
getQuote();

// run getQuote on clicking random button
randomBtn.addEventListener('click', getQuote);
