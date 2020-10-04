'use strict';

(() => {
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
    setup.style.top = ``;
    setup.style.left = ``;
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

  const colorize = (element, colorsArr, htmlClass) => {
    const color = colorsArr[window.util.getRandomInt(0, colorsArr.length)];
    if (element.tagName.toLowerCase() === `div`) {
      element.style.backgroundColor = color;
    } else {
      element.style.fill = color;
    }
    setup.querySelector(`input[name="${htmlClass}-color"]`).value = color;
  };

  const wizardCoat = setup.querySelector(`.setup-wizard .wizard-coat`);
  const chooseWizardCoat = () => {
    colorize(wizardCoat, window.util.coatColors, `coat`);
  };

  const wizardEyes = setup.querySelector(`.setup-wizard .wizard-eyes`);
  const chooseWizardEyes = () => {
    colorize(wizardEyes, window.util.eyesColors, `eyes`);
  };

  const wizardFireball = setup.querySelector(`.setup-fireball-wrap`);
  const chooseWizardFireball = () => {
    colorize(wizardFireball, window.util.fireballColors, `fireball`);
  };

  setupSimilar.classList.remove(`hidden`);

  window.setup = {
    setup
  };
})();

