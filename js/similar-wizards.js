'use strict';

(() => {
  const getRank = (wizard) => {
    let rank = 0;

    if (wizard.colorCoat === window.util.startCoatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.util.startEyesColor) {
      rank += 1;
    }

    return rank;
  };

  const updateWizards = () => {
    window.wizardsList.renderWizardsList(window.load.wizards.sort((previous, current) => {
      let rankDiff = getRank(current) - getRank(previous);
      return rankDiff;
    }));
  };

  window.similarWizards = {
    updateWizards,
    getRank
  };
})();
