
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))



// ******************** PROJECTS *********************
function addRippleTransitionDelay(arrayOfHtmlElements, delay) {
  arrayOfHtmlElements.forEach((elem, index) => {
    elem.style.setProperty('--transition-delay', `${index * delay}ms`);
  });
}

function addLeftRipple(arrayOfHtmlElements, shift) {
  arrayOfHtmlElements.forEach((elem, index) => {
    elem.style.setProperty('--translation-distance', `${index * shift}px` )
  })
}


function removeTransitionDelay(arrayOfHtmlElements) {
  arrayOfHtmlElements.forEach((elem) => {
    elem.style.setProperty('--transition-delay', `0ms`);
  });
}

function addClass(arrayOfHtmlElements, className) {
  arrayOfHtmlElements.forEach((elem) => {
    elem.classList.add(className);
  })
}

function removeClass(arrayOfHtmlElements, className) {
  arrayOfHtmlElements.forEach((elem) => {
    elem.classList.remove(className);
  })

}




const projectHiddenClass = "project-hidden";
const projectShowClass = "project-show";

const projectList = document.querySelector("#project-list");
const projectContainers = document.querySelectorAll('#project-list .project-container');

// add initial left properties:
const CARD_SHIFT = -300
addLeftRipple(projectContainers, CARD_SHIFT);


const button = document.getElementById("projects-button")
var toggle = true;
button.addEventListener('click', () => {
  console.log("here")
  if (toggle) {
    addLeftRipple(projectContainers, 0 );
  } else {
    addLeftRipple(projectContainers, CARD_SHIFT );
  }

  toggle = !toggle;
})



const observerProjectCards = new IntersectionObserver((entries) => {
    console.log("observer project cards")
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            addRippleTransitionDelay(projectContainers, 400);
            addClass(projectContainers, 'project-show')
            removeClass(projectContainers, 'project-hidden')
            
        } else {
            removeTransitionDelay(projectContainers);
            addClass(projectContainers, 'project-hidden')
            removeClass(projectContainers, 'project-show')
        }

    })
})


observerProjectCards.observe(projectList);
