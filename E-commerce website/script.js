const bar=document.querySelector('#bar');
const nav=document.querySelector('#navbar')
const closeBtn=document.querySelector('#close');

if(bar){
    bar.addEventListener('click',(e)=>{
        console.log('Event started')
        nav.classList.add('active');

    })
}

if(closeBtn){
    closeBtn.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}