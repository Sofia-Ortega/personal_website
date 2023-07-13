
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

const projectSection = document.querySelector("#projects");
const projectContainers = document.querySelectorAll('#project-list .project-container');
projectContainers.forEach((container, index) => {
  container.style.transitionDelay = `${index * 400}ms`;
});


const observerProjectCards = new IntersectionObserver((entries) => {
    console.log("objserver project cards")
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            console.log("intersects")
            projectContainers.forEach((container) => container.style.opacity = 1)
        } else {
            projectContainers.forEach((container) => container.style.opacity = 0)
        }

    })
})


observerProjectCards.observe(projectSection);
