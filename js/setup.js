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

const fireballColors = [
  `#ee4830`,
  `#30a8ee`,
  `#5ce6c0`,
  `#e848d5`,
  `#e6e848`
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
const setupOpenButton = document.querySelector(`.setup-open`);
const setupCloseButton = document.querySelector(`.setup-close`);
const setupSimilar = document.querySelector(`.setup-similar`);

const onPopupEscPress = (evt) => {
  if (evt.key === `Escape`) {
    setup.classList.add(`hidden`);
  }
};

const setupOpen = () => {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
  userNameInput.addEventListener(`input`, checkNameValidity);
  setupCloseButton.addEventListener(`click`, setupClose);
  wizardCoat.addEventListener(`click`, chooseWizardCoat);
  wizardEyes.addEventListener(`click`, chooseWizardEyes);
  wizardFireball.addEventListener(`click`, chooseWizardFireball);
};

const setupClose = () => {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
  userNameInput.removeEventListener(`input`, checkNameValidity);
  setupCloseButton.removeEventListener(`click`, setupClose);
  wizardCoat.removeEventListener(`click`, chooseWizardCoat);
  wizardEyes.removeEventListener(`click`, chooseWizardEyes);
  wizardFireball.removeEventListener(`click`, chooseWizardFireball);
};

setupOpenButton.addEventListener(`click`, () => {
  setupOpen();
});

setupOpenButton.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    setupOpen();
  }
});

setupCloseButton.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    setupClose();
  }
});

const userNameInput = setup.querySelector(`.setup-user-name`);

const checkNameValidity = () => {
  const minLength = userNameInput.minLength;
  const maxLength = userNameInput.maxLength;
  const currentLength = userNameInput.value.length;
  if (currentLength < minLength) {
    userNameInput.setCustomValidity(`Мин. 2 символа`);
  } else if (currentLength > maxLength) {
    userNameInput.setCustomValidity(`Макс. 25 символов`);
  } else {
    userNameInput.setCustomValidity(``);
  }
  userNameInput.reportValidity();
};

const wizardCoat = setup.querySelector(`.setup-wizard .wizard-coat`);
const chooseWizardCoat = () => {
  const coatColor = coatColors[getRandomInt(0, coatColors.length)];
  wizardCoat.style.fill = coatColor;
  setup.querySelector(`input[name="coat-color"]`).value = coatColor;
};

const wizardEyes = setup.querySelector(`.setup-wizard .wizard-eyes`);
const chooseWizardEyes = () => {
  const eyesColor = eyesColors[getRandomInt(0, eyesColors.length)];
  wizardEyes.style.fill = eyesColor;
  setup.querySelector(`input[name="eyes-color"]`).value = eyesColor;
};

const wizardFireball = setup.querySelector(`.setup-fireball-wrap`);
const chooseWizardFireball = () => {
  const fireballColor = fireballColors[getRandomInt(0, fireballColors.length)];
  wizardFireball.style.backgroundColor = fireballColor;
  setup.querySelector(`input[name="fireball-color"]`).value = fireballColor;
};

setupSimilar.classList.remove(`hidden`);
renderWizardsList();
