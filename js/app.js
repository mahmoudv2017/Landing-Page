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

    // function for calculating how much distance between the element and top of the viewport
        function caculateTop(element) {
            return element.getBoundingClientRect().y
        }

    // function for removing active class from all sections except the one insight
        function removeActiveExcept(index) {
            sections.forEach((sec, i) => {
                if (i !== index) {
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



//making the side menu
    const menu = document.createElement('span')
    menu.setAttribute('style', 'cursor:pointer;')
    // styling the side menu button

        for (let i = 0; i < 3; i++) {
            const arrow = document.createElement('span')
            arrow.textContent = '-'
            arrow.classList.add('arrow')
            menu.appendChild(arrow)
        }

    //adding it to the DOM . it looks good in the page i swear

        nav_ul.append(menu)







//making the li items

    //adding the sections dynamically to the ul

        for (let i = 1; i < 5; i++) {
            
            const li = document.createElement('li')
            li.textContent = `section ${i}`
            nav_ul.appendChild(li)
        }

    nav_li = document.querySelectorAll('#navbar__list li')



    


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

    
        

    /* 
        making the functionality of the side menu button 
        which only appears in viewports where the width is smaller than 35em
    */
        menu.addEventListener('click', () => {
            nav_ul.classList.toggle('side-ul')
        })

// Scroll to section on link click

    // Scroll to anchor ID using scrollTO event

        nav_li.forEach((link, index) => {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                sections[index].scrollIntoView({
                    behavior: 'smooth'
                })
            })
        })

// Set sections as active

    // Add class 'active' to section when near top of viewport
    
        document.onscroll = () => {
            sections.forEach((sec, index) => {
                const distance = caculateTop(sec)
                if (distance < 100 && distance >= -25) {
                    sec.classList.add('active-class')
                    removeActiveExcept(index)
                }
            })
        }
