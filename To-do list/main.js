const filter_az = document.querySelector('.filter')
const filter_az_hover = document.querySelector('.filter-az-hover')
const filter_za = document.querySelector('.filter-za')
const filter_za_hover = document.querySelector('.filter-za-hover')
const inputdiv = document.querySelector('.inputdiv')
const input = document.querySelector('input')
const list = document.querySelector('.list')
const btn = document.querySelector('button')
const plus = document.querySelector('.plus')
const add = document.querySelector('.button')


plus.addEventListener('mouseover', () => {
    add.style.display = 'block'
    btn.style.backgroundColor = 'blueviolet'
})
btn.addEventListener('mouseout', () => {
    add.style.display = 'none'
    btn.style.backgroundColor = 'white'
})
btn.addEventListener('click', () => {
    let li = document.createElement('li')
    let img1 = document.createElement('img')
    img1.className = 'delete'
    img1.src = '/img/delete.svg'
    img1.alt = ''
    let p = document.createElement('p')
    p.innerHTML = input.value
    li.prepend(p)
    li.append(img1)
    list.append(li)
    input.value = ''
    img1.addEventListener('mouseover', (e) => {
        e.target.src = '/img/deletehover.svg'
    })
    img1.addEventListener('mouseout', (e) => {
        e.target.src = '/img/delete.svg'
    })
    img1.addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })


})

const del = document.querySelector('.delete')

del.addEventListener('mouseover', (e) => {
    e.target.src = '/img/deletehover.svg'
})
del.addEventListener('mouseout', (e) => {
    e.target.src = '/img/delete.svg'
})
del.addEventListener('click', () => {
    input.value = ''
})
let click = 0
filter_az.addEventListener('click', (e) => {
    if (click==0) {
        list.style.display = 'block'
        inputdiv.style.display = 'none'
        click=1
    }
    else if (click == 1) {
        e.target.style.display = 'none'
        filter_az_hover.style.display = 'block'
        list.style.display = 'block'
        inputdiv.style.display = 'none'
        let task = []
        let p = document.querySelectorAll('.list p')
        p.forEach(item => {
            task.push(item.innerText)
        })
        task.sort()
        p.forEach((item, index) => {
            item.innerText = task[index]
        })
        click=0
    }
})
filter_az_hover.addEventListener('click', (e) => {
    e.target.style.display = 'none'
    filter_za_hover.style.display = 'block'
    let task = []
    let p = document.querySelectorAll('.list p')
    p.forEach(item => {
        task.push(item.innerText)
    })
    task.sort().reverse()
    p.forEach((item, index) => {
        item.innerText = task[index]
    })
})
filter_za_hover.addEventListener('click', (e) => {
    e.target.style.display = 'none'
    filter_az.style.display = 'block'
    list.style.display = 'none'
    inputdiv.style.display = 'block'
})