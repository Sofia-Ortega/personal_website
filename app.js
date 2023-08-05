
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
function addRipple(arrayOfHtmlElements, shift) {
  arrayOfHtmlElements.forEach((elem, index) => {
    elem.style.setProperty('--translation-distance', `${index * shift}px` )
    elem.style.setProperty('--rotate-deg', `0deg` )
  })
}

function addRotation(arrayOfHtmlElements) {
  const degrees = [1, 7, -7]
  arrayOfHtmlElements.forEach((elem, index) => {
    elem.style.setProperty('--rotate-deg', `${degrees[index]}deg`);
  })
}

function removeRotation(arrayOfHtmlElements) {
  console.log("here")
  arrayOfHtmlElements.forEach((elem) => {
    elem.style.setProperty('--rotate-deg', `0deg`);
  })

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
const CARD_SHIFT = -375;
addRipple(projectContainers, CARD_SHIFT);
addRotation(projectContainers);

const observerProjectCards = new IntersectionObserver((entries) => {
    console.log("observer project cards")
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            addRipple(projectContainers, 0);
            addClass(projectContainers, 'project-show')
            removeClass(projectContainers, 'project-hidden')
            removeRotation(projectContainers);
            
        } else {
            addRipple(projectContainers, CARD_SHIFT );
            addClass(projectContainers, 'project-hidden')
            removeClass(projectContainers, 'project-show')
            addRotation(projectContainers);
        }

    })
})


observerProjectCards.observe(projectList);
