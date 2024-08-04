const btn = document.querySelector('.submitBtn')
btn.addEventListener('click', () => {
    const input = document.querySelector('.inputTitle').value
    createLi(input)
    document.querySelector('.inputTitle').value = ''
})

const createLi = (value) => {
    const ul = document.querySelector('.movieList')
    const createLi = document.createElement('li')
    createLi.textContent = value
    ul.appendChild(createLi)
}