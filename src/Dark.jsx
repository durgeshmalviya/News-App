const url = 'https://celestial-objects.p.rapidapi.com/galaxies';

const Dark=()=>{
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3e1c209175mshd280390482053d2p1aedcfjsna62d5aa47d85',
		'X-RapidAPI-Host': 'celestial-objects.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}}
export default Dark;