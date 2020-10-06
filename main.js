const ul = document.querySelector('ul');
const input = document.querySelector('input');
const addButton = document.querySelector('#addButton');
const removeButton = document.querySelector('#removeButton');
const resetButton = document.querySelector('#resetButton');

addButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.append(li);
    input.value = ""
});

removeButton.addEventListener('click', () => {
    const li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {                
        if (li[i].classList.contains("lineThrough")) {
            li[i].remove();
          }
        }
    // if(li.classList.contains("lineTrough")) {
    //     li.classList.add('displayNone')
    // }
})

resetButton.addEventListener('click', () => {
    while(ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
})

ul.addEventListener('click', e => {
    e.target.classList.toggle('lineThrough')
});
