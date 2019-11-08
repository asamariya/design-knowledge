const quoteTag = document.querySelector('h1');
const authorTag = document.querySelector('#author');
const randomBtn = document.querySelector('footer img');
const bodyTag = document.querySelector('body');

const url = 'https://api.superhi.com/api/test/quotes/random';

async function getQuote() {
	try {
		let response = await fetch(url);
		let data = await response.json();

		quoteTag.innerHTML = `&ldquo;${data.quote}&rdquo;`;
		authorTag.innerHTML = `&mdash; ${data.author}`;

		if (data.quote.length > 100) {
			quoteTag.classList.add('long');
		} else {
			quoteTag.classList.remove('long');
		}

		bodyTag.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 90%)`;
	} catch (error) {
		console.log(error);
	}
}

// run getQuote on page load
getQuote();

// run getQuote on clicking random button
randomBtn.addEventListener('click', getQuote);
