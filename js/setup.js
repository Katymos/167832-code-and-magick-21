'use strict';

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
const similarList = userDialog.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

const names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

const secondNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

const coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

const eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

const getRndInteger = function (arr) {
  const index = Math.ceil(Math.random() * arr.length - 1);

  return arr[index];
};

const wizards = [
  {
    name: `${getRndInteger(names)} ${getRndInteger(secondNames)}`,
    coatColor: getRndInteger(coatColors),
    eyesColor: getRndInteger(eyesColor)
  },
  {
    name: `${getRndInteger(names)} ${getRndInteger(secondNames)}`,
    coatColor: getRndInteger(coatColors),
    eyesColor: getRndInteger(eyesColor)
  },
  {
    name: `${getRndInteger(names)} ${getRndInteger(secondNames)}`,
    coatColor: getRndInteger(coatColors),
    eyesColor: getRndInteger(eyesColor)
  },
  {
    name: `${getRndInteger(names)} ${getRndInteger(secondNames)}`,
    coatColor: getRndInteger(coatColors),
    eyesColor: getRndInteger(eyesColor)
  }
];

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

const fillWizard = function () {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarList.appendChild(fragment);
};

fillWizard();

userDialog.querySelector('.setup-similar').classList.remove('hidden');
