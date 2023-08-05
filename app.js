
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
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
function addRippleTransition(arrayOfHtmlElements, delay) {
  arrayOfHtmlElements.forEach((elem, index) => {
    elem.style.transitionDelay = `${index * delay}ms`
  });
}

function removeTransition(arrayOfHtmlElements) {
  arrayOfHtmlElements.forEach((elem, index) => {
    elem.style.transitionDelay = `0ms`; 
  });
}

const projectSection = document.querySelector("#project-list");
const projectContainers = document.querySelectorAll('#project-list .project-container');

// addRippleTransition(projectContainers, 400);

const observerProjectCards = new IntersectionObserver((entries) => {
    console.log("observer project cards")
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            projectContainers.forEach((container) => {
              addRippleTransition(projectContainers, 400);
              container.style.opacity = 1
            })
        } else {
            projectContainers.forEach((container) => {
              removeTransition(projectContainers);
              container.style.opacity = 0
            })
        }

    })
})


observerProjectCards.observe(projectSection);
