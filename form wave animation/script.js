const signInBtnLink=document.querySelector('.signInBtnLink')
const signUpBtnLink=document.querySelector('.signUpBtnLink')
const wrapper=document.querySelector('.wrapper')
signUpBtnLink.addEventListener('click',function(e){
    e.preventDefault()
    wrapper.classList.toggle('active')
})
signInBtnLink.addEventListener('click',function(e){
    e.preventDefault()
    wrapper.classList.toggle('active')
})
