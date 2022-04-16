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
const drag = document.querySelector('.drag')
inputdiv.style.display = 'block'


plus.addEventListener('mouseover', () => {
    add.style.display = 'block'
    btn.style.backgroundColor = 'blueviolet'
})
btn.addEventListener('mouseout', () => {
    add.style.display = 'none'
    btn.style.backgroundColor = 'white'
})
let id=1
btn.addEventListener('click', () => {
    if (inputdiv.style.display == 'block') {
        let li = document.createElement('li')
        li.draggable = 'true'
        li.id = id
        id++
        let img1 = document.createElement('img')
        img1.className = 'delete'
        img1.src = '/img/delete.svg'
        img1.alt = ''
        let p = document.createElement('p')
        p.innerHTML = input.value
        li.prepend(p)
        li.append(img1)
        drag.ondragover = allowDrop;
        function allowDrop(event) {
            event.preventDefault()
        }

        drag.addEventListener('dragover', (e) => {
            e.preventDefault()
        })

        li.ondragstart = dragLi;
        function dragLi(event) {
            event.dataTransfer.setData('id', event.target.id)
            drag.style.display = 'block'
        }

        drag.ondrop = drop;
        function drop(event) {
            let itemId = event.dataTransfer.getData('id');
            if (itemId) {
                event.target.append(document.getElementById(itemId))
                let li2=document.querySelectorAll('.drag li')
                li2.forEach(item=>{
                    item.style.display='none'
                })
                drag.style.display='none'
            }
        }
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
    }
    else if (inputdiv.style.display == 'none') {
        inputdiv.style.display = 'block'
        list.style.display = 'none'
        input.focus()
    }
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
    if (click == 0) {
        list.style.display = 'block'
        inputdiv.style.display = 'none'
        click = 1
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
        click = 0
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

