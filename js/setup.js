'use strict';

const names = [
  `Иван`,
  `Хуан Себастьян`,
  `Мария`,
  `Кристоф`,
  `Виктор`,
  `Юлия`,
  `Люпита`,
  `Вашингтон`
];

const surnames = [
  `да Марья`,
  `Верон`,
  `Мирабелла`,
  `Вальц`,
  `Онопко`,
  `Топольницкая`,
  `Нионго`,
  `Ирвинг`
];

const coatColors = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`
];

const eyesColors = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`
];

const getWizardsArray = (namesArr, surnamesArr, coatColorsArr, eyesColorsArr) => {
  const wizardsArray = [];
  for (let i = 0; i < names.length; i++) {
    const wizard = {};
    wizard.name = `${namesArr[getRandomInt(0, namesArr.length)]} ${surnamesArr[getRandomInt(0, surnamesArr.length)]}`;
    wizard.coatColor = coatColorsArr[getRandomInt(0, coatColorsArr.length - 1)];
    wizard.eyesColor = eyesColorsArr[getRandomInt(0, eyesColorsArr.length - 1)];
    wizardsArray.push(wizard);
  }
  return wizardsArray;
};
const wizardsArr = getWizardsArray(names, surnames, coatColors, eyesColors);

const tempalte = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const wizardsList = document.querySelector(`.setup-similar-list`);

const renderWizardCard = (index) => {
  const wizardCard = tempalte.cloneNode(true);
  wizardCard.querySelector(`.setup-similar-label`).textContent = wizardsArr[index].name;
  wizardCard.querySelector(`.wizard-coat`).style.fill = wizardsArr[index].coatColor;
  wizardCard.querySelector(`.wizard-eyes`).style.fill = wizardsArr[index].eyesColor;
  return wizardCard;
};

const renderWizardsList = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < wizardsArr.length; i++) {
    fragment.appendChild(renderWizardCard(i));
  }
  wizardsList.appendChild(fragment);
};

const setup = document.querySelector(`.setup`);
const setupSimilar = document.querySelector(`.setup-similar`);

setup.classList.remove(`hidden`);
setupSimilar.classList.remove(`hidden`);
renderWizardsList();
