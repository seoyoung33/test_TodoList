const work = document.querySelector('#work');
const add = document.querySelector('#add');
const list = document.querySelectorAll('li span');
console.log(work, add, list);
add.addEventListener('click',()=>{
    if(work.value==""){
        alert('할 일을 입력하세요');
    }else{
        /* for(i=0; i<10; i++) */
        list[0].textContent = work.value;
    }
})