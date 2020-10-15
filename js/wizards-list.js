'use strict';

(() => {
  const WIZARDS_NUMBER = 4;

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

  const getWizardsTestArray = (namesArr, surnamesArr, coatColorsArr, eyesColorsArr) => {
    const wizardsArray = [];
    for (let i = 0; i < names.length; i++) {
      const wizard = {};
      wizard.name = `${namesArr[window.util.getRandomInt(0, namesArr.length)]} ${surnamesArr[window.util.getRandomInt(0, surnamesArr.length)]}`;
      wizard.coatColor = coatColorsArr[window.util.getRandomInt(0, coatColorsArr.length - 1)];
      wizard.eyesColor = eyesColorsArr[window.util.getRandomInt(0, eyesColorsArr.length - 1)];
      wizardsArray.push(wizard);
    }
    return wizardsArray;
  };
  const wizardsTestArr = getWizardsTestArray(names, surnames, window.util.coatColors, window.util.eyesColors);

  const tempalte = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
  const wizardsList = document.querySelector(`.setup-similar-list`);

  const renderWizardCard = (index, wizardsArr) => {
    const wizardCard = tempalte.cloneNode(true);
    wizardCard.querySelector(`.setup-similar-label`).textContent = wizardsArr[index].name;
    wizardCard.querySelector(`.wizard-coat`).style.fill = wizardsArr[index].colorCoat;
    wizardCard.querySelector(`.wizard-eyes`).style.fill = wizardsArr[index].colorEyes;
    return wizardCard;
  };

  const renderWizardsList = (wizardsArr) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < WIZARDS_NUMBER; i++) {
      fragment.appendChild(renderWizardCard(i, wizardsArr));
    }
    while (wizardsList.firstChild) {
      wizardsList.removeChild(wizardsList.firstChild);
    }
    wizardsList.appendChild(fragment);
  };

  window.wizardsList = {
    renderWizardsList,
    wizardsTestArr,
    wizardsList
  };
})();
