const work = document.querySelector('#work');
const add = document.querySelector('#add');
const list = document.querySelectorAll('li span');
const ul = document.querySelector('.list')
console.log(work, add, list, ul);
add.addEventListener('click',()=>{
    if(work.value==""){
        alert('할 일을 입력하세요');
    }else{
        /* for(i=0; i<10; i++) */
        /* list[0].textContent = work.value; */
        let li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" class="work_list">${work.value}</input><button type="button" class="del_btn">X</button>`
        console.log(li);
        work.value = '';
        ul.appendChild(li);
        /* 삭제버튼 */
        const delBtn = document.querySelectorAll('.del_btn');
        console.log(delBtn);
        for(let i of delBtn){
            i.addEventListener('click',()=>{
                console.log(i);
                i.parentNode.remove();
            })
        }
    }
})