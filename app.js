// *********************** GLOBAL ************************
/**
 * Adds given class name to each of the elements in the input
 *
 * @param {NodeListOf<Element>} inputElementArray - array of html elements
 * @param {string} className - name of the class WITHOUT the dot. (eg) .my-class -> "my-class"
 */
function addClass(inputElementArray, className) {
  inputElementArray.forEach((elem) => {
    elem.classList.add(className);
  });
}

/**
 * Removes given class name to each of the elements in the input
 *
 * @param {NodeListOf<Element>} inputElementArray - array of html elements
 * @param {string} className - name of the class WITHOUT the dot. (eg) .my-class -> "my-class"
 */
function removeClass(inputElementArray, className) {
  inputElementArray.forEach((elem) => {
    elem.classList.remove(className);
  });
}

// *********************** INTRO **************************
const hiddenTransitionUpElements = document.querySelectorAll(
  ".hidden-transition-up"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-transition-up");
    } else {
      entry.target.classList.remove("show-transition-up");
    }
  });
});

// ******************** PROJECTS *********************
/**
 * Updates translation-distancs css variable, by formula index * shift
 *
 * @param {NodeListOf<Element>} inputElementArray
 * @param {number} shift - will set each translation-distance by index * shift pixels
 */
function setTranslationDistance(inputElementArray, shift) {
  inputElementArray.forEach((elem, index) => {
    elem.style.setProperty("--translation-distance", `${index * shift}px`);
  });
}

/**
 * Sets rotate-deg css variable to each element[index] with given degree[index]
 * Length of both inputs MUST match up
 *
 * @param {NodeListOf<Element>} inputElementArray
 * @param {number[]} degrees - list of rotation degrees want your input to be rotated as
 */
function setRotationDegree(inputElementArray, degrees) {
  inputElementArray.forEach((elem, index) => {
    elem.style.setProperty("--rotate-deg", `${degrees[index]}deg`);
  });
}

/**
 * Resets rotate-deg css to 0 for each input element
 *
 * @param {NodeListOf<Element>} inputElementArray
 */
function resetRotationDegree(inputElementArray) {
  inputElementArray.forEach((elem) => {
    elem.style.setProperty("--rotate-deg", `0deg`);
  });
}

const projectHiddenClass = "project-hidden";
const projectShowClass = "project-show";

const projectList = document.querySelector("#project-list");
const projectContainers = document.querySelectorAll(
  "#project-list .project-container"
);

// add initial left properties:
const CARD_SHIFT = -375;
const ROTATION_DEGREES = [1, 7, -7];
setTranslationDistance(projectContainers, CARD_SHIFT);
setRotationDegree(projectContainers, ROTATION_DEGREES);

const observerProjectCards = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTranslationDistance(projectContainers, 0);
      resetRotationDegree(projectContainers);

      addClass(projectContainers, "project-show");
      removeClass(projectContainers, "project-hidden");
    } else {
      setTranslationDistance(projectContainers, CARD_SHIFT);
      setRotationDegree(projectContainers, ROTATION_DEGREES);

      addClass(projectContainers, "project-hidden");
      removeClass(projectContainers, "project-show");
    }
  });
});

observerProjectCards.observe(projectList);

// *********************** BOX CONTAINERS ******************
hiddenTransitionUpElements.forEach((el) => observer.observe(el));

const hiddenTransitionRight = document.querySelectorAll(".box-container");

const transitionRightObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-box-container");
    } else {
      entry.target.classList.remove("show-box-container");
    }
  });
});

hiddenTransitionRight.forEach((el) => transitionRightObserver.observe(el));
