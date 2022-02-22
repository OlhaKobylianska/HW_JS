console.log("Sample JavaScript #5 HW #19");

let container = null;
let changeIndicator = null;

let createContainer = function() {
  elem = document.createElement("div");
  elem.setAttribute("class", "carousel");
  elem.setAttribute("id", "carousel");

  document.querySelector("body").appendChild(elem);
  container = document.querySelector("#carousel");
}

function createSlides(n) {
  slidesContainer = document.createElement("ul");
  slidesContainer.setAttribute("class", "slides");

  for (i = 0; i < n; i++) {
    let slidesItem = document.createElement("li");
    let slidesLink = document.createElement("a");

    slidesItem.setAttribute(
      "class",
      i === 0 ? "slides__item active" : "slides__item"
    );
    slidesLink.setAttribute("href", "#");

    slidesItem.appendChild(slidesLink);
    slidesContainer.appendChild(slidesItem);
  }

  container.appendChild(slidesContainer);
}

function createIndicators(n) {
  indicatorsCreate = document.createElement("div");
  indicatorsCreate.setAttribute("class", "indicators");

  for (i = 0; i < n; i++) {
    let indicatorsItem = document.createElement("span");

    indicatorsItem.setAttribute(
      "class",
      i === 0 ? "indicators__item active" : "indicators__item"
    );
    indicatorsItem.setAttribute("data-slide-to", i);

    indicatorsCreate.appendChild(indicatorsItem);
  }

  container.appendChild(indicatorsCreate);
}

function createControls() {
  controlsCreate = document.createElement("div");
  controlsCreate.setAttribute("class", "controls");

  for (i = 0; i < 3; i++) {
    let controlsItem = document.createElement("div");
    let controlsItemI = document.createElement("i");

    const item = "controls__item controls";
    const itemI = "fas fa";

    controlsItem.setAttribute(
      "class",
      i === 0 ? `${item}__prev` : i === 1 ? `${item}__next` : `${item}__pause`
    );
    controlsItemI.setAttribute(
      "class",
      i === 0
        ? `${itemI}-chevron-left`
        : i === 1
        ? `${itemI}-chevron-right`
        : `${itemI}-play`
    );

    controlsItem.appendChild(controlsItemI);
    controlsCreate.appendChild(controlsItem);
  }

  container.appendChild(controlsCreate);
}

function createStyle() {
  let createStyle = document.createElement("style");

  let style = `.carousel {
      position: absolute;
      background-color: gray;
      width: 100%;
      height: 100vh;
    }
    ul, .controls {
      position: relative
    }
    .indicators {
      width:100%;
      display: flex;
      justify-content: space-around;
    }
    .indicators__item {
      display: block;
      width: 50px;
      height: 50px;
      background-color: green;
    }`;

  createStyle.innerHTML = style;
  container.appendChild(createStyle);
}

function indicatorsHandler(e) {
  let target = e.target;

  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';

    if (changeIndicator !== null) changeIndicator.removeAttribute('style');

    changeIndicator = target;
  }
}

function setListener() {
  let indicatorsContainer = document.querySelector('div.indicators');

  indicatorsContainer.addEventListener('click', indicatorsHandler);
}

function createCarousel(slidesCount) {
  // createContainer();
  container = document.querySelector("#carousel");
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  setListener();
}

createCarousel(5);
