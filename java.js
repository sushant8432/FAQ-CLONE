const accoridans =document.querySelectorAll(".accoridan")

accoridans.forEach(accoridan =>{
    const icon = accoridan.querySelector(".icon")
    const answer= accoridan.querySelector(".answer")

    accoridan.addEventListener('click',() =>{
        //  icon.classList.toggle('active')
        //  answer.classList.toggle('active')
         if(icon.classList.contains('active')){
             icon.classList.remove('active')
             answer.style.maxHeight=null
         }else{
             icon.classList.add('active')
             answer.style.maxHeight=answer.scrollHeight + 'px'
         }
    })
});
