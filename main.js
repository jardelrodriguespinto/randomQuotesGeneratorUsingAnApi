const randomAdvice = document.querySelector('.quotation');
const getAdviceBtn = document.querySelector('.getAdviceBtn');

const apiUrl = 'https://api.adviceslip.com/advice';
async function getData(){
	const response = await fetch(apiUrl);
	const data = await response.json();
	getAdviceBtn.addEventListener('click', () => {
		randomAdvice.innerText = data.slip.advice
	})
}

setInterval(getData, 1000);
getData();