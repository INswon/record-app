//querySelector()で最初の一つの要素を取得する
const btn = document.querySelector('.submitBtn')
btn.addEventListener('click', () => {
    //class(inputTitle)データを取得
    const input = document.querySelector('.inputTitle').value
    //取得された映画タイトルを引数としてcreatLi(リストアイテムとして生成し、既存のリストに追加する処理を実現)している
    createLi(input)
    // 入力フィールドをクリア
    document.querySelector('.inputTitle').value = ''
})

const createLi = (value) => {
    const ul = document.querySelector('.movieList')
    const createLi = document.createElement('li')
    createLi.textContent = value
    ul.appendChild(createLi)
}
