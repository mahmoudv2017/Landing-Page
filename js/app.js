/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const nav_ul = document.querySelector('#navbar__list')
const sections = document.querySelectorAll('section')
let nav_li 


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function caculateTop(element) { 
    return element.getBoundingClientRect().y
 }

 function removeActiveExcept(index) { 
    sections.forEach((sec , i2) => {
        if(i2 !== index){
            sec.classList.remove('active-class')
        }
    })
 }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
nav_ul.innerHTML = `<li>SECTION 1</li>
                    <li>SECTION 2</li>
                    <li>SECTION 3</li>                   
                    <li>SECTION 4</li>  
    `
nav_li = document.querySelectorAll('#navbar__list li')



// Add class 'active' to section when near top of viewport
document.onscroll = () => {
    sections.forEach((sec,index) => {
        const distance = caculateTop(sec)
        if(distance < 100 && distance >= -25){
            sec.classList.add('active-class')
            removeActiveExcept(index)
        }
    })
}



// Scroll to anchor ID using scrollTO event
nav_li.forEach((link , index) => {
    link.addEventListener('click' , (e) => {
        e.preventDefault()
        sections[index].scrollIntoView({
            behavior : 'smooth'
        })
        // sections[index].classList.add('active-class')
        // removeActiveExcept(index)
    })
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


