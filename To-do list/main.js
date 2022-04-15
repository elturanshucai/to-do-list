const filter_az=document.querySelector('.filter')
const filter_az_hover=document.querySelector('.filter-az-hover')
const filter_za=document.querySelector('.filter-za')
const filter_za_hover=document.querySelector('.filter-za-hover')
const inputdiv=document.querySelector('.inputdiv')
const input = document.querySelector('input')
const list = document.querySelector('.list')
const task = document.querySelector('.list p')
const btn = document.querySelector('button')
const plus = document.querySelector('.plus')
const add = document.querySelector('.button')

plus.addEventListener('mouseover', ()=>{
    add.style.display='block'
    btn.style.backgroundColor='blueviolet'
})
btn.addEventListener('mouseout', ()=>{
    add.style.display='none'
    btn.style.backgroundColor='white'
})
btn.addEventListener('click',()=>{
    let li =  document.createElement('li')
    let img1=document.createElement('img')
    let img2=document.createElement('img')
    img2.className='delete-hover'
    img2.src='/img/deletehover.svg'
    img1.className='delete'
    img1.src='/img/delete.svg'
    img1.alt=''
    img2.alt=''
    let p = document.createElement('p')
    p.innerHTML=input.value
    li.prepend(p)
    li.append(img1)
    li.append(img2)
    list.append(li)
    input.value=''
    const del2=document.querySelector('.list .delete')
    const delete_hover2=document.querySelector('.list .delete-hover')
    del2.addEventListener('mouseover', (e)=>{
        e.target.style.display='none'
        delete_hover2.style.display='inline-block'
    })
    delete_hover2.addEventListener('mouseout', (e)=>{
        e.target.style.display='none'
        del2.style.display='inline-block'
    })
    delete_hover2.addEventListener('click', ()=>{
        input.value=''
    })  
})

const del=document.querySelector('.delete')
const delete_hover=document.querySelector('.delete-hover')

del.addEventListener('mouseover', (e)=>{
    e.target.style.display='none'
    delete_hover.style.display='inline-block'
})
delete_hover.addEventListener('mouseout', (e)=>{
    e.target.style.display='none'
    del.style.display='inline-block'
})
delete_hover.addEventListener('click', ()=>{
    input.value=''
})


filter_az.addEventListener('click',(e)=>{
    e.target.style.display='none'
    filter_az_hover.style.display='block'
    list.style.display='block'
    inputdiv.style.display='none'
})
filter_az_hover.addEventListener('click',(e)=>{
    e.target.style.display='none'
    filter_za_hover.style.display='block'
})
filter_za_hover.addEventListener('click', (e)=>{
    e.target.style.display='none'
    filter_az.style.display='block'
    list.style.display='none'
    inputdiv.style.display='block'
})
