let showhide=document.querySelector('.links div i');
let count=1;
let links=document.querySelector('.hide')

showhide.addEventListener('click',()=>{
    if(count==1){
        links.classList.add('show')
        count++;
    }
    else{
        links.classList.remove('show')
        count--
    }

})
setInterval(()=>{
    if(window.innerWidth>=1150){
        links.classList.remove('show')
        count=1

    }
   
})








