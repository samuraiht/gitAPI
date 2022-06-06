/*global fetchJSON*/
const requestURI = 'https://api.github.com/search/repositories';
const btn = document.getElementsByTagName('button')[0];
const list = document.getElementById('result');

btn.addEventListener('click', () => {
	list.innerHTML = '';
	fetchJSON(requestURI, {q: 'javascript'}).then(result => {
		for(const item of result.items) {
			const li = document.createElement('li'), a = document.createElement('a');// <li></li>, <a></a>
			a.href = item.html_url;// <a href="result.items.html_url"></a>
			a.textContent = item.description;// <a href="result.items.html_url">result.items.description</a>
			li.appendChild(a);// <li>a要素</li>
			list.appendChild(li);// <ul id="result"><li>a要素</li></ul>
		}
	});
});