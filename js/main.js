var RequireAge = prompt('Please enter your age');
var Element1 = document.querySelector('.navbar')
var Element2 = document.querySelector('.main__title')
var Element3 = document.querySelector('body')
var Element4 = document.querySelector('.main__btn')
if(RequireAge < 18 ){
    Element1.style.display = "none" 
    Element2.textContent = "This site requires you to be 18 years or older"
    Element3.style.background = "red" 
    Element4.textContent = "I'm 18+"
}
else if(RequireAge > 18 ){
   alert('Welcome')
}
else if(RequireAge == 18 ){
    alert('Welcome')
 }
