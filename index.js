let body = document.body
body.style.backgroundColor = 'black';
body.style.color = "white";

let listBorders = document.querySelector('.list-desc')
listBorders.style.borderBottom = "2px solid white"
listBorders.style.borderTop = "2px solid white"

let list = document.querySelector('.list')

let paris = document.createElement('p');
paris.innerHTML = 'Visit the Eifel tower in Paris'
list.appendChild(paris)

let berlin = document.createElement('p')
berlin.innerHTML = 'Party in Berlin'
paris.insertAdjacentElement('afterend', berlin);


console.log(list.innerHTML)

let newStr = "<div>Get a dog</div>"
// list.innerHTML += newStr;
list.insertAdjacentHTML('afterbegin', newStr);